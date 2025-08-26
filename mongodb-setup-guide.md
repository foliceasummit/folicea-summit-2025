# MongoDB Setup Guide - Fix Authentication Issue

## Current Problem:
MongoDB connection failing with "bad auth : authentication failed"

## Solution: Create New Database User

### Step 1: Go to MongoDB Atlas
1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Sign in to your account
3. Select your project

### Step 2: Create New Database User
1. Click "Database Access" in left sidebar
2. Click "+ ADD NEW DATABASE USER"
3. Fill in:
   - **Username**: `folicea`
   - **Password**: `folicea2025` (simple password)
   - **Database User Privileges**: `Read and write to any database`
4. Click "Add User"

### Step 3: Get Connection String
1. Go to "Database" → "Connect"
2. Click "Connect your application"
3. Copy the connection string
4. Replace username and password with new ones

### Step 4: Update Vercel
1. Go to Vercel → Settings → Environment Variables
2. Update `MONGODB_URI` with new connection string
3. Save

## Expected Connection String:
```
mongodb+srv://folicea:folicea2025@folicea.gwdfrqm.mongodb.net/?retryWrites=true&w=majority&appName=folicea
```

## Test:
After updating, test: `https://folicea.vercel.app/api/test-mongodb`
