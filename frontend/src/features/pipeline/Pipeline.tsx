import React, { useState } from 'react';
import { Plus, MoreHorizontal, DollarSign, X } from 'lucide-react';

export const Pipeline = () => {
  const [stages, setStages] = useState([
    {
      id: 'Lead',
      name: 'Lead',
      color: 'bg-blue-500',
      items: [
        { id: 1, title: 'Website Redesign', company: 'Acme Corp', amount: 15000, date: 'Oct 25' },
        { id: 2, title: 'Cloud Migration', company: 'TechNova', amount: 45000, date: 'Oct 28' }
      ]
    },
    {
      id: 'Contacted',
      name: 'Contacted',
      color: 'bg-yellow-500',
      items: [
        { id: 3, title: 'Security Audit', company: 'Initech', amount: 8500, date: 'Oct 22' }
      ]
    },
    {
      id: 'Qualified',
      name: 'Qualified',
      color: 'bg-purple-500',
      items: [
        { id: 4, title: 'Mobile App Dev', company: 'Globex', amount: 120000, date: 'Oct 20' }
      ]
    },
    {
      id: 'Proposal',
      name: 'Proposal',
      color: 'bg-orange-500',
      items: []
    },
    {
      id: 'Won',
      name: 'Won',
      color: 'bg-green-500',
      items: [
        { id: 5, title: 'Q3 Retainer', company: 'Stark Ind.', amount: 30000, date: 'Oct 15' }
      ]
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOpp, setNewOpp] = useState({ title: '', company: '', amount: '' });

  // Native HTML5 Drag and Drop Handlers
  const handleDragStart = (e: React.DragEvent, itemId: number, sourceStageId: string) => {
    e.dataTransfer.setData('itemId', itemId.toString());
    e.dataTransfer.setData('sourceStageId', sourceStageId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetStageId: string) => {
    e.preventDefault();
    const itemId = parseInt(e.dataTransfer.getData('itemId'));
    const sourceStageId = e.dataTransfer.getData('sourceStageId');

    if (sourceStageId === targetStageId) return;

    setStages(prevStages => {
      const newStages = JSON.parse(JSON.stringify(prevStages)); // Deep copy
      const sourceStage = newStages.find((s: any) => s.id === sourceStageId);
      const targetStage = newStages.find((s: any) => s.id === targetStageId);
      
      if (!sourceStage || !targetStage) return prevStages;

      const itemIndex = sourceStage.items.findIndex((i: any) => i.id === itemId);
      if (itemIndex === -1) return prevStages;

      const [item] = sourceStage.items.splice(itemIndex, 1);
      targetStage.items.push(item);

      return newStages;
    });
  };

  const handleAddOpportunity = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 10000),
      title: newOpp.title,
      company: newOpp.company,
      amount: parseInt(newOpp.amount) || 0,
      date: 'Today'
    };

    setStages(prevStages => {
      const newStages = [...prevStages];
      newStages[0].items.push(newItem); // Add to 'Lead' stage
      return newStages;
    });

    setIsModalOpen(false);
    setNewOpp({ title: '', company: '', amount: '' });
  };

  return (
    <div className="h-full flex flex-col relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Pipeline</h1>
          <p className="text-sm text-gray-500 mt-1">Drag and drop opportunities across stages</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Opportunity
        </button>
      </div>
      
      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex space-x-6 min-w-max h-full">
          {stages.map((stage) => (
            <div 
              key={stage.id} 
              className="w-80 bg-gray-50/80 rounded-xl border border-gray-200 flex flex-col h-full max-h-full transition-colors hover:bg-gray-100/50"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, stage.id)}
            >
              <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white rounded-t-xl">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                  <h3 className="font-bold text-gray-900">{stage.name}</h3>
                </div>
                <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{stage.items.length}</span>
              </div>
              
              <div className="flex-1 p-3 overflow-y-auto space-y-3 min-h-[150px]">
                {stage.items.length === 0 ? (
                  <div className="h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center pointer-events-none">
                    <span className="text-sm text-gray-400 font-medium">Drop here</span>
                  </div>
                ) : (
                  stage.items.map(item => (
                    <div 
                      key={item.id} 
                      draggable
                      onDragStart={(e) => handleDragStart(e, item.id, stage.id)}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-indigo-300 transition cursor-grab active:cursor-grabbing transform hover:-translate-y-1"
                    >
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

      {/* Add Opportunity Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-lg font-bold text-gray-900">Add New Opportunity</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddOpportunity} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Opportunity Title</label>
                <input required type="text" placeholder="e.g. Server Upgrade" value={newOpp.title} onChange={e => setNewOpp({...newOpp, title: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Company Name</label>
                <input required type="text" placeholder="e.g. Acme Corp" value={newOpp.company} onChange={e => setNewOpp({...newOpp, company: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Estimated Amount ($)</label>
                <input required type="number" min="0" placeholder="e.g. 50000" value={newOpp.amount} onChange={e => setNewOpp({...newOpp, amount: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div className="pt-4 flex justify-end space-x-3 border-t border-gray-100 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-bold text-white hover:bg-indigo-700">Add Opportunity</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
