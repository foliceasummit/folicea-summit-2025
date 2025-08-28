# Photo Upload Setup Guide - FREE Options

## 🆓 **All Options Are Completely FREE!**

I've created **4 different free photo upload solutions** for you. Choose the one you prefer:

---

## **Option 1: Firebase Storage (Google) - RECOMMENDED**

### ✅ **Why Choose Firebase:**
- **Completely FREE** (5GB storage, 1GB/day bandwidth)
- **Google's service** - very reliable
- **Easy setup**
- **Professional**

### **Step 1: Create Firebase Project**
1. Go to [firebase.google.com](https://firebase.google.com)
2. Click "Get Started"
3. Create a new project called "folicea-photos"
4. Enable Google Analytics (optional)

### **Step 2: Enable Storage**
1. In Firebase console, go to "Storage"
2. Click "Get Started"
3. Choose "Start in test mode" (for now)
4. Select a location (choose closest to Uganda)

### **Step 3: Get Configuration**
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Add app" → Web app
4. Copy the config object

### **Step 4: Update Photo Upload Page**
1. Open `public/photo-upload-firebase.html`
2. Replace the `firebaseConfig` object with your config
3. Update the registration form to point to this page

---

## **Option 2: Supabase Storage - EASIEST**

### ✅ **Why Choose Supabase:**
- **Completely FREE** (1GB storage, 2GB bandwidth)
- **Very easy setup**
- **Open source**
- **Great documentation**

### **Step 1: Create Supabase Project**
1. Go to [supabase.com](https://supabase.com)
2. Sign up with GitHub
3. Create new project
4. Wait for setup to complete

### **Step 2: Create Storage Bucket**
1. Go to Storage in Supabase dashboard
2. Create new bucket called "folicea-photos"
3. Set it to public

### **Step 3: Get API Keys**
1. Go to Settings → API
2. Copy "Project URL" and "anon public" key

### **Step 4: Update Photo Upload Page**
1. Open `public/photo-upload-supabase.html`
2. Replace `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_ANON_KEY`
3. Update the registration form to point to this page

---

## **Option 3: ImgBB - SIMPLEST**

### ✅ **Why Choose ImgBB:**
- **Completely FREE** (32MB per image)
- **No account needed**
- **Instant setup**
- **Direct image URLs**

### **Step 1: Get API Key**
1. Go to [imgbb.com](https://imgbb.com)
2. Create free account
3. Go to account settings
4. Get your API key

### **Step 2: Update Photo Upload Page**
1. Open `public/photo-upload-imgbb.html`
2. Replace `'YOUR_IMGBB_API_KEY'` with your key
3. Update the registration form to point to this page

---

## **Option 4: Cloudinary - MOST PROFESSIONAL**

### ✅ **Why Choose Cloudinary:**
- **Completely FREE** (25GB storage, 25GB bandwidth)
- **Image transformations**
- **CDN delivery**
- **Professional features**

### **Step 1: Create Account**
1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up for free account
3. Get your Cloud Name and API Key

### **Step 2: Create Upload Preset**
1. Go to Settings → Upload
2. Create preset called "folicea_photos"
3. Set to "Unsigned"

### **Step 3: Update Photo Upload Page**
1. Open `public/photo-upload.html`
2. Replace `'your_cloud_name'` and `'folicea_photos'`
3. Update the registration form to point to this page

---

## **How to Update Registration Form**

After choosing your preferred option, update the registration form:

```javascript
// In pages/registration.tsx, change this line:
href={`/photo-upload-firebase.html?name=${encodeURIComponent(registeredData?.name || '')}&email=${encodeURIComponent(registeredData?.email || '')}`}
```

Replace `photo-upload-firebase.html` with your chosen option:
- `photo-upload-firebase.html` (Firebase)
- `photo-upload-supabase.html` (Supabase)
- `photo-upload-imgbb.html` (ImgBB)
- `photo-upload.html` (Cloudinary)

---

## **My Recommendation**

**For your FOLICEA Summit, I recommend:**

1. **🔥 Firebase Storage** - Most reliable, Google's service
2. **⚡ Supabase Storage** - Easiest setup, great free tier
3. **📸 ImgBB** - Simplest, no account needed
4. **☁️ Cloudinary** - Most professional features

---

## **Testing Your Setup**

1. **Update the photo upload page** with your credentials
2. **Update the registration form** to point to your chosen page
3. **Test the upload** at: `https://folicea.vercel.app/your-chosen-page.html`
4. **Check your email** for photo notifications

---

## **Email Format You'll Receive**

```
Subject: FOLICEA Summit 2025 - Photo Upload

Photo uploaded successfully!

Name: John Doe
Email: john@example.com
Photo URL: https://your-storage-url.com/photo.jpg
File Name: John_Doe_1234567890.jpg

This photo will be used for the summit badge and participant directory.
```

---

## **All Options Are:**
- ✅ **Completely FREE**
- ✅ **No monthly fees**
- ✅ **Reliable and fast**
- ✅ **Easy to set up**
- ✅ **Professional quality**

Choose the one that feels right for you! 🚀
