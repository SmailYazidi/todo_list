'use client';

import { useState, useEffect } from 'react';
import { ObjectId } from 'mongodb';

interface Todo {
  _id: ObjectId;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  duration: number; // in minutes
}

type ViewType = 'day' | 'week' | 'month' | 'all';
type FilterType = 'all' | 'completed' | 'pending';
type Priority = 'low' | 'medium' | 'high';
export default function TodoApp() {










  
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<ViewType>('day');
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showForm, setShowForm] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high', // Change this line
    dueDate: new Date().toISOString().split('T')[0],
    duration: 30
  });
  const priorities = ['low', 'medium', 'high'] as const;
  const durationPresets = [15, 30, 45, 60, 90, 120, 180, 240];

  // Fetch todos
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      params.append('view', view);
      
      if (view === 'day' && selectedDate) {
        params.append('date', selectedDate);
      }
      
      if (filter === 'completed') params.append('completed', 'true');
      if (filter === 'pending') params.append('completed', 'false');

      const response = await fetch(`/api/todos?${params}`);
      const data = await response.json();
      setTodos(data.todos || []);
    } catch (error) {
      console.error('Failed to fetch todos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [view, filter, selectedDate]);

  // Create or update todo
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingTodo ? `/api/todos/${editingTodo._id}` : '/api/todos';
      const method = editingTodo ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({
          title: '',
          description: '',
          priority: 'medium',
          dueDate: selectedDate,
          duration: 30
        });
        setShowForm(false);
        setEditingTodo(null);
        fetchTodos();
      }
    } catch (error) {
      console.error('Failed to save todo:', error);
    }
  };

  // Toggle completion
  const toggleComplete = async (id: ObjectId) => {
    try {
      await fetch(`/api/todos/${id}`, { method: 'PATCH' });
      fetchTodos();
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    }
  };

  // Delete todo
  const deleteTodo = async (id: ObjectId) => {
    try {
      await fetch(`/api/todos/${id}`, { method: 'DELETE' });
      fetchTodos();
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  // Edit todo
   const startEdit = (todo: Todo) => {
    setEditingTodo(todo);
    setFormData({
      title: todo.title,
      description: todo.description || '',
      priority: todo.priority, // No more type error here
      dueDate: new Date(todo.dueDate).toISOString().split('T')[0],
      duration: todo.duration
    });
    setShowForm(true);
  };
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-50 border-red-200';
      case 'medium': return 'text-amber-500 bg-amber-50 border-amber-200';
      case 'low': return 'text-emerald-500 bg-emerald-50 border-emerald-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  const getViewTitle = () => {
    switch (view) {
      case 'day': return `Tasks for ${new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`;
      case 'week': return 'This Week\'s Tasks';
      case 'month': return 'This Month\'s Tasks';
      default: return 'All Tasks';
    }
  };

  const getTotalDuration = () => {
    return todos.reduce((total, todo) => total + (todo.completed ? 0 : todo.duration), 0);
  };

  const getCompletedCount = () => {
    return todos.filter(todo => todo.completed).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                TaskFlow
              </h1>
              <p className="text-gray-600 mt-2">Organize your day with beautiful simplicity</p>
            </div>
            
            <button
              onClick={() => {
                setFormData({
                  title: '',
                  description: '',
                  priority: 'medium',
                  dueDate: selectedDate,
                  duration: 30
                });
                setShowForm(true);
              }}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Task
            </button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl text-white">
              <div className="text-2xl font-bold">{todos.length}</div>
              <div className="text-blue-100">Total Tasks</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 rounded-2xl text-white">
              <div className="text-2xl font-bold">{getCompletedCount()}</div>
              <div className="text-emerald-100">Completed</div>
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 rounded-2xl text-white">
              <div className="text-2xl font-bold">{todos.length - getCompletedCount()}</div>
              <div className="text-amber-100">Pending</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl text-white">
              <div className="text-2xl font-bold">{formatDuration(getTotalDuration())}</div>
              <div className="text-purple-100">Remaining</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* View Selector */}
            <div className="flex bg-gray-100 p-1 rounded-xl">
              {(['day', 'week', 'month', 'all'] as ViewType[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all duration-200 ${
                    view === v
                      ? 'bg-white text-indigo-600 shadow-md'
                      : 'text-gray-600 hover:text-indigo-600'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Date Selector (only for day view) */}
            {view === 'day' && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-gray-900
"
                />
              </div>
            )}

            {/* Filter Selector */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as FilterType)}
              className="px-4 py-2 border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-gray-900
"
            >
              <option value="all">All Tasks</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Todo Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {editingTodo ? 'Edit Task' : 'Create New Task'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Task Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
    placeholder="What needs to be done?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
      placeholder="Add more details..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Priority
                    </label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                 className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
    >
                      {priorities.map((p) => (
                        <option key={p} value={p} className="capitalize">
                          {p} Priority
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Due Date
                    </label>
                    <input
                      type="date"
                      value={formData.dueDate}
                      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Duration (minutes)
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
   >
                      {durationPresets.map((duration) => (
                        <option key={duration} value={duration}>
                          {formatDuration(duration)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                  >
                    {editingTodo ? 'Update Task' : 'Create Task'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingTodo(null);
                    }}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Todo List */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">{getViewTitle()}</h2>
            <p className="text-gray-600 mt-1">
              {loading ? 'Loading...' : `${todos.length} task${todos.length !== 1 ? 's' : ''} total`}
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {loading ? (
              <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                  <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="text-gray-500">Loading your tasks...</p>
              </div>
            ) : todos.length === 0 ? (
              <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
                <p className="text-gray-500 mb-6">Create your first task to get started!</p>
                <button
                  onClick={() => {
                    setFormData({
                      title: '',
                      description: '',
                      priority: 'medium',
                      dueDate: selectedDate,
                      duration: 30
                    });
                    setShowForm(true);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                >
                  Create First Task
                </button>
              </div>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo._id.toString()}
                  className={`p-6 hover:bg-gray-50/50 transition-all duration-200 ${
                    todo.completed ? 'opacity-75' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Custom Checkbox */}
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo._id)}
                        className="sr-only"
                        id={`todo-${todo._id}`}
                      />
                      <label
                        htmlFor={`todo-${todo._id}`}
                        className={`flex items-center justify-center w-6 h-6 rounded-full border-2 cursor-pointer transition-all duration-200 ${
                          todo.completed
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 border-emerald-500'
                            : 'border-gray-300 hover:border-indigo-400 bg-white'
                        }`}
                      >
                        {todo.completed && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </label>
                    </div>

                    {/* Todo Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3
                            className={`font-semibold text-lg leading-6 ${
                              todo.completed
                                ? 'line-through text-gray-500'
                                : 'text-gray-900'
                            }`}
                          >
                            {todo.title}
                          </h3>
                          {todo.description && (
                            <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                              {todo.description}
                            </p>
                          )}
                          
                          {/* Tags and Info */}
                          <div className="flex items-center gap-3 mt-4">
                            <span
                              className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${getPriorityColor(todo.priority)}`}
                            >
                              <div className={`w-2 h-2 rounded-full mr-2 ${
                                todo.priority === 'high' ? 'bg-red-400' :
                                todo.priority === 'medium' ? 'bg-amber-400' : 'bg-emerald-400'
                              }`}></div>
                              {todo.priority}
                            </span>
                            
                            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-full">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {formatDuration(todo.duration)}
                            </span>
                            
                            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-full">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {formatDate(todo.dueDate)}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 ml-4">
                          <button
                            onClick={() => startEdit(todo)}
                            className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
                            title="Edit task"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => deleteTodo(todo._id)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                            title="Delete task"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}