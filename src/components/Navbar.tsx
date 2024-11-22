import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Calendar, BarChart3, Home, Settings, Wallet } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Wallet className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">SubTracker</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink to="/dashboard" icon={<Home className="h-5 w-5" />} text="Dashboard" />
              <NavLink to="/calendar" icon={<Calendar className="h-5 w-5" />} text="Calendar" />
              <NavLink to="/reports" icon={<BarChart3 className="h-5 w-5" />} text="Reports" />
              <NavLink to="/settings" icon={<Settings className="h-5 w-5" />} text="Settings" />
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-600 hover:text-gray-900">
              <Bell className="h-6 w-6" />
            </button>
            <div className="ml-4">
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
    >
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  );
}

export default Navbar;