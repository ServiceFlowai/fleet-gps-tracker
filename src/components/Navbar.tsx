import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Fleet GPS Tracker</Link>
        <div className="flex space-x-4">
          <Link to="/alerts" className="hover:text-blue-500">Alerts</Link>
          <Link to="/profile" className="hover:text-blue-500">Profile</Link>
          <button className="hover:text-blue-500">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;