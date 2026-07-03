import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, Plus, Trash2 } from 'lucide-react';

export const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review Q4 projections', completed: false, priority: 'High', date: 'Today' },
    { id: 2, text: 'Send proposal to TechNova', completed: true, priority: 'Medium', date: 'Yesterday' },
    { id: 3, text: 'Follow up with Alice Freeman', completed: false, priority: 'Low', date: 'Tomorrow' },
    { id: 4, text: 'Prepare presentation slides', completed: false, priority: 'High', date: 'Oct 26' },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const getPriorityColor = (p: string) => {
    if(p === 'High') return 'text-red-600 bg-red-50 ring-red-500/20';
    if(p === 'Medium') return 'text-yellow-600 bg-yellow-50 ring-yellow-500/20';
    return 'text-green-600 bg-green-50 ring-green-500/20';
  }

  return (
    <div className="h-full space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
          <p className="text-sm text-gray-500 mt-1">Keep track of your daily action items</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
          <Plus className="w-4 h-4 mr-2" /> Add Task
        </button>
      </div>

      <div className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex space-x-4 bg-gray-50 text-sm font-medium">
          <button className="text-indigo-600 border-b-2 border-indigo-600 pb-4 -mb-4 px-2">All Tasks</button>
          <button className="text-gray-500 hover:text-gray-900 pb-4 -mb-4 px-2 transition">Incomplete</button>
          <button className="text-gray-500 hover:text-gray-900 pb-4 -mb-4 px-2 transition">Completed</button>
        </div>
        <ul className="divide-y divide-gray-100">
          {tasks.map(task => (
            <li key={task.id} className="p-4 hover:bg-gray-50 transition flex items-center justify-between group">
              <div className="flex items-center space-x-4 flex-1">
                <button onClick={() => toggleTask(task.id)} className="focus:outline-none shrink-0">
                  {task.completed ? 
                    <CheckCircle2 className="w-6 h-6 text-indigo-600" /> : 
                    <Circle className="w-6 h-6 text-gray-300 hover:text-indigo-400 transition" />
                  }
                </button>
                <div className="flex flex-col min-w-0">
                  <span className={`text-sm font-medium truncate ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                    {task.text}
                  </span>
                  <div className="flex items-center mt-1 space-x-3 text-xs text-gray-500">
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {task.date}</span>
                    <span className={`inline-flex items-center rounded-md px-2 py-0.5 font-medium ring-1 ring-inset ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition p-2">
                <Trash2 className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
