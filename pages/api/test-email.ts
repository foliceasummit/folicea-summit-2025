import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('SendGrid API Key:', process.env.SENDGRID_API_KEY ? 'Present' : 'Missing');
    console.log('Notification Email:', process.env.NOTIFICATION_EMAIL);

    // Test email
    const msg = {
      to: process.env.NOTIFICATION_EMAIL!,
      from: process.env.NOTIFICATION_EMAIL!,
      subject: 'Test Email from FOLICEA Summit',
      text: 'This is a test email to verify SendGrid is working.',
      html: '<p>This is a test email to verify SendGrid is working.</p>',
    };

    await sgMail.send(msg);
    
    res.status(200).json({ 
      success: true, 
      message: 'Test email sent successfully',
      apiKeyPresent: !!process.env.SENDGRID_API_KEY,
      notificationEmail: process.env.NOTIFICATION_EMAIL
    });

  } catch (error) {
    console.error('Test email error:', error);
    res.status(500).json({
      success: false,
      message: 'Test email failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      apiKeyPresent: !!process.env.SENDGRID_API_KEY,
      notificationEmail: process.env.NOTIFICATION_EMAIL
    });
  }
}
