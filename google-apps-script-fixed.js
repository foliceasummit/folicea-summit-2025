function doPost(e) {
  try {
    // Get form data
    const formData = e.parameter;
    const name = formData.name;
    const email = formData.email;
    
    // Get the uploaded file - handle different ways the file might be sent
    let fileBlob = null;
    
    // Try to get file from different possible sources
    if (e.parameter.photo) {
      fileBlob = e.parameter.photo;
    } else if (e.parameter.file) {
      fileBlob = e.parameter.file;
    } else if (e.parameter.attachment) {
      fileBlob = e.parameter.attachment;
    } else if (e.parameter.upload) {
      fileBlob = e.parameter.upload;
    }
    
    // If still no file, try to get from the raw data
    if (!fileBlob && e.postData) {
      const postData = e.postData;
      if (postData.type === "application/x-www-form-urlencoded") {
        // Parse the raw data to find the file
        const rawData = postData.contents;
        // This is a simplified approach - in practice, we need to handle multipart data
      }
    }
    
    // Check if we have a file
    if (!fileBlob) {
      throw new Error("No photo file received. Please make sure to select a photo before uploading.");
    }
    
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
