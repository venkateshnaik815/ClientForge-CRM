import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';

export const CalendarView = () => {
  // Initialize to August 2026
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1));
  
  const [events, setEvents] = useState([
    { date: '2026-06-15', title: 'Summer Kickoff', time: '10:00 AM', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    { date: '2026-06-22', title: 'Client Pitch: TechNova', time: '2:00 PM', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { date: '2026-08-29', title: 'Product Launch', time: '9:00 AM', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    { date: '2026-10-12', title: 'Quarterly Review', time: '10:00 AM', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { date: '2026-12-10', title: 'Annual Board Meeting', time: '11:00 AM', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { date: '2026-12-25', title: 'Company Holiday Party', time: '6:00 PM', color: 'bg-red-100 text-red-700 border-red-200' }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ date: '', title: '', time: '' });

  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  // Adjust so Monday is the first column (Mon=0, Sun=6)
  const startingDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const blanks = Array.from({ length: startingDay });
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const getFormattedDate = (day: number) => {
    const y = currentDate.getFullYear();
    const m = String(currentDate.getMonth() + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    setEvents([...events, {
      ...newEvent,
      color: 'bg-green-100 text-green-700 border-green-200'
    }]);
    setIsModalOpen(false);
    setNewEvent({ date: '', title: '', time: '' });
  };

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-sm text-gray-500 mt-1">Schedule and manage your meetings</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
        >
          <Plus className="w-4 h-4 mr-2" /> New Event
        </button>
      </div>

      <div className="flex-1 bg-white shadow-sm border border-gray-200 rounded-xl flex flex-col overflow-hidden min-h-[600px]">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="flex space-x-2">
            <button onClick={prevMonth} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 transition"><ChevronLeft className="w-5 h-5"/></button>
            <button onClick={nextMonth} className="p-1.5 hover:bg-gray-200 rounded text-gray-600 transition"><ChevronRight className="w-5 h-5"/></button>
          </div>
          <h2 className="text-lg font-bold text-gray-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="bg-white rounded-md border border-gray-300 p-1 flex text-sm font-medium shadow-sm">
            <button className="px-3 py-1 rounded bg-indigo-50 text-indigo-700">Month</button>
            <button className="px-3 py-1 rounded text-gray-600 hover:bg-gray-50">Week</button>
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-7 grid-rows-[auto_1fr_1fr_1fr_1fr_1fr]">
          {days.map(day => (
            <div key={day} className="py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200 bg-white">
              {day}
            </div>
          ))}
          
          {blanks.map((_, i) => (
            <div key={`blank-${i}`} className="border-b border-r border-gray-100 bg-gray-50/50 min-h-[100px]"></div>
          ))}
          
          {monthDays.map(day => {
            const dateStr = getFormattedDate(day);
            const dayEvents = events.filter(e => e.date === dateStr);
            // Highlight today (Assuming today is Aug 29, 2026 based on local dev environment)
            const isToday = currentDate.getFullYear() === 2026 && currentDate.getMonth() === 7 && day === 29;
            
            return (
              <div key={day} className="border-b border-r border-gray-100 p-2 min-h-[100px] hover:bg-gray-50 transition relative group">
                <div className={`text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full mb-1 ${isToday ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700'}`}>
                  {day}
                </div>
                <div className="space-y-1 mt-1">
                  {dayEvents.map((e, i) => (
                    <div key={i} className={`text-xs px-2 py-1 rounded border font-medium truncate ${e.color}`}>
                      {e.time} - {e.title}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => {
                    setNewEvent({ ...newEvent, date: dateStr });
                    setIsModalOpen(true);
                  }}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-indigo-600 transition"
                >
                  <Plus className="w-4 h-4"/>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-lg font-bold text-gray-900">Add New Event</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddEvent} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Event Title</label>
                <input required type="text" placeholder="e.g. Sync with TechNova" value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Date</label>
                  <input required type="date" value={newEvent.date} onChange={e => setNewEvent({...newEvent, date: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Time</label>
                  <input required type="time" value={newEvent.time} onChange={e => setNewEvent({...newEvent, time: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
                </div>
              </div>
              <div className="pt-4 flex justify-end space-x-3 border-t border-gray-100 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-bold text-white hover:bg-indigo-700">Save Event</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
