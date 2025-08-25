import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// GET - Fetch single todo
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid todo ID' }, 
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const todo = await db.collection('todos').findOne({ _id: new ObjectId(id) });

    if (!todo) {
      return NextResponse.json(
        { error: 'Todo not found' }, 
        { status: 404 }
      );
    }

    return NextResponse.json({ todo });
  } catch (error) {
    console.error('GET /api/todos/[id] error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch todo' }, 
      { status: 500 }
    );
  }
}

// PUT - Update todo
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid todo ID' }, 
        { status: 400 }
      );
    }

    const body = await request.json();
    const { title, description, completed, priority, dueDate, duration } = body;

    const { db } = await connectToDatabase();
    
    const updateData: any = {
      updatedAt: new Date()
    };

    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (completed !== undefined) updateData.completed = completed;
    if (priority !== undefined) updateData.priority = priority;
    if (dueDate !== undefined) updateData.dueDate = new Date(dueDate);
    if (duration !== undefined) updateData.duration = parseInt(duration) || 30;

    const result = await db.collection('todos').updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Todo not found' }, 
        { status: 404 }
      );
    }

    const updatedTodo = await db.collection('todos').findOne({ _id: new ObjectId(id) });
    return NextResponse.json({ todo: updatedTodo });
  } catch (error) {
    console.error('PUT /api/todos/[id] error:', error);
    return NextResponse.json(
      { error: 'Failed to update todo' }, 
      { status: 500 }
    );
  }
}

// PATCH - Toggle completion status
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid todo ID' }, 
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    
    // First get the current todo to toggle its completed status
    const currentTodo = await db.collection('todos').findOne({ _id: new ObjectId(id) });
    
    if (!currentTodo) {
      return NextResponse.json(
        { error: 'Todo not found' }, 
        { status: 404 }
      );
    }

    const result = await db.collection('todos').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          completed: !currentTodo.completed,
          updatedAt: new Date()
        }
      }
    );

    const updatedTodo = await db.collection('todos').findOne({ _id: new ObjectId(id) });
    return NextResponse.json({ todo: updatedTodo });
  } catch (error) {
    console.error('PATCH /api/todos/[id] error:', error);
    return NextResponse.json(
      { error: 'Failed to toggle todo completion' }, 
      { status: 500 }
    );
  }
}

// DELETE - Delete single todo
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid todo ID' }, 
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const result = await db.collection('todos').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Todo not found' }, 
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('DELETE /api/todos/[id] error:', error);
    return NextResponse.json(
      { error: 'Failed to delete todo' }, 
      { status: 500 }
    );
  }
}