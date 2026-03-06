import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { fetchTruckData } from '../utils/api';
import TruckTable from '../components/TruckTable';
import HeatMapToggle from '../components/HeatMapToggle';
import { Truck } from '../types';

const Dashboard: React.FC = () => {
  const [trucks, setTrucks] = useState<Truck[]>([]);
  const [heatMapEnabled, setHeatMapEnabled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTruckData();
      setTrucks(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <HeatMapToggle enabled={heatMapEnabled} onToggle={setHeatMapEnabled} />
      </div>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={{ height: '400px', width: '100%' }}
          center={{ lat: 40.7128, lng: -74.0060 }}
          zoom={10}
        >
          {trucks.map(truck => (
            <Marker key={truck.id} position={{ lat: truck.location.lat, lng: truck.location.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>
      <TruckTable trucks={trucks} />
    </div>
  );
};

export default Dashboard;