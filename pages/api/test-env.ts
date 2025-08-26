import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    sendgridKey: process.env.SENDGRID_API_KEY ? 'Present' : 'Missing',
    notificationEmail: process.env.NOTIFICATION_EMAIL || 'Missing',
    mongodbUri: process.env.MONGODB_URI ? 'Present' : 'Missing',
    allEnvVars: {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY ? '***' + process.env.SENDGRID_API_KEY.slice(-4) : 'Missing',
      NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL,
      MONGODB_URI: process.env.MONGODB_URI ? 'Present' : 'Missing',
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? 'Present' : 'Missing',
      ADMIN_USERNAME: process.env.ADMIN_USERNAME,
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? 'Present' : 'Missing'
    }
  });
}
