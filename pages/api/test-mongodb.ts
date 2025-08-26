import { NextApiRequest, NextApiResponse } from 'next';
import { getCollection } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('Testing MongoDB connection...');
    console.log('MONGODB_URI present:', !!process.env.MONGODB_URI);
    
    // Test the connection
    const testCollection = await getCollection('test');
    
    // Try a simple operation
    const result = await testCollection.insertOne({
      test: true,
      timestamp: new Date(),
      message: 'MongoDB connection test'
    });
    
    console.log('MongoDB test successful:', result.insertedId);
    
    // Clean up - delete the test document
    await testCollection.deleteOne({ _id: result.insertedId });
    
    res.status(200).json({
      success: true,
      message: 'MongoDB connection successful',
      testId: result.insertedId,
      mongodbUri: process.env.MONGODB_URI ? 'Present' : 'Missing'
    });

  } catch (error) {
    console.error('MongoDB test error:', error);
    res.status(500).json({
      success: false,
      message: 'MongoDB connection failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      mongodbUri: process.env.MONGODB_URI ? 'Present' : 'Missing'
    });
  }
}
