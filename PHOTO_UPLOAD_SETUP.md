# Photo Upload Setup Guide

## Option 1: ImgBB (Recommended - Easiest)

### Step 1: Get ImgBB API Key
1. Go to [imgbb.com](https://imgbb.com)
2. Create a free account
3. Go to your account settings
4. Get your API key (it's free)

### Step 2: Update the Photo Upload Page
1. Open `public/photo-upload-imgbb.html`
2. Find this line: `imgbbData.append('key', 'YOUR_IMGBB_API_KEY');`
3. Replace `'YOUR_IMGBB_API_KEY'` with your actual API key

### Step 3: Test the Upload
1. Visit: `https://folicea.vercel.app/photo-upload-imgbb.html`
2. Fill in the form and upload a photo
3. You should receive an email with the photo URL

## Option 2: Cloudinary (More Professional)

### Step 1: Create Cloudinary Account
1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up for a free account
3. Get your Cloud Name and API Key

### Step 2: Create Upload Preset
1. In Cloudinary dashboard, go to Settings > Upload
2. Create a new upload preset called "folicea_photos"
3. Set it to "Unsigned" for security

### Step 3: Update the Photo Upload Page
1. Open `public/photo-upload.html`
2. Replace `'your_cloud_name'` with your actual cloud name
3. Replace `'folicea_photos'` with your upload preset name

## How It Works

1. **User fills registration form** → Gets link to photo upload page
2. **User uploads photo** → Photo goes to ImgBB/Cloudinary
3. **Photo URL sent to your email** → Via Web3Forms
4. **You get organized photo collection** → All photos in one place

## Benefits

- ✅ **No Google Drive complexity**
- ✅ **Direct upload from the page**
- ✅ **Automatic email notifications**
- ✅ **Organized photo collection**
- ✅ **Free to use**
- ✅ **Reliable and fast**

## Email Format

You'll receive emails like this:
```
Subject: FOLICEA Summit 2025 - Photo Upload

Photo uploaded successfully!

Name: John Doe
Email: john@example.com
Photo URL: https://i.ibb.co/abc123/photo.jpg
File Name: john_photo.jpg

This photo will be used for the summit badge and participant directory.
```

## Troubleshooting

**If upload fails:**
1. Check your API key is correct
2. Make sure the photo is under 5MB
3. Try a different photo format (JPG, PNG)

**If no email received:**
1. Check your spam folder
2. Verify Web3Forms is working
3. Check the browser console for errors

## Next Steps

1. Choose ImgBB or Cloudinary
2. Get your API key
3. Update the photo upload page
4. Test the upload
5. You're ready to go!

The photo upload system is now much simpler and more reliable than Google Drive!
