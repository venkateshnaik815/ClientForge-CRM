import React from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';

export const Pipeline = () => {
  const stages = ['Lead', 'Contacted', 'Qualified', 'Proposal', 'Won'];

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Sales Pipeline</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          <Plus className="w-4 h-4 mr-2" />
          Add Opportunity
        </button>
      </div>
      
      <div className="flex-1 overflow-x-auto">
        <div className="flex space-x-4 min-w-max pb-4">
          {stages.map((stage) => (
            <div key={stage} className="w-80 bg-gray-100 rounded-lg p-4 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900">{stage}</h3>
                <span className="text-sm text-gray-500">0</span>
              </div>
              <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4">
                <span className="text-sm text-gray-400">Drop opportunities here</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
