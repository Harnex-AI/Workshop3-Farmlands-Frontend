import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  MapPin, 
  CheckSquare, 
  Wrench, 
  Users, 
  BarChart3,
  Settings
} from 'lucide-react';

interface NavigationProps {
  className?: string;
  mobile?: boolean;
  onItemClick?: () => void;
}

export function Navigation({ className, mobile = false, onItemClick }: NavigationProps) {
  const navItems = [
    {
      to: '/',
      label: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      to: '/fields',
      label: 'Fields',
      icon: MapPin
    },
    {
      to: '/tasks',
      label: 'Tasks',
      icon: CheckSquare
    },
    {
      to: '/equipment',
      label: 'Equipment',
      icon: Wrench
    },
    {
      to: '/farmers',
      label: 'Directory',
      icon: Users
    },
    {
      to: '/analytics',
      label: 'Analytics',
      icon: BarChart3
    },
    {
      to: '/settings',
      label: 'Settings',
      icon: Settings
    }
  ];

  return (
    <nav className={cn('space-y-2', className)}>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onItemClick}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              'hover:bg-muted/80 hover:text-foreground',
              mobile ? 'px-4 py-3' : '',
              isActive
                ? 'bg-primary text-primary-foreground shadow-soft'
                : 'text-muted-foreground'
            )
          }
        >
          <item.icon className="h-5 w-5" />
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}