import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET(request: NextRequest) {
  try {
    const { db } = await connectToDatabase();
    
    const progress = await db.collection('todos').aggregate([
      {
        $group: {
          _id: { day: '$day', week: '$week' },
          totalTasks: { $sum: 1 },
          completedTasks: { $sum: { $cond: ['$completed', 1, 0] } }
        }
      },
      {
        $project: {
          day: '$_id.day',
          week: '$_id.week',
          totalTasks: 1,
          completedTasks: 1,
          progress: {
            $cond: [
              { $eq: ['$totalTasks', 0] },
              0,
              { $multiply: [{ $divide: ['$completedTasks', '$totalTasks'] }, 100] }
            ]
          }
        }
      },
      { $sort: { week: 1, day: 1 } }
    ]).toArray();

    return NextResponse.json({ success: true, data: progress });
  } catch (error) {
    console.error('Error fetching progress:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch progress' },
      { status: 500 }
    );
  }
}