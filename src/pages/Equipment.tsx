import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockEquipment } from '@/data/mockData';
import { Plus, Wrench, Fuel, Clock, MapPin, AlertTriangle } from 'lucide-react';
import { Equipment } from '@/types/farming';

const EquipmentPage = () => {
  const getStatusColor = (status: Equipment['status']) => {
    switch (status) {
      case 'Available':
        return 'bg-field-green text-white';
      case 'In Use':
        return 'bg-sky-blue text-white';
      case 'Maintenance':
        return 'bg-wheat-gold text-foreground';
      case 'Out of Service':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: Equipment['type']) => {
    // For simplicity, using Wrench for all equipment types
    // In a real app, you'd have specific icons for each type
    return Wrench;
  };

  const getFuelLevelColor = (level?: number) => {
    if (!level) return 'text-muted-foreground';
    if (level > 70) return 'text-field-green';
    if (level > 30) return 'text-wheat-gold';
    return 'text-destructive';
  };

  const availableEquipment = mockEquipment.filter(e => e.status === 'Available');
  const inUseEquipment = mockEquipment.filter(e => e.status === 'In Use');
  const maintenanceEquipment = mockEquipment.filter(e => e.status === 'Maintenance');

  const EquipmentCard = ({ equipment }: { equipment: Equipment }) => {
    const TypeIcon = getTypeIcon(equipment.type);
    
    return (
      <Card className="hover:shadow-medium transition-all duration-200">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <TypeIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <CardTitle className="text-lg font-semibold text-foreground">{equipment.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{equipment.type}</p>
              </div>
            </div>
            <Badge className={getStatusColor(equipment.status)} variant="secondary">
              {equipment.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-muted-foreground">Operating Hours</div>
              <div className="font-medium text-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {equipment.operatingHours.toLocaleString()}h
              </div>
            </div>
            {equipment.fuelLevel && (
              <div>
                <div className="text-xs text-muted-foreground">Fuel Level</div>
                <div className={`font-medium flex items-center gap-1 ${getFuelLevelColor(equipment.fuelLevel)}`}>
                  <Fuel className="h-4 w-4" />
                  {equipment.fuelLevel}%
                </div>
              </div>
            )}
          </div>

          {equipment.location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Location: {equipment.location}
            </div>
          )}

          <div className="space-y-2">
            <div className="text-xs text-muted-foreground">Maintenance Schedule</div>
            <div className="text-sm">
              <div className="flex justify-between">
                <span>Last:</span>
                <span className="font-medium">
                  {new Date(equipment.lastMaintenance).toLocaleDateString('en-NZ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Next:</span>
                <span className="font-medium">
                  {new Date(equipment.nextMaintenance).toLocaleDateString('en-NZ')}
                </span>
              </div>
            </div>
          </div>

          {equipment.notes && (
            <div className="bg-muted/50 p-3 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-wheat-gold mt-0.5" />
                <div>
                  <div className="text-xs font-medium text-foreground">Notes</div>
                  <div className="text-xs text-muted-foreground">{equipment.notes}</div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center pt-2">
            <span className="text-xs text-muted-foreground">
              ID: {equipment.id}
            </span>
            <Button size="sm" variant="outline">
              <Wrench className="h-4 w-4 mr-2" />
              Manage
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Equipment Management</h1>
            <p className="text-muted-foreground">Monitor and maintain all farming equipment</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="h-5 w-5 mr-2" />
            Add Equipment
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-foreground">{mockEquipment.length}</div>
            <div className="text-sm text-muted-foreground">Total Equipment</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-field-green">{availableEquipment.length}</div>
            <div className="text-sm text-muted-foreground">Available</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-sky-blue">{inUseEquipment.length}</div>
            <div className="text-sm text-muted-foreground">In Use</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-wheat-gold">{maintenanceEquipment.length}</div>
            <div className="text-sm text-muted-foreground">Maintenance</div>
          </div>
        </div>

        {/* Equipment Sections */}
        <div className="space-y-8">
          {/* Available Equipment */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-field-green rounded-full"></div>
              Available Equipment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableEquipment.map(equipment => (
                <EquipmentCard key={equipment.id} equipment={equipment} />
              ))}
            </div>
            {availableEquipment.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Wrench className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
                <p>No equipment currently available</p>
              </div>
            )}
          </div>

          {/* In Use Equipment */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-sky-blue rounded-full"></div>
              Equipment In Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inUseEquipment.map(equipment => (
                <EquipmentCard key={equipment.id} equipment={equipment} />
              ))}
            </div>
          </div>

          {/* Maintenance Equipment */}
          {maintenanceEquipment.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-wheat-gold rounded-full"></div>
                Under Maintenance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {maintenanceEquipment.map(equipment => (
                  <EquipmentCard key={equipment.id} equipment={equipment} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default EquipmentPage;