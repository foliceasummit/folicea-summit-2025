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
