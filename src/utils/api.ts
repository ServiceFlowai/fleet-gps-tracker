import axios from 'axios';
import { Truck, Alert, User, UserLog } from '../types';

export const fetchTruckData = async (): Promise<Truck[]> => {
  const response = await axios.get('/api/trucks');
  return response.data;
};

export const useTruckDetails = (id: string) => {
  // Mock implementation
  return { truck: { id, route: 'Route 66', eta: '2 hours', activityLog: ['Started', 'In Transit'], slaData: [{ date: '2023-01-01', met: 5, missed: 1 }] }, loading: false, error: null };
};

export const useAlerts = () => {
  // Mock implementation
  return { alerts: [{ truckId: '123', status: 'Delayed', eta: '3 hours' }], loading: false, error: null };
};

export const useUserProfile = () => {
  // Mock implementation
  return { user: { email: 'user@example.com', role: 'Admin' }, loading: false, error: null };
};

export const useUserLogs = () => {
  // Mock implementation
  return { logs: [{ user: 'admin', action: 'Login', date: '2023-01-01' }], loading: false, error: null };
};