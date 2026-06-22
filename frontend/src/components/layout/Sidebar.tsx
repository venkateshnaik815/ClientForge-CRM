import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, Calendar, CheckSquare, Settings, KanbanSquare } from 'lucide-react';

export const Sidebar = () => {
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Leads', href: '/leads', icon: Users },
    { name: 'Clients', href: '/clients', icon: Briefcase },
    { name: 'Pipeline', href: '/pipeline', icon: KanbanSquare },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Tasks', href: '/tasks', icon: CheckSquare },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col w-64 bg-gray-900 border-r border-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900 border-b border-gray-800">
        <span className="text-xl font-bold text-white tracking-wider">ClientForge</span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  \lex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors \\
                }
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
