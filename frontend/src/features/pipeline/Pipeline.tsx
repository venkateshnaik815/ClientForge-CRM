import React, { useState } from 'react';
import { Plus, MoreHorizontal, DollarSign } from 'lucide-react';

export const Pipeline = () => {
  const [stages, setStages] = useState([
    {
      name: 'Lead',
      color: 'bg-blue-500',
      items: [
        { id: 1, title: 'Website Redesign', company: 'Acme Corp', amount: 15000, date: 'Oct 25' },
        { id: 2, title: 'Cloud Migration', company: 'TechNova', amount: 45000, date: 'Oct 28' }
      ]
    },
    {
      name: 'Contacted',
      color: 'bg-yellow-500',
      items: [
        { id: 3, title: 'Security Audit', company: 'Initech', amount: 8500, date: 'Oct 22' }
      ]
    },
    {
      name: 'Qualified',
      color: 'bg-purple-500',
      items: [
        { id: 4, title: 'Mobile App Dev', company: 'Globex', amount: 120000, date: 'Oct 20' }
      ]
    },
    {
      name: 'Proposal',
      color: 'bg-orange-500',
      items: []
    },
    {
      name: 'Won',
      color: 'bg-green-500',
      items: [
        { id: 5, title: 'Q3 Retainer', company: 'Stark Ind.', amount: 30000, date: 'Oct 15' }
      ]
    }
  ]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Pipeline</h1>
          <p className="text-sm text-gray-500 mt-1">Drag and drop opportunities across stages</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
          <Plus className="w-4 h-4 mr-2" /> Add Opportunity
        </button>
      </div>
      
      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex space-x-6 min-w-max h-full">
          {stages.map((stage, idx) => (
            <div key={stage.name} className="w-80 bg-gray-50/80 rounded-xl border border-gray-200 flex flex-col h-full max-h-full">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white rounded-t-xl">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                  <h3 className="font-bold text-gray-900">{stage.name}</h3>
                </div>
                <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{stage.items.length}</span>
              </div>
              <div className="flex-1 p-3 overflow-y-auto space-y-3">
                {stage.items.length === 0 ? (
                  <div className="h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-gray-400 font-medium">Drop here</span>
                  </div>
                ) : (
                  stage.items.map(item => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition cursor-grab active:cursor-grabbing">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{item.company}</span>
                        <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="w-4 h-4"/></button>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 mb-3">{item.title}</h4>
                      <div className="flex justify-between items-center text-xs text-gray-500 font-medium border-t border-gray-100 pt-3">
                        <span className="flex items-center text-green-600">
                          <DollarSign className="w-3 h-3 mr-0.5"/>
                          {item.amount.toLocaleString()}
                        </span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
