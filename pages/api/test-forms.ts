import { NextApiRequest, NextApiResponse } from 'next';
import { getCollection } from '../../lib/db';
import sgMail from '@sendgrid/mail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const results = {
    environment: {
      mongodbUri: process.env.MONGODB_URI ? 'Present' : 'Missing',
      sendgridKey: process.env.SENDGRID_API_KEY ? 'Present' : 'Missing',
      notificationEmail: process.env.NOTIFICATION_EMAIL || 'Missing',
      nodeEnv: process.env.NODE_ENV || 'development'
    },
    mongodb: {
      status: 'Not tested',
      error: null
    },
    sendgrid: {
      status: 'Not tested',
      error: null
    }
  };

  // Test MongoDB Connection
  try {
    console.log('Testing MongoDB connection...');
    const testCollection = await getCollection('test');
    await testCollection.insertOne({
      test: true,
      timestamp: new Date(),
      message: 'Form test connection'
    });
    results.mongodb.status = 'Connected successfully';
    console.log('MongoDB test successful');
  } catch (error) {
    results.mongodb.status = 'Connection failed';
    results.mongodb.error = error instanceof Error ? error.message : 'Unknown error';
    console.error('MongoDB test failed:', error);
  }

  // Test SendGrid
  if (process.env.SENDGRID_API_KEY) {
    try {
      console.log('Testing SendGrid...');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      const msg = {
        to: process.env.NOTIFICATION_EMAIL || 'test@example.com',
        from: process.env.NOTIFICATION_EMAIL || 'test@example.com',
        subject: 'FOLICEA Forms Test',
        text: 'This is a test email to verify SendGrid configuration.',
      };

      await sgMail.send(msg);
      results.sendgrid.status = 'Email sent successfully';
      console.log('SendGrid test successful');
    } catch (error) {
      results.sendgrid.status = 'Email sending failed';
      results.sendgrid.error = error instanceof Error ? error.message : 'Unknown error';
      console.error('SendGrid test failed:', error);
    }
  } else {
    results.sendgrid.status = 'No API key configured';
  }

  res.status(200).json(results);
}
