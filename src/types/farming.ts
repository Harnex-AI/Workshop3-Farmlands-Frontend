export interface Field {
  id: string;
  name: string;
  cropType: string;
  area: number; // hectares
  plantingDate: string;
  expectedHarvest: string;
  status: 'Healthy' | 'Needs Attention' | 'Ready for Harvest' | 'Recently Planted';
  soilType: string;
  irrigationStatus: 'Active' | 'Scheduled' | 'Off';
  lastInspection: string;
  notes?: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Task {
  id: string;
  title: string;
  description: string;
  fieldId: string;
  fieldName: string;
  type: 'Irrigation' | 'Spraying' | 'Harvesting' | 'Planting' | 'Maintenance' | 'Inspection';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Pending' | 'In Progress' | 'Completed' | 'Overdue';
  dueDate: string;
  estimatedDuration: number; // hours
  assignedTo?: string;
  equipment?: string[];
  completedDate?: string;
  notes?: string;
}

export interface Equipment {
  id: string;
  name: string;
  type: 'Tractor' | 'Spreader' | 'Harvester' | 'Sprayer' | 'Cultivator' | 'Plough';
  status: 'Available' | 'In Use' | 'Maintenance' | 'Out of Service';
  lastMaintenance: string;
  nextMaintenance: string;
  fuelLevel?: number; // percentage
  location?: string;
  operatingHours: number;
  notes?: string;
}

export interface Farmer {
  id: string;
  name: string;
  role: string;
  company?: string;
  phone: string;
  email: string;
  location: string;
  specialties: string[];
  notes?: string;
  lastContact?: string;
}

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  precipitation: number;
  forecast: Array<{
    date: string;
    high: number;
    low: number;
    condition: string;
    precipitation: number;
  }>;
}