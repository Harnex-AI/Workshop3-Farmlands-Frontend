import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockTasks } from '@/data/mockData';
import { Plus, Calendar, Clock, MapPin, User, CheckCircle } from 'lucide-react';
import { Task } from '@/types/farming';

const Tasks = () => {
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

  const pendingTasks = mockTasks.filter(t => t.status === 'Pending' || t.status === 'In Progress');
  const completedTasks = mockTasks.filter(t => t.status === 'Completed');
  const overdueTasks = mockTasks.filter(t => t.status === 'Overdue');

  const TaskCard = ({ task }: { task: Task }) => (
    <Card className="hover:shadow-medium transition-all duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">{task.title}</CardTitle>
          <div className="flex gap-2">
            <Badge className={getPriorityColor(task.priority)} variant="secondary">
              {task.priority}
            </Badge>
            <Badge className={getStatusColor(task.status)} variant="secondary">
              {task.status}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{task.description}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {task.fieldName}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {new Date(task.dueDate).toLocaleDateString('en-NZ')}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {task.estimatedDuration}h estimated
          </div>
          {task.assignedTo && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              {task.assignedTo}
            </div>
          )}
        </div>
        
        {task.equipment && task.equipment.length > 0 && (
          <div>
            <div className="text-sm font-medium text-foreground mb-1">Required Equipment:</div>
            <div className="flex flex-wrap gap-1">
              {task.equipment.map(eq => (
                <Badge key={eq} variant="outline" className="text-xs">
                  {eq}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center pt-2">
          <span className="text-xs text-muted-foreground">
            Type: {task.type}
          </span>
          <Button size="sm" variant="outline">
            <CheckCircle className="h-4 w-4 mr-2" />
            Complete
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Task Management</h1>
            <p className="text-muted-foreground">Organize and track all farming operations</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="h-5 w-5 mr-2" />
            Create New Task
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-foreground">{mockTasks.length}</div>
            <div className="text-sm text-muted-foreground">Total Tasks</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-sky-blue">{pendingTasks.length}</div>
            <div className="text-sm text-muted-foreground">Active</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-field-green">{completedTasks.length}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-destructive">{overdueTasks.length}</div>
            <div className="text-sm text-muted-foreground">Overdue</div>
          </div>
        </div>

        {/* Tasks Sections */}
        <div className="space-y-8">
          {/* Active Tasks */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Active Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pendingTasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
            {pendingTasks.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Calendar className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
                <p>No active tasks</p>
              </div>
            )}
          </div>

          {/* Completed Tasks */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Recently Completed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {completedTasks.slice(0, 3).map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
            {completedTasks.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
                <p>No completed tasks</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;