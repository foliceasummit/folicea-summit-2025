import { NextApiRequest, NextApiResponse } from 'next';
import { getCollection } from '../../lib/db';
import sgMail from '@sendgrid/mail';

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log('Registration API - Environment check:');
  console.log('SENDGRID_API_KEY present:', !!process.env.SENDGRID_API_KEY);
  console.log('NOTIFICATION_EMAIL:', process.env.NOTIFICATION_EMAIL);
  console.log('MONGODB_URI present:', !!process.env.MONGODB_URI);

  try {
    const formData = await new Promise((resolve, reject) => {
      const formidable = require('formidable');
      const form = formidable({
        maxFileSize: 5 * 1024 * 1024, // 5MB
        keepExtensions: true,
      });

      form.parse(req, (err: any, fields: any, files: any) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    const { fields, files } = formData as any;

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'nationality', 'currentCountry', 'city', 'occupation', 'yearsOfExperience', 'expectations', 'contributions', 'arrivalDate', 'arrivalTime', 'modeOfTravel', 'roomPreference', 'foodPreference', 'tshirtSize', 'tshirtColor'];
    
    for (const field of requiredFields) {
      if (!fields[field] || !fields[field][0]) {
        return res.status(400).json({ 
          success: false,
          message: `${field} is required` 
        });
      }
    }

    // Prepare registration data
    const registrationData: any = {
      firstName: fields.firstName[0],
      lastName: fields.lastName[0],
      email: fields.email[0],
      phone: fields.phone[0],
      dateOfBirth: fields.dateOfBirth[0],
      nationality: fields.nationality[0],
      currentCountry: fields.currentCountry[0],
      city: fields.city[0],
      occupation: fields.occupation[0],
      organization: fields.organization ? fields.organization[0] : '',
      yearsOfExperience: fields.yearsOfExperience[0],
      expectations: fields.expectations[0],
      contributions: fields.contributions[0],
      arrivalDate: fields.arrivalDate[0],
      arrivalTime: fields.arrivalTime[0],
      modeOfTravel: fields.modeOfTravel[0],
      flightBusNumber: fields.flightBusNumber ? fields.flightBusNumber[0] : '',
      roomPreference: fields.roomPreference[0],
      mobilityAccess: fields.mobilityAccess ? fields.mobilityAccess[0] === 'true' : false,
      foodPreference: fields.foodPreference[0],
      foodAllergies: fields.foodAllergies ? fields.foodAllergies[0] : '',
      tshirtSize: fields.tshirtSize[0],
      tshirtColor: fields.tshirtColor[0],
      createdAt: new Date()
    };

    // Handle profile photo if uploaded
    if (files.profilePhoto && files.profilePhoto[0]) {
      const photo = files.profilePhoto[0];
      registrationData.profilePhoto = {
        filename: photo.originalFilename,
        path: photo.filepath,
        size: photo.size,
        mimetype: photo.mimetype
      };
    }

    // Save to MongoDB
    console.log('Saving to MongoDB...');
    try {
      const registrationsCollection = await getCollection('registrations');
      const result = await registrationsCollection.insertOne(registrationData);
      console.log('MongoDB save successful:', result.insertedId);
    } catch (mongodbError) {
      console.error('MongoDB save failed:', mongodbError);
      return res.status(500).json({
        success: false,
        message: 'Database connection failed. Please try again later.',
        error: mongodbError instanceof Error ? mongodbError.message : 'Unknown database error'
      });
    }

    // Send confirmation email to registrant
    const emailContent = `
Dear ${registrationData.firstName} ${registrationData.lastName},

Thank you for registering for the FOLICEA Summit 2025!

Your registration has been received and is being processed. Here are your registration details:

Registration ID: ${result.insertedId}
Name: ${registrationData.firstName} ${registrationData.lastName}
Email: ${registrationData.email}
Event: FOLICEA Summit 2025
Date: November 28 - December 1, 2025
Venue: Kampala Serena Hotel, Uganda

To complete your registration, please send payment via one of the following methods:

1. Mobile Money (MoMo): +250 792 109 775
2. WhatsApp: +231 776 038 583
3. Visa Card: Available at the venue

Important Information:
- Your tag will be issued upon arrival
- Please bring a copy of this confirmation email
- Arrival date: ${registrationData.arrivalDate} at ${registrationData.arrivalTime}
- Room preference: ${registrationData.roomPreference}
- Food preference: ${registrationData.foodPreference}
- T-shirt: ${registrationData.tshirtSize} ${registrationData.tshirtColor}

If you have any questions, please contact us at foliceasummit@gmail.com or call +250 792 109 775.

We look forward to seeing you in Kampala!

Best regards,
FOLICEA Summit 2025 Organizing Committee
    `;

    try {
      await sgMail.send({
        to: registrationData.email,
        from: process.env.NOTIFICATION_EMAIL!,
        subject: 'FOLICEA Summit 2025 - Registration Confirmation',
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>')
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue with registration even if email fails
    }

    // Send notification email to organizers
    const organizerEmail = `
New Registration Received:

Name: ${registrationData.firstName} ${registrationData.lastName}
Email: ${registrationData.email}
Phone: ${registrationData.phone}
Country: ${registrationData.currentCountry}
City: ${registrationData.city}
Occupation: ${registrationData.occupation}
Arrival: ${registrationData.arrivalDate} at ${registrationData.arrivalTime}
Room: ${registrationData.roomPreference}
Food: ${registrationData.foodPreference}
T-shirt: ${registrationData.tshirtSize} ${registrationData.tshirtColor}

Registration ID: ${result.insertedId}
    `;

    try {
      await sgMail.send({
        to: process.env.NOTIFICATION_EMAIL!,
        from: process.env.NOTIFICATION_EMAIL!,
        subject: 'New FOLICEA Summit Registration',
        text: organizerEmail
      });
    } catch (emailError) {
      console.error('Organizer email sending failed:', emailError);
      // Continue with registration even if email fails
    }

    res.status(200).json({
      success: true,
      message: 'Registration successful',
      registrationId: result.insertedId
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
