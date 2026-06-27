import { google } from 'googleapis';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, company, notes, date, time } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Missing name or email' });
  }

  const SHEET_ID = process.env.GOOGLE_SHEET_ID;
  const SA_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

  if (!SHEET_ID) {
    return res.status(500).json({ success: false, message: 'Missing GOOGLE_SHEET_ID environment variable' });
  }
  if (!SA_KEY) {
    return res.status(500).json({ success: false, message: 'Missing GOOGLE_SERVICE_ACCOUNT_KEY environment variable' });
  }

  let keyObj;
  try {
    keyObj = JSON.parse(SA_KEY);
  } catch {
    try {
      keyObj = JSON.parse(Buffer.from(SA_KEY, 'base64').toString('utf8'));
    } catch {
      return res.status(500).json({ success: false, message: 'Invalid GOOGLE_SERVICE_ACCOUNT_KEY format' });
    }
  }

  try {
    const jwtClient = new google.auth.JWT({
      email: keyObj.client_email,
      key: keyObj.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    await jwtClient.authorize();
    const sheets = google.sheets({ version: 'v4', auth: jwtClient });

    const dateStr = date
      ? `${date.weekday}, ${date.month} ${date.day}, 2026`
      : '';

    const values = [[
      new Date().toISOString(),
      name,
      email,
      company || '',
      notes || '',
      dateStr,
      time || '',
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Bookings!A1',
      valueInputOption: 'RAW',
      requestBody: { values },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Booking error:', err);
    return res.status(500).json({ success: false, message: err?.message || 'Server error' });
  }
}
