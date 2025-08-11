import { Navigation } from './Navigation';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 
          bg-card/95 backdrop-blur border-r border-border/50 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-border/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">Farmlands</h2>
                  <p className="text-xs text-muted-foreground">Field Assistant</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="lg:hidden text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 p-4">
            <Navigation onItemClick={onClose} />
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border/30">
            <div className="text-xs text-muted-foreground">
              <p>Canterbury Operations</p>
              <p>Last sync: {new Date().toLocaleTimeString('en-NZ', { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}