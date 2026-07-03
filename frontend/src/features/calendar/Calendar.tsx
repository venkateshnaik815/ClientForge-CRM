import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export const CalendarView = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  // Generate dummy days for October 2026
  const blanks = Array(3).fill(null);
  const monthDays = Array.from({length: 31}, (_, i) => i + 1);
  
  const events = {
    12: [{ title: 'Quarterly Review', time: '10:00 AM', color: 'bg-purple-100 text-purple-700 border-purple-200' }],
    15: [{ title: 'Client Pitch: TechNova', time: '2:00 PM', color: 'bg-blue-100 text-blue-700 border-blue-200' }],
    24: [{ title: 'Team Sync', time: '9:00 AM', color: 'bg-green-100 text-green-700 border-green-200' },
         { title: 'Follow up', time: '4:00 PM', color: 'bg-orange-100 text-orange-700 border-orange-200' }],
  };

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-sm text-gray-500 mt-1">Schedule and manage your meetings</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
          <Plus className="w-4 h-4 mr-2" /> New Event
        </button>
      </div>

      <div className="flex-1 bg-white shadow-sm border border-gray-200 rounded-xl flex flex-col overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="flex space-x-2">
            <button className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><ChevronLeft className="w-5 h-5"/></button>
            <button className="p-1.5 hover:bg-gray-200 rounded text-gray-600"><ChevronRight className="w-5 h-5"/></button>
          </div>
          <h2 className="text-lg font-bold text-gray-900">October 2026</h2>
          <div className="bg-white rounded-md border border-gray-300 p-1 flex text-sm font-medium shadow-sm">
            <button className="px-3 py-1 rounded bg-indigo-50 text-indigo-700">Month</button>
            <button className="px-3 py-1 rounded text-gray-600 hover:bg-gray-50">Week</button>
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-7 grid-rows-6">
          {days.map(day => (
            <div key={day} className="py-2 text-center text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
              {day}
            </div>
          ))}
          
          {blanks.map((_, i) => (
            <div key={`blank-${i}`} className="border-b border-r border-gray-100 bg-gray-50 min-h-[100px]"></div>
          ))}
          
          {monthDays.map(day => {
            const dayEvents = events[day as keyof typeof events] || [];
            const isToday = day === 24;
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
                <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-indigo-600">
                  <Plus className="w-4 h-4"/>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
