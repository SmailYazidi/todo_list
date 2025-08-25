import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export interface Todo {
  _id?: ObjectId;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  duration: number; // in minutes
}

// GET - Fetch todos with filtering
export async function GET(request: NextRequest) {
  try {
    const { db } = await connectToDatabase();
    const searchParams = request.nextUrl.searchParams;
    const view = searchParams.get('view') || 'all'; // 'day', 'week', 'month', 'all'
    const completed = searchParams.get('completed');
    const selectedDate = searchParams.get('date'); // for specific date filtering

    let filter: any = {};
    
    // Filter by completion status
    if (completed !== null) {
      filter.completed = completed === 'true';
    }

    // Filter by date range
    if (selectedDate && view === 'day') {
      const startOfDay = new Date(selectedDate);
      const endOfDay = new Date(startOfDay);
      endOfDay.setDate(endOfDay.getDate() + 1);
      filter.dueDate = { $gte: startOfDay, $lt: endOfDay };
    } else {
      const now = new Date();
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      switch (view) {
        case 'day':
          const endOfDay = new Date(startOfDay);
          endOfDay.setDate(endOfDay.getDate() + 1);
          filter.dueDate = { $gte: startOfDay, $lt: endOfDay };
          break;
          
        case 'week':
          const startOfWeek = new Date(startOfDay);
          startOfWeek.setDate(startOfDay.getDate() - startOfDay.getDay());
          const endOfWeek = new Date(startOfWeek);
          endOfWeek.setDate(startOfWeek.getDate() + 7);
          filter.dueDate = { $gte: startOfWeek, $lt: endOfWeek };
          break;
          
        case 'month':
          const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
          const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
          filter.dueDate = { $gte: startOfMonth, $lt: endOfMonth };
          break;
      }
    }

    const todos = await db.collection('todos')
      .find(filter)
      .sort({ dueDate: 1, priority: -1, createdAt: -1 })
      .toArray();

    return NextResponse.json({ todos });
  } catch (error) {
    console.error('GET /api/todos error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch todos' }, 
      { status: 500 }
    );
  }
}

// POST - Create new todo
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, priority = 'medium', dueDate, duration = 30 } = body;

    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' }, 
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const now = new Date();
    
    const newTodo: Omit<Todo, '_id'> = {
      title,
      description: description || '',
      completed: false,
      priority,
      dueDate: dueDate ? new Date(dueDate) : now,
      createdAt: now,
      updatedAt: now,
      duration: parseInt(duration) || 30
    };

    const result = await db.collection('todos').insertOne(newTodo);
    const todo = await db.collection('todos').findOne({ _id: result.insertedId });

    return NextResponse.json({ todo }, { status: 201 });
  } catch (error) {
    console.error('POST /api/todos error:', error);
    return NextResponse.json(
      { error: 'Failed to create todo' }, 
      { status: 500 }
    );
  }
}

// DELETE - Delete all completed todos
export async function DELETE() {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('todos').deleteMany({ completed: true });
    
    return NextResponse.json({ 
      message: `Deleted ${result.deletedCount} completed todos` 
    });
  } catch (error) {
    console.error('DELETE /api/todos error:', error);
    return NextResponse.json(
      { error: 'Failed to delete completed todos' }, 
      { status: 500 }
    );
  }
}