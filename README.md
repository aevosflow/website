**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Booking server (Google Sheets integration)

This project includes a small Express server that can record booked discovery calls into a Google Sheet. It uses a Google Service Account to authenticate with the Sheets API.

1. Install server dependencies (after updating package.json):

```bash
npm install
```

2. Create a Google Service Account and give it Editor access to the target Google Sheet. Create or use a sheet with a tab named `Bookings` and share it with the service account email.

3. Set environment variables (example using PowerShell):

```powershell
$env:GOOGLE_SERVICE_ACCOUNT_KEY = '<paste-raw-json-or-base64-json-here>'
$env:GOOGLE_SHEET_ID = '<your-spreadsheet-id>'
$env:PORT = '4000'
```

You can paste the service account JSON as-is (raw JSON) or base64-encoded.

4. Start the booking server:

```bash
npm run start:server
```

5. Configure the frontend to use the backend by setting `VITE_BOOKING_ENDPOINT` in your `.env` (Vite) or in your environment when running the dev server. Example `.env`:

```
VITE_BOOKING_ENDPOINT=http://localhost:4000
```

6. Open the site and schedule a discovery call. Submitted bookings will be appended as a new row in the `Bookings` sheet.

Notes:
- The server expects a worksheet/tab named `Bookings` with columns starting at A (it will append). 
- Keep your service account key secret — do not commit it to source control.
