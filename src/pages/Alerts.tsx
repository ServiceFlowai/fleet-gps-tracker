import React from 'react';
import { useAlerts } from '../utils/api';

const Alerts: React.FC = () => {
  const { alerts, loading, error } = useAlerts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading alerts.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Alerts</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <ul>
          {alerts.map((alert, index) => (
            <li key={index} className="mb-2">
              <strong>Truck ID:</strong> {alert.truckId} - <strong>Status:</strong> {alert.status} - <strong>ETA:</strong> {alert.eta}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Alerts;