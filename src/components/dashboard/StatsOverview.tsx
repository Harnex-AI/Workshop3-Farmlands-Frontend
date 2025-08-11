import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, AlertTriangle, Droplets, CheckCircle } from 'lucide-react';
import { mockFields, mockTasks, mockEquipment } from '@/data/mockData';

export function StatsOverview() {
  const totalFields = mockFields.length;
  const healthyFields = mockFields.filter(f => f.status === 'Healthy').length;
  const fieldsNeedingAttention = mockFields.filter(f => f.status === 'Needs Attention').length;
  const readyForHarvest = mockFields.filter(f => f.status === 'Ready for Harvest').length;
  
  const totalTasks = mockTasks.length;
  const pendingTasks = mockTasks.filter(t => t.status === 'Pending' || t.status === 'In Progress').length;
  const overdueTasks = mockTasks.filter(t => t.status === 'Overdue').length;
  
  const activeIrrigation = mockFields.filter(f => f.irrigationStatus === 'Active').length;
  const availableEquipment = mockEquipment.filter(e => e.status === 'Available').length;

  const stats = [
    {
      title: 'Total Fields',
      value: totalFields,
      subtitle: `${healthyFields} healthy`,
      icon: TrendingUp,
      color: 'text-field-green'
    },
    {
      title: 'Active Tasks',
      value: pendingTasks,
      subtitle: `${overdueTasks} overdue`,
      icon: overdueTasks > 0 ? AlertTriangle : CheckCircle,
      color: overdueTasks > 0 ? 'text-destructive' : 'text-field-green'
    },
    {
      title: 'Irrigation Active',
      value: activeIrrigation,
      subtitle: 'systems running',
      icon: Droplets,
      color: 'text-sky-blue'
    },
    {
      title: 'Ready to Harvest',
      value: readyForHarvest,
      subtitle: 'fields ready',
      icon: CheckCircle,
      color: 'text-harvest-orange'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-card/80 border-border/50 shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}