# Formspree Setup Guide (Simple & Reliable)

## What is Formspree?
Formspree is a form handling service that:
- ✅ **Collects form submissions** automatically
- ✅ **Sends email notifications** to you
- ✅ **Sends confirmation emails** to users
- ✅ **Stores data** in a dashboard
- ✅ **Free tier**: 50 submissions/month
- ✅ **No setup required** - just sign up and get form IDs

## Step 1: Create Formspree Account
1. Go to [Formspree.io](https://formspree.io)
2. Click "Sign Up" (free)
3. Create account with your email

## Step 2: Create Forms
1. **Contact Form:**
   - Click "New Form"
   - Name: "FOLICEA Contact"
   - Copy the form ID (looks like: `xrgjabrg`)

2. **Registration Form:**
   - Click "New Form" 
   - Name: "FOLICEA Registration"
   - Copy the form ID (looks like: `xrgjabrg`)

## Step 3: Update Website Forms
Replace `YOUR_FORMSPREE_ID` in the code with your actual form IDs:

### Contact Form:
```javascript
const response = await fetch('https://formspree.io/f/xrgjabrg', {
```

### Registration Form:
```javascript
const response = await fetch('https://formspree.io/f/xrgjabrg', {
```

## Step 4: Configure Email Notifications
1. Go to your form in Formspree dashboard
2. Click "Settings" → "Notifications"
3. Add your email: `foliceasummit@gmail.com`
4. Enable "Send confirmation emails to users"

## Benefits:
- ✅ **Works immediately** - no complex setup
- ✅ **Reliable** - 99.9% uptime
- ✅ **Professional emails** with your branding
- ✅ **Data storage** - view all submissions
- ✅ **Export data** to CSV/Excel
- ✅ **Mobile app** for notifications

## Cost:
- **Free**: 50 submissions/month
- **Paid**: $8/month for 1000 submissions
- **Perfect for your summit** - likely under 50 registrations
