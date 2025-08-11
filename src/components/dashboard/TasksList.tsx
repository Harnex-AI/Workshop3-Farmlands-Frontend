import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Task } from '@/types/farming';
import { mockTasks } from '@/data/mockData';

export function TasksList() {
  const todaysTasks = mockTasks.filter(task => {
    const today = new Date().toISOString().split('T')[0];
    return task.dueDate === today || task.status === 'In Progress';
  });

  const upcomingTasks = mockTasks.filter(task => {
    const today = new Date().toISOString().split('T')[0];
    return task.dueDate > today && task.status === 'Pending';
  }).slice(0, 3);

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'Critical':
        return 'bg-destructive text-destructive-foreground';
      case 'High':
        return 'bg-harvest-orange text-white';
      case 'Medium':
        return 'bg-wheat-gold text-foreground';
      case 'Low':
        return 'bg-sage-green text-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'In Progress':
        return 'bg-sky-blue text-white';
      case 'Completed':
        return 'bg-field-green text-white';
      case 'Overdue':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const TaskItem = ({ task }: { task: Task }) => (
    <div className="p-4 bg-card/50 rounded-lg border border-border/30 hover:shadow-soft transition-all">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-foreground">{task.title}</h4>
        <div className="flex gap-2">
          <Badge className={getPriorityColor(task.priority)} variant="secondary">
            {task.priority}
          </Badge>
          <Badge className={getStatusColor(task.status)} variant="secondary">
            {task.status}
          </Badge>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {task.fieldName}
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            {new Date(task.dueDate).toLocaleDateString('en-NZ')}
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            {task.estimatedDuration}h
          </div>
        </div>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <Card className="bg-card/80 border-border/50 shadow-soft">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Today's Tasks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {todaysTasks.length > 0 ? (
            todaysTasks.map(task => <TaskItem key={task.id} task={task} />)
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <CalendarDays className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
              <p>No tasks scheduled for today</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-card/80 border-border/50 shadow-soft">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">Upcoming Tasks</CardTitle>
          <Button variant="outline" size="sm">View All</Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingTasks.map(task => <TaskItem key={task.id} task={task} />)}
        </CardContent>
      </Card>
    </div>
  );
}