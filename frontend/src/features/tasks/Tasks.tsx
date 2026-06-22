import React from 'react';
import { CheckSquare } from 'lucide-react';

export const Tasks = () => {
  return (
    <div className="h-full bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
      <CheckSquare className="w-16 h-16 text-indigo-200 mb-4" />
      <h2 className="text-xl font-medium text-gray-900">Task Management</h2>
      <p className="text-gray-500 mt-2">Task and activity tracking coming in Phase 5.</p>
    </div>
  );
};
