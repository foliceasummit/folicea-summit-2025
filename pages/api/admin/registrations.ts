import { NextApiRequest, NextApiResponse } from 'next';
import { getCollection } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const registrationsCollection = await getCollection('registrations');
    
    // Fetch all registrations, sorted by registration date (newest first)
    const registrations = await registrationsCollection
      .find({})
      .sort({ registrationDate: -1 })
      .toArray();

    res.status(200).json({ 
      registrations,
      total: registrations.length
    });

  } catch (error) {
    console.error('Failed to fetch registrations:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
