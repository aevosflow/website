import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SA_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_KEY; // JSON string or base64 encoded

async function getSheetsClient() {
  if (!SA_KEY) throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_KEY');
  let keyObj;
  try {
    keyObj = JSON.parse(SA_KEY);
  } catch (e) {
    // try base64
    try {
      keyObj = JSON.parse(Buffer.from(SA_KEY, 'base64').toString('utf8'));
    } catch (err) {
      throw new Error('Invalid GOOGLE_SERVICE_ACCOUNT_KEY: must be JSON or base64-encoded JSON');
    }
  }

  const jwtClient = new google.auth.JWT({
    email: keyObj.client_email,
    key: keyObj.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  await jwtClient.authorize();
  return google.sheets({ version: 'v4', auth: jwtClient });
}

app.get('/availability', (_req, res) => {
  // Simple static availability; CTA handles client-side fallback if endpoint missing
  res.json({ dates: [] });
});

app.post('/book', async (req, res) => {
  const { name, email, company, notes, date, time } = req.body;
  if (!name || !email) return res.status(400).json({ success: false, message: 'Missing name or email' });
  if (!SHEET_ID) return res.status(500).json({ success: false, message: 'Missing GOOGLE_SHEET_ID in environment' });

  try {
    const sheets = await getSheetsClient();
    const values = [[new Date().toISOString(), name, email, company || '', notes || '', typeof date === 'string' ? date : JSON.stringify(date || ''), time || '']];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Bookings!A1',
      valueInputOption: 'RAW',
      requestBody: { values },
    });

    return res.json({ success: true });
  } catch (err) {
    console.error('Booking error:', err);
    return res.status(500).json({ success: false, message: (err && err.message) || 'Server error' });
  }
});

app.listen(PORT, () => console.log(`Booking server listening on http://localhost:${PORT}`));
