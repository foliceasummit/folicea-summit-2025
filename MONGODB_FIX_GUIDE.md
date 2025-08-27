# MongoDB Connection Fix Guide

## Current Issue
The registration and contact forms are failing due to MongoDB authentication issues.

## Step-by-Step Solution

### Step 1: Check Current MongoDB URI
Go to Vercel → Settings → Environment Variables and check your `MONGODB_URI`

### Step 2: Create New MongoDB User (Recommended)
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Sign in to your account
3. Select your project
4. Go to "Database Access" in left sidebar
5. Click "+ ADD NEW DATABASE USER"
6. Fill in:
   - **Username**: `folicea`
   - **Password**: `folicea2025` (simple password)
   - **Database User Privileges**: `Read and write to any database`
7. Click "Add User"

### Step 3: Get New Connection String
1. Go to "Database" → "Connect"
2. Click "Connect your application"
3. Copy the connection string
4. Replace username and password with new ones

### Step 4: Update Vercel Environment Variables
1. Go to Vercel → Settings → Environment Variables
2. Find `MONGODB_URI`
3. Update with new connection string:
   ```
   mongodb+srv://folicea:folicea2025@folicea.gwdfrqm.mongodb.net/?retryWrites=true&w=majority&appName=folicea
   ```
4. Save

### Step 5: Test the Connection
Visit: `https://folicea.vercel.app/api/test-forms`

This will show you:
- ✅ MongoDB connection status
- ✅ SendGrid configuration status
- ✅ Environment variables status

### Step 6: Test Forms
After fixing MongoDB:
1. Test registration form: `https://folicea.vercel.app/registration`
2. Test contact form: `https://folicea.vercel.app/contact`

## Alternative: Fix Existing User Password
If you prefer to keep the existing user:
1. Go to MongoDB Atlas → Database Access
2. Find your existing user
3. Click "Edit"
4. Set a simple password (e.g., `folicea2025`)
5. Update the connection string in Vercel

## Expected Results
After fixing:
- ✅ Registration form saves to MongoDB
- ✅ Contact form saves to MongoDB
- ✅ Email notifications sent via SendGrid
- ✅ Confirmation emails sent to users
