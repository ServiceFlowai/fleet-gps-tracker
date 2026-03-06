import React from 'react';
import { Truck } from '../types';

interface TruckTableProps {
  trucks: Truck[];
}

const TruckTable: React.FC<TruckTableProps> = ({ trucks }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Truck ID</th>
            <th className="px-4 py-2">Driver Name</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">SLA Compliance</th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((truck) => (
            <tr key={truck.id} className="border-t">
              <td className="px-4 py-2">{truck.id}</td>
              <td className="px-4 py-2">{truck.driverName}</td>
              <td className="px-4 py-2">{truck.location.lat}, {truck.location.lng}</td>
              <td className="px-4 py-2">{truck.status}</td>
              <td className="px-4 py-2">{truck.slaCompliance ? 'Met' : 'Missed'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TruckTable;