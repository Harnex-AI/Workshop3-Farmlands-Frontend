import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockFields, mockTasks, mockEquipment } from '@/data/mockData';
import { TrendingUp, TrendingDown, BarChart3, PieChart, Activity } from 'lucide-react';

const Analytics = () => {
  // Calculate analytics data
  const totalArea = mockFields.reduce((sum, field) => sum + field.area, 0);
  const healthyFieldsPercent = Math.round((mockFields.filter(f => f.status === 'Healthy').length / mockFields.length) * 100);
  const completionRate = Math.round((mockTasks.filter(t => t.status === 'Completed').length / mockTasks.length) * 100);
  const equipmentUtilization = Math.round((mockEquipment.filter(e => e.status === 'In Use').length / mockEquipment.length) * 100);

  const cropDistribution = mockFields.reduce((acc, field) => {
    acc[field.cropType] = (acc[field.cropType] || 0) + field.area;
    return acc;
  }, {} as Record<string, number>);

  const tasksByType = mockTasks.reduce((acc, task) => {
    acc[task.type] = (acc[task.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const MetricCard = ({ 
    title, 
    value, 
    unit, 
    change, 
    icon: Icon,
    positive = true 
  }: {
    title: string;
    value: number;
    unit: string;
    change: number;
    icon: any;
    positive?: boolean;
  }) => (
    <Card className="bg-card/80 border-border/50 shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">
          {value}{unit}
        </div>
        <div className={`flex items-center text-xs mt-1 ${positive ? 'text-field-green' : 'text-destructive'}`}>
          {positive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
          {change > 0 ? '+' : ''}{change}% from last month
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Farm Analytics</h1>
          <p className="text-muted-foreground">Performance insights and operational metrics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Farm Area"
            value={Math.round(totalArea)}
            unit=" ha"
            change={5.2}
            icon={BarChart3}
          />
          <MetricCard
            title="Field Health Score"
            value={healthyFieldsPercent}
            unit="%"
            change={2.1}
            icon={Activity}
          />
          <MetricCard
            title="Task Completion"
            value={completionRate}
            unit="%"
            change={-1.3}
            icon={TrendingUp}
            positive={false}
          />
          <MetricCard
            title="Equipment Utilization"
            value={equipmentUtilization}
            unit="%"
            change={8.7}
            icon={PieChart}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Crop Distribution */}
          <Card className="bg-card/80 border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Crop Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(cropDistribution).map(([crop, area]) => (
                  <div key={crop} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-field-green rounded-sm"></div>
                      <span className="text-sm font-medium text-foreground">{crop}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {area.toFixed(1)} ha ({Math.round((area / totalArea) * 100)}%)
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Task Analysis */}
          <Card className="bg-card/80 border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Task Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(tasksByType).map(([type, count]) => (
                  <div key={type} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-sky-blue rounded-sm"></div>
                      <span className="text-sm font-medium text-foreground">{type}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {count} tasks ({Math.round((count / mockTasks.length) * 100)}%)
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Field Performance */}
          <Card className="bg-card/80 border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Field Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockFields.map(field => (
                  <div key={field.id} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-foreground">{field.name}</div>
                      <div className="text-xs text-muted-foreground">{field.cropType}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded ${
                      field.status === 'Healthy' ? 'bg-field-green text-white' :
                      field.status === 'Ready for Harvest' ? 'bg-harvest-orange text-white' :
                      field.status === 'Needs Attention' ? 'bg-destructive text-white' :
                      'bg-sage-green text-foreground'
                    }`}>
                      {field.status}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Equipment Status */}
          <Card className="bg-card/80 border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Equipment Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockEquipment.map(equipment => (
                  <div key={equipment.id} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-foreground">{equipment.name}</div>
                      <div className="text-xs text-muted-foreground">{equipment.type}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded ${
                      equipment.status === 'Available' ? 'bg-field-green text-white' :
                      equipment.status === 'In Use' ? 'bg-sky-blue text-white' :
                      equipment.status === 'Maintenance' ? 'bg-wheat-gold text-foreground' :
                      'bg-destructive text-white'
                    }`}>
                      {equipment.status}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Productivity Metrics */}
          <Card className="bg-card/80 border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Productivity Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-foreground">Average Field Size</div>
                  <div className="text-2xl font-bold text-field-green">
                    {(totalArea / mockFields.length).toFixed(1)} ha
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tasks Per Field</div>
                  <div className="text-2xl font-bold text-sky-blue">
                    {(mockTasks.length / mockFields.length).toFixed(1)}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Equipment Efficiency</div>
                  <div className="text-2xl font-bold text-wheat-gold">
                    {Math.round((mockEquipment.filter(e => e.status !== 'Out of Service').length / mockEquipment.length) * 100)}%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;