export interface Truck {
  id: string;
  driverName: string;
  location: { lat: number; lng: number };
  status: string;
  slaCompliance: boolean;
}

export interface Alert {
  truckId: string;
  status: string;
  eta: string;
}

export interface User {
  email: string;
  role: string;
}

export interface UserLog {
  user: string;
  action: string;
  date: string;
}