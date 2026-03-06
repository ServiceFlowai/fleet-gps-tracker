import React from 'react';
import { useParams } from 'react-router-dom';
import { useTruckDetails } from '../utils/api';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TruckDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { truck, loading, error } = useTruckDetails(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading truck details.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Truck Details - {truck?.id}</h1>
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <p><strong>Current Route:</strong> {truck?.route}</p>
        <p><strong>ETA:</strong> {truck?.eta}</p>
        <p><strong>Recent Activity:</strong></p>
        <ul>
          {truck?.activityLog.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">SLA Compliance</h2>
        <LineChart width={600} height={300} data={truck?.slaData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="met" stroke="#8884d8" />
          <Line type="monotone" dataKey="missed" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default TruckDetails;