# Alternative Photo Upload Solution

## Problem
Google Apps Script has limitations with file uploads from HTML forms, causing the "blob is null" error.

## Solution: Use Google Drive Direct Upload

### Option 1: Google Drive Upload Link (Recommended)

1. **Create a Google Drive folder**:
   - Go to [drive.google.com](https://drive.google.com)
   - Create a folder called "FOLICEA Summit 2025 Photos"
   - Right-click the folder → "Share" → "Copy link"
   - Set permissions to "Anyone with the link can add files"

2. **Update the photo upload form** to redirect to Google Drive:
   - Users click "Upload Photo"
   - They get redirected to Google Drive upload page
   - They upload their photo directly to your folder
   - You receive an email notification

### Option 2: Use a Third-Party Service

We can use services like:
- **Formspree** (with file uploads)
- **Netlify Forms** (if you switch hosting)
- **Airtable** (professional solution)

### Option 3: Manual Process

1. **Keep the current registration form** (Web3Forms works perfectly)
2. **Add instructions** for photo upload:
   - "After registration, please email your photo to: foliceasummit@gmail.com"
   - "Include your full name in the email subject"
   - "We'll manually add your photo to our system"

## Recommended Approach

**Use Option 1 (Google Drive Direct Upload)** because:
- ✅ **Reliable**: Works 100% of the time
- ✅ **Simple**: No complex setup
- ✅ **Free**: No additional costs
- ✅ **Organized**: All photos in one folder
- ✅ **Notifications**: You get email alerts

## Implementation

Would you like me to:
1. **Update the photo upload form** to redirect to Google Drive?
2. **Create a Google Drive upload link** for you?
3. **Add clear instructions** for manual photo submission?

The registration form will continue working perfectly with Web3Forms, and we'll handle photos separately.
