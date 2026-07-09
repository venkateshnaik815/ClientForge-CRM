import React, { useState, useEffect } from 'react';
import { Building2, Plus, X, Search, Trash2 } from 'lucide-react';

interface Client {
  id?: number;
  companyName: string;
  industry: string;
  contactPerson: string;
  email: string;
  phone: string;
  status?: string;
  clientSince?: string;
}

export const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({ companyName: '', industry: '', contactPerson: '', email: '', phone: '' });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchClients = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8080/api/clients');
      if (response.ok) {
        setClients(await response.json());
      }
    } catch (error) {
      console.error('Failed to fetch clients:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchClients(); }, []);

  const handleAddClient = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newClient),
      });
      if (response.ok) {
        setIsModalOpen(false);
        setNewClient({ companyName: '', industry: '', contactPerson: '', email: '', phone: '' });
        fetchClients();
      }
    } catch (error) {
      console.error('Failed to add client:', error);
    }
  };

  // Delete client locally (mocking backend delete for speed/safety)
  const handleDelete = (id: number) => {
    if(window.confirm("Are you sure you want to delete this client?")) {
      setClients(clients.filter(c => c.id !== id));
      // In a real app, we would send a DELETE request to /api/clients/{id} here.
    }
  };

  const filteredClients = clients.filter(c => 
    c.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative h-full space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients & Companies</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your active client portfolio</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-sm font-medium active:scale-95">
          <Plus className="w-4 h-4 mr-2" /> Add Client
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden min-h-[500px]">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="relative w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Search clients by name or industry..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500" 
            />
          </div>
          <div className="text-sm text-gray-500 font-medium">Total: {filteredClients.length}</div>
        </div>

        {loading ? (
          <div className="p-12 text-center text-gray-500">Loading clients...</div>
        ) : filteredClients.length === 0 ? (
          <div className="p-16 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No clients found</h3>
            <p className="text-gray-500 mt-1 mb-6">We couldn't find any clients matching your criteria.</p>
            {searchQuery === '' && (
              <button onClick={() => setIsModalOpen(true)} className="text-indigo-600 font-medium hover:text-indigo-700">
                + Create your first client
              </button>
            )}
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Industry</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50 transition cursor-default group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg mr-3 shadow-sm border border-indigo-200">
                        {client.companyName.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{client.companyName}</div>
                        <div className="text-sm text-gray-500">Since {client.clientSince || '2026-08-29'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{client.contactPerson}</div>
                    <div className="text-sm text-gray-500">{client.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">{client.industry}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs font-bold rounded-full ${
                      client.status === 'VIP' ? 'bg-purple-100 text-purple-800 border border-purple-200' :
                      client.status === 'At Risk' ? 'bg-orange-100 text-orange-800 border border-orange-200' :
                      'bg-green-100 text-green-800 border border-green-200'
                    }`}>
                      {client.status || 'Active'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => client.id && handleDelete(client.id)}
                      className="text-gray-400 hover:text-red-600 transition opacity-0 group-hover:opacity-100 p-2 rounded-full hover:bg-red-50"
                      title="Delete Client"
                    >
                      <Trash2 className="w-4 h-4"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Client Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-lg font-bold text-gray-900">Add New Client</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-700"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleAddClient} className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Company Name</label>
                  <input required type="text" placeholder="e.g. Stark Industries" value={newClient.companyName} onChange={e => setNewClient({...newClient, companyName: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Industry</label>
                  <input required type="text" placeholder="e.g. Technology" value={newClient.industry} onChange={e => setNewClient({...newClient, industry: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Contact Person</label>
                  <input required type="text" placeholder="e.g. Tony Stark" value={newClient.contactPerson} onChange={e => setNewClient({...newClient, contactPerson: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                  <input required type="email" placeholder="e.g. t.stark@stark.com" value={newClient.email} onChange={e => setNewClient({...newClient, email: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                  <input required type="tel" placeholder="e.g. +1 (555) 000-0000" value={newClient.phone} onChange={e => setNewClient({...newClient, phone: e.target.value})} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
              </div>
              <div className="pt-4 flex justify-end space-x-3 border-t border-gray-100 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-bold text-white hover:bg-indigo-700">Save Client</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
