# SendGrid Setup Guide for FOLICEA Summit 2025

## Step 1: Create SendGrid Account

1. Go to [SendGrid.com](https://sendgrid.com) and create a free account
2. Verify your email address
3. Complete the account setup process

## Step 2: Get SendGrid API Key

1. In SendGrid dashboard, go to **Settings** → **API Keys**
2. Click **Create API Key**
3. Give it a name: `folicea-api`
4. Select **Full Access** or **Restricted Access** with Mail Send permissions
5. Click **Create & View**
6. **Copy the API key** (you won't see it again!)

## Step 3: Verify Your Sender Email

1. In SendGrid dashboard, go to **Settings** → **Sender Authentication**
2. Click **Verify a Single Sender**
3. Fill in the form:
   - **From Name**: FOLICEA Summit
   - **From Email Address**: foliceasummit@gmail.com
   - **Reply To**: foliceasummit@gmail.com
   - **Company Name**: FOLICEA
   - **Address**: Your address
   - **City**: Your city
   - **Country**: Your country
4. Click **Create**
5. Check your email and click the verification link

## Step 4: Set Up Environment Variables

### For Local Development (.env.local):
```
MONGODB_URI=mongodb+srv://foliceasummit:<SummitF25>@folicea.gwdfrqm.mongodb.net/?retryWrites=true&w=majority&appName=folicea
SENDGRID_API_KEY=your_sendgrid_api_key_here
NOTIFICATION_EMAIL=foliceasummit@gmail.com
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password_here
```

### For Vercel Deployment:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `SENDGRID_API_KEY`: Your SendGrid API key
   - `NOTIFICATION_EMAIL`: foliceasummit@gmail.com
   - `NEXTAUTH_URL`: Your production URL
   - `NEXTAUTH_SECRET`: A secure random string
   - `ADMIN_USERNAME`: admin
   - `ADMIN_PASSWORD`: Your secure password

## Step 5: Test the Setup

1. Start your development server: `npm run dev`
2. Go to the registration page and submit a test registration
3. Check your email for the confirmation
4. Check the organizers email for the notification

## Features Implemented

### Registration Form:
- ✅ Saves registration data to MongoDB
- ✅ Sends confirmation email to registrant
- ✅ Sends notification email to organizers
- ✅ Handles profile photo uploads
- ✅ Includes all registration details in emails

### Contact Form:
- ✅ Saves contact messages to MongoDB
- ✅ Sends notification email to organizers
- ✅ Sends confirmation email to sender
- ✅ Includes contact details and message

### Email Templates:
- ✅ Professional formatting
- ✅ Includes all relevant information
- ✅ Contact details for urgent inquiries
- ✅ Payment instructions for registrations

## Troubleshooting

### If emails aren't sending:
1. Check your SendGrid API key is correct
2. Verify your sender email is authenticated
3. Check SendGrid dashboard for delivery status
4. Look at server logs for error messages

### If registration fails:
1. Check MongoDB connection string
2. Verify all required fields are filled
3. Check file upload size limits
4. Review server error logs

## Security Notes

- Keep your SendGrid API key secure
- Use environment variables, never hardcode secrets
- Regularly rotate your API keys
- Monitor SendGrid usage and delivery rates

## Support

For technical issues:
- Check SendGrid documentation
- Review server logs
- Test with simple email first
- Contact SendGrid support if needed
