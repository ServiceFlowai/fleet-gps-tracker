import React from 'react';
import { useUserLogs } from '../utils/api';

const AdminPanel: React.FC = () => {
  const { logs, loading, error } = useUserLogs();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading user logs.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">User Activity Logs</h2>
        <ul>
          {logs.map((log, index) => (
            <li key={index} className="mb-2">
              <strong>User:</strong> {log.user} - <strong>Action:</strong> {log.action} - <strong>Date:</strong> {log.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;