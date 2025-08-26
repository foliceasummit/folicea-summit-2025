import { NextApiRequest, NextApiResponse } from 'next';
import { getCollection } from '../../lib/db';
import sgMail from '@sendgrid/mail';

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Contact API - Environment check:');
    console.log('SENDGRID_API_KEY present:', !!process.env.SENDGRID_API_KEY);
    console.log('NOTIFICATION_EMAIL:', process.env.NOTIFICATION_EMAIL);
    console.log('MONGODB_URI present:', !!process.env.MONGODB_URI);

    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Validation failed:', { name: !!name, email: !!email, message: !!message });
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    console.log('Saving to MongoDB...');
    // Save to MongoDB
    const contactsCollection = await getCollection('contacts');
    const result = await contactsCollection.insertOne({
      name,
      email,
      message,
      createdAt: new Date()
    });
    console.log('MongoDB save successful:', result.insertedId);

    // Send notification email to organizers
    const notificationEmail = `
New Contact Message Received:

Name: ${name}
Email: ${email}
Message: ${message}
Contact ID: ${result.insertedId}
    `;

    console.log('Sending notification email...');
    try {
      await sgMail.send({
        to: process.env.NOTIFICATION_EMAIL!,
        from: process.env.NOTIFICATION_EMAIL!,
        subject: `New Contact Message from ${name}`,
        text: notificationEmail
      });
      console.log('Notification email sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails
    }

    // Send confirmation email to the person who contacted
    const confirmationEmail = `
Dear ${name},

Thank you for contacting FOLICEA Summit 2025!

We have received your message and will get back to you as soon as possible.

Your message:
${message}

If you have any urgent inquiries, please contact us at:
- Email: foliceasummit@gmail.com
- Phone: +250 792 109 775
- WhatsApp: +231 776 038 583

Best regards,
FOLICEA Summit 2025 Organizing Committee
    `;

    console.log('Sending confirmation email...');
    try {
      await sgMail.send({
        to: email,
        from: process.env.NOTIFICATION_EMAIL!,
        subject: 'FOLICEA Summit 2025 - Message Received',
        text: confirmationEmail
      });
      console.log('Confirmation email sent successfully');
    } catch (emailError) {
      console.error('Confirmation email sending failed:', emailError);
      // Continue even if email fails
    }

    console.log('Contact form processed successfully');
    res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
