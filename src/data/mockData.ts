import { Field, Task, Equipment, Farmer, WeatherData } from '@/types/farming';

export const mockFields: Field[] = [
  {
    id: 'field-001',
    name: 'North Paddock',
    cropType: 'Dairy Pasture',
    area: 45.2,
    plantingDate: '2024-03-15',
    expectedHarvest: '2024-12-01',
    status: 'Healthy',
    soilType: 'Alluvial',
    irrigationStatus: 'Active',
    lastInspection: '2024-08-08',
    location: { lat: -43.5321, lng: 172.6362 },
    notes: 'Excellent pasture growth, rotation scheduled for next week'
  },
  {
    id: 'field-002',
    name: 'Eastern Wheat Block',
    cropType: 'Winter Wheat',
    area: 62.8,
    plantingDate: '2024-05-20',
    expectedHarvest: '2024-12-15',
    status: 'Ready for Harvest',
    soilType: 'Canterbury Loam',
    irrigationStatus: 'Off',
    lastInspection: '2024-08-10',
    location: { lat: -43.5298, lng: 172.6401 }
  },
  {
    id: 'field-003',
    name: 'South Barley Field',
    cropType: 'Malting Barley',
    area: 38.5,
    plantingDate: '2024-04-10',
    expectedHarvest: '2024-11-30',
    status: 'Needs Attention',
    soilType: 'Stony Silt Loam',
    irrigationStatus: 'Scheduled',
    lastInspection: '2024-08-09',
    location: { lat: -43.5355, lng: 172.6298 },
    notes: 'Some yellowing noticed in northwest corner, soil test recommended'
  },
  {
    id: 'field-004',
    name: 'Potato Block A',
    cropType: 'Agria Potatoes',
    area: 28.3,
    plantingDate: '2024-09-15',
    expectedHarvest: '2025-02-20',
    status: 'Recently Planted',
    soilType: 'Deep Silt',
    irrigationStatus: 'Active',
    lastInspection: '2024-10-01',
    location: { lat: -43.5312, lng: 172.6445 }
  },
  {
    id: 'field-005',
    name: 'Western Pasture',
    cropType: 'Ryegrass Mix',
    area: 52.1,
    plantingDate: '2024-02-28',
    expectedHarvest: 'Continuous',
    status: 'Healthy',
    soilType: 'Alluvial',
    irrigationStatus: 'Active',
    lastInspection: '2024-08-07',
    location: { lat: -43.5289, lng: 172.6234 }
  },
  {
    id: 'field-006',
    name: 'Hill Country Block',
    cropType: 'Clover Pasture',
    area: 71.5,
    plantingDate: '2024-03-01',
    expectedHarvest: 'Continuous',
    status: 'Healthy',
    soilType: 'Hill Soil',
    irrigationStatus: 'Off',
    lastInspection: '2024-08-06',
    location: { lat: -43.5378, lng: 172.6178 }
  }
];

export const mockTasks: Task[] = [
  {
    id: 'task-001',
    title: 'Harvest Eastern Wheat Block',
    description: 'Complete wheat harvest before weather turns',
    fieldId: 'field-002',
    fieldName: 'Eastern Wheat Block',
    type: 'Harvesting',
    priority: 'High',
    status: 'Pending',
    dueDate: '2024-08-15',
    estimatedDuration: 8,
    equipment: ['Harvester-001', 'Tractor-002']
  },
  {
    id: 'task-002',
    title: 'Inspect South Barley Field',
    description: 'Investigate yellowing in northwest corner, collect soil samples',
    fieldId: 'field-003',
    fieldName: 'South Barley Field',
    type: 'Inspection',
    priority: 'Critical',
    status: 'In Progress',
    dueDate: '2024-08-12',
    estimatedDuration: 3,
    assignedTo: 'John Smith'
  },
  {
    id: 'task-003',
    title: 'Pasture Rotation - North Paddock',
    description: 'Move cattle to allow pasture recovery',
    fieldId: 'field-001',
    fieldName: 'North Paddock',
    type: 'Maintenance',
    priority: 'Medium',
    status: 'Pending',
    dueDate: '2024-08-16',
    estimatedDuration: 2
  },
  {
    id: 'task-004',
    title: 'Irrigation System Check',
    description: 'Weekly irrigation system maintenance and pressure check',
    fieldId: 'field-004',
    fieldName: 'Potato Block A',
    type: 'Irrigation',
    priority: 'Medium',
    status: 'Pending',
    dueDate: '2024-08-14',
    estimatedDuration: 4,
    equipment: ['Irrigation-Pump-001']
  },
  {
    id: 'task-005',
    title: 'Spray Application - Barley',
    description: 'Apply fungicide treatment to prevent disease',
    fieldId: 'field-003',
    fieldName: 'South Barley Field',
    type: 'Spraying',
    priority: 'High',
    status: 'Pending',
    dueDate: '2024-08-18',
    estimatedDuration: 5,
    equipment: ['Sprayer-001']
  }
];

export const mockEquipment: Equipment[] = [
  {
    id: 'tractor-001',
    name: 'John Deere 8370R',
    type: 'Tractor',
    status: 'Available',
    lastMaintenance: '2024-07-15',
    nextMaintenance: '2024-09-15',
    fuelLevel: 78,
    location: 'Main Shed',
    operatingHours: 2847
  },
  {
    id: 'tractor-002',
    name: 'Case IH Magnum 380',
    type: 'Tractor',
    status: 'In Use',
    lastMaintenance: '2024-06-22',
    nextMaintenance: '2024-08-22',
    fuelLevel: 45,
    location: 'Eastern Wheat Block',
    operatingHours: 3156
  },
  {
    id: 'harvester-001',
    name: 'New Holland CR10.90',
    type: 'Harvester',
    status: 'Available',
    lastMaintenance: '2024-07-01',
    nextMaintenance: '2024-08-15',
    fuelLevel: 92,
    location: 'Equipment Yard',
    operatingHours: 1234
  },
  {
    id: 'sprayer-001',
    name: 'Apache AS1220',
    type: 'Sprayer',
    status: 'Maintenance',
    lastMaintenance: '2024-08-05',
    nextMaintenance: '2024-08-20',
    fuelLevel: 15,
    location: 'Workshop',
    operatingHours: 892,
    notes: 'Replacing spray nozzles'
  },
  {
    id: 'spreader-001',
    name: 'Kuhn Axis 40.2',
    type: 'Spreader',
    status: 'Available',
    lastMaintenance: '2024-07-28',
    nextMaintenance: '2024-09-28',
    fuelLevel: 67,
    location: 'Main Shed',
    operatingHours: 567
  }
];

export const mockFarmers: Farmer[] = [
  {
    id: 'farmer-001',
    name: 'Sarah Thompson',
    role: 'Crop Advisor',
    company: 'Canterbury Agriculture Ltd',
    phone: '+64 21 456 7890',
    email: 'sarah.thompson@cantag.co.nz',
    location: 'Ashburton',
    specialties: ['Wheat', 'Barley', 'Soil Analysis'],
    lastContact: '2024-08-05'
  },
  {
    id: 'farmer-002',
    name: 'Mike Wilson',
    role: 'Equipment Dealer',
    company: 'Wilson Machinery',
    phone: '+64 3 308 4567',
    email: 'mike@wilsonmachinery.co.nz',
    location: 'Timaru',
    specialties: ['John Deere', 'Case IH', 'Parts Supply']
  },
  {
    id: 'farmer-003',
    name: 'Jenny Clarke',
    role: 'Veterinarian',
    company: 'Rural Vet Services',
    phone: '+64 27 123 4567',
    email: 'jenny@ruralvet.co.nz',
    location: 'Methven',
    specialties: ['Dairy Cattle', 'Livestock Health', 'Nutrition'],
    lastContact: '2024-07-28'
  },
  {
    id: 'farmer-004',
    name: 'David Kim',
    role: 'Irrigation Specialist',
    company: 'Precision Irrigation NZ',
    phone: '+64 21 987 6543',
    email: 'david@precisionirrigation.co.nz',
    location: 'Christchurch',
    specialties: ['Pivot Systems', 'Water Management', 'Soil Moisture']
  },
  {
    id: 'farmer-005',
    name: 'Lisa Brown',
    role: 'Agronomist',
    company: 'AgriTech Solutions',
    phone: '+64 3 366 8899',
    email: 'lisa.brown@agritech.co.nz',
    location: 'Lincoln',
    specialties: ['Precision Agriculture', 'Crop Monitoring', 'GPS Technology'],
    lastContact: '2024-08-08'
  }
];

export const mockWeather: WeatherData = {
  location: 'Christchurch, Canterbury',
  temperature: 12,
  condition: 'Partly Cloudy',
  humidity: 68,
  windSpeed: 15,
  windDirection: 'SW',
  precipitation: 0,
  forecast: [
    {
      date: '2024-08-12',
      high: 14,
      low: 6,
      condition: 'Sunny',
      precipitation: 0
    },
    {
      date: '2024-08-13',
      high: 16,
      low: 8,
      condition: 'Partly Cloudy',
      precipitation: 10
    },
    {
      date: '2024-08-14',
      high: 13,
      low: 5,
      condition: 'Rain',
      precipitation: 85
    },
    {
      date: '2024-08-15',
      high: 11,
      low: 4,
      condition: 'Overcast',
      precipitation: 40
    },
    {
      date: '2024-08-16',
      high: 15,
      low: 7,
      condition: 'Sunny',
      precipitation: 5
    }
  ]
};