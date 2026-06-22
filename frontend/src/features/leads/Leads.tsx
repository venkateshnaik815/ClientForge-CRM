import React from 'react';
import { Plus } from 'lucide-react';

export const Leads = () => {
  const dummyLeads = [
    { id: 1, name: 'Alice Freeman', company: 'TechNova', email: 'alice@technova.com', status: 'New', date: 'Oct 24, 2026' },
    { id: 2, name: 'Bob Smith', company: 'Globex Corp', email: 'bob@globex.com', status: 'Contacted', date: 'Oct 23, 2026' },
    { id: 3, name: 'Charlie Davis', company: 'Initech', email: 'charlie@initech.com', status: 'Qualified', date: 'Oct 22, 2026' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Leads Management</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          <Plus className="w-4 h-4 mr-2" />
          Add Lead
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Added On</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dummyLeads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                  <div className="text-sm text-gray-500">{lead.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.company}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={\px-2 inline-flex text-xs leading-5 font-semibold rounded-full \\}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
