import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Droplets, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { Field } from '@/types/farming';

interface FieldCardProps {
  field: Field;
  onClick?: () => void;
}

export function FieldCard({ field, onClick }: FieldCardProps) {
  const getStatusColor = (status: Field['status']) => {
    switch (status) {
      case 'Healthy':
        return 'bg-field-green text-white';
      case 'Ready for Harvest':
        return 'bg-harvest-orange text-white';
      case 'Needs Attention':
        return 'bg-destructive text-destructive-foreground';
      case 'Recently Planted':
        return 'bg-sage-green text-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getIrrigationColor = (status: Field['irrigationStatus']) => {
    switch (status) {
      case 'Active':
        return 'text-sky-blue';
      case 'Scheduled':
        return 'text-wheat-gold';
      case 'Off':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card 
      className="hover:shadow-medium transition-all duration-200 cursor-pointer border-border/50 bg-gradient-to-br from-card to-card/80"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">{field.name}</CardTitle>
          <Badge className={getStatusColor(field.status)} variant="secondary">
            {field.status}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TrendingUp className="h-4 w-4" />
          {field.cropType}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-muted-foreground">Area</div>
            <div className="font-medium text-foreground">{field.area} ha</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Soil Type</div>
            <div className="font-medium text-foreground">{field.soilType}</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <Droplets className={`h-4 w-4 ${getIrrigationColor(field.irrigationStatus)}`} />
            <span className="text-muted-foreground">Irrigation:</span>
            <span className={`font-medium ${getIrrigationColor(field.irrigationStatus)}`}>
              {field.irrigationStatus}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Last inspected: {new Date(field.lastInspection).toLocaleDateString('en-NZ')}</span>
        </div>

        {field.notes && (
          <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
            {field.notes}
          </div>
        )}
      </CardContent>
    </Card>
  );
}