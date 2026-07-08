import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, Plus, Trash2, X } from 'lucide-react';

export const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review Q4 projections', completed: false, priority: 'High', date: 'Today' },
    { id: 2, text: 'Send proposal to TechNova', completed: true, priority: 'Medium', date: 'Yesterday' },
    { id: 3, text: 'Follow up with Alice Freeman', completed: false, priority: 'Low', date: 'Tomorrow' },
    { id: 4, text: 'Prepare presentation slides', completed: false, priority: 'High', date: 'Oct 26' },
  ]);
  
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ text: '', priority: 'Medium', date: 'Today' });

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks([{ id: Date.now(), ...newTask, completed: false }, ...tasks]);
    setIsModalOpen(false);
    setNewTask({ text: '', priority: 'Medium', date: 'Today' });
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'Incomplete') return !t.completed;
    if (filter === 'Completed') return t.completed;
    return true;
  });

  const getPriorityColor = (p: string) => {
    if(p === 'High') return 'text-red-600 bg-red-50 ring-red-500/20';
    if(p === 'Medium') return 'text-yellow-600 bg-yellow-50 ring-yellow-500/20';
    return 'text-green-600 bg-green-50 ring-green-500/20';
  }

  return (
    <div className="h-full space-y-6 max-w-4xl mx-auto relative">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
          <p className="text-sm text-gray-500 mt-1">Keep track of your daily action items</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Task
        </button>
      </div>

      <div className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex space-x-4 bg-gray-50 text-sm font-medium">
          <button 
            onClick={() => setFilter('All')} 
            className={`pb-4 -mb-4 px-2 transition ${filter === 'All' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}
          >All Tasks</button>
          <button 
            onClick={() => setFilter('Incomplete')} 
            className={`pb-4 -mb-4 px-2 transition ${filter === 'Incomplete' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}
          >Incomplete</button>
          <button 
            onClick={() => setFilter('Completed')} 
            className={`pb-4 -mb-4 px-2 transition ${filter === 'Completed' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}
          >Completed</button>
        </div>
        
        {filteredTasks.length === 0 ? (
          <div className="p-12 text-center text-gray-500 font-medium">
            No tasks found in this category.
          </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {filteredTasks.map(task => (
              <li key={task.id} className="p-4 hover:bg-gray-50 transition flex items-center justify-between group">
                <div className="flex items-center space-x-4 flex-1">
                  <button onClick={() => toggleTask(task.id)} className="focus:outline-none shrink-0 transition-transform active:scale-90">
                    {task.completed ? 
                      <CheckCircle2 className="w-6 h-6 text-indigo-600" /> : 
                      <Circle className="w-6 h-6 text-gray-300 hover:text-indigo-400 transition" />
                    }
                  </button>
                  <div className="flex flex-col min-w-0">
                    <span className={`text-sm font-medium truncate transition-colors ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
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
                <button 
                  onClick={() => deleteTask(task.id)}
                  className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition p-2"
                  title="Delete Task"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Add Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-lg font-bold text-gray-900">Add New Task</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddTask} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Task Description</label>
                <input required type="text" placeholder="e.g. Call client back" value={newTask.text} onChange={e => setNewTask({...newTask, text: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Priority</label>
                  <select value={newTask.priority} onChange={e => setNewTask({...newTask, priority: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Due Date</label>
                  <input required type="text" placeholder="e.g. Tomorrow" value={newTask.date} onChange={e => setNewTask({...newTask, date: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
              </div>
              <div className="pt-4 flex justify-end space-x-3 border-t border-gray-100 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-bold text-white hover:bg-indigo-700">Save Task</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
