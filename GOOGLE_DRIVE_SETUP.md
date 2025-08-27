# Google Drive Photo Upload Setup Guide

## Step 1: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    // Get form data
    const formData = e.parameter;
    const name = formData.name;
    const email = formData.email;
    
    // Get the uploaded file
    const fileBlob = e.parameter.photo;
    const fileName = `${name}_${Date.now()}.jpg`;
    
    // Create folder if it doesn't exist
    const folderName = "FOLICEA Summit 2025 Photos";
    let folder;
    try {
      folder = DriveApp.getFoldersByName(folderName).next();
    } catch (error) {
      folder = DriveApp.createFolder(folderName);
    }
    
    // Create file in the folder
    const file = folder.createFile(fileBlob);
    file.setName(fileName);
    
    // Set file permissions to anyone with link can view
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    // Send confirmation email
    const subject = "Photo Upload Confirmation - FOLICEA Summit 2025";
    const message = `
Dear ${name},

Thank you for uploading your photo for the FOLICEA Summit 2025!

Your photo has been successfully uploaded and will be used for your summit badge and participant directory.

Photo Details:
- Name: ${fileName}
- Upload Date: ${new Date().toLocaleDateString()}
- File Size: ${(fileBlob.getBytes().length / 1024).toFixed(2)} KB

If you need to upload a different photo, please contact us at foliceasummit@gmail.com

Best regards,
FOLICEA Summit 2025 Team
    `;
    
    MailApp.sendEmail(email, subject, message);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: "Photo uploaded successfully",
        fileName: fileName
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: "Upload failed: " + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("FOLICEA Photo Upload Service is running");
}
```

## Step 2: Deploy the Script

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set "Execute as" to "Me"
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the Web App URL (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## Step 3: Update the Photo Upload Form

1. Open `public/photo-upload.html`
2. Replace `YOUR_GOOGLE_SCRIPT_ID` in the form action with your actual script ID
3. The form action should look like: `action="https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec"`

## Step 4: Test the Setup

1. Deploy your website
2. Go to the photo upload page
3. Test uploading a photo
4. Check your Google Drive for the "FOLICEA Summit 2025 Photos" folder
5. Verify you receive a confirmation email

## Step 5: Manage Photos

- All photos will be stored in the "FOLICEA Summit 2025 Photos" folder in your Google Drive
- Photos are named with the person's name and timestamp
- You can easily download, view, or share photos from Google Drive
- Photos are set to "Anyone with link can view" for easy access

## Troubleshooting

- If photos aren't uploading, check the Google Apps Script logs
- Make sure the script is deployed as a web app with proper permissions
- Verify the script ID in the photo upload form is correct
- Check that the Google Drive API is enabled in your Google Cloud Console

## Security Notes

- The script creates a public folder for photos
- Photos are accessible to anyone with the link
- Consider setting up additional security if needed
- You can modify the script to restrict access as needed
