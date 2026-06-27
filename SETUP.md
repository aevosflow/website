# AevosFlow — Vercel Deployment Setup

## What Changed
The booking backend is now a Vercel Serverless Function at `api/book.js`.
No separate Express server needed. Everything runs on Vercel.

---

## Required Environment Variables

Set these in your Vercel dashboard → Project → Settings → Environment Variables:

| Variable | Value |
|---|---|
| `GOOGLE_SHEET_ID` | The ID from your Google Sheet URL: `docs.google.com/spreadsheets/d/**{THIS_PART}**/edit` |
| `GOOGLE_SERVICE_ACCOUNT_KEY` | The full JSON content of your service account key file |

### How to get GOOGLE_SERVICE_ACCOUNT_KEY
1. Go to Google Cloud Console → IAM & Admin → Service Accounts
2. Create a service account (or use existing)
3. Create a JSON key → download it
4. Paste the **entire JSON content** as the env variable value

### Share your Google Sheet
In your Google Sheet → Share → paste the service account email (ends in `@...iam.gserviceaccount.com`) → give **Editor** access.

---

## Google Sheet Format
Your sheet must have a tab named **Bookings** with these headers in row 1:
```
Timestamp | Name | Email | Company | Notes | Date | Time
```

---

## Deploy
Just push to GitHub and connect to Vercel. No extra config needed.
