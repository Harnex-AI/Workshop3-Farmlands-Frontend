import { Layout } from '@/components/layout/Layout';
import { WeatherWidget } from '@/components/dashboard/WeatherWidget';
import { StatsOverview } from '@/components/dashboard/StatsOverview';
import { FieldCard } from '@/components/dashboard/FieldCard';
import { TasksList } from '@/components/dashboard/TasksList';
import { mockFields } from '@/data/mockData';
import heroImage from '@/assets/hero-farmland.jpg';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="relative h-48 lg:h-64 rounded-xl overflow-hidden shadow-medium">
          <img 
            src={heroImage} 
            alt="Canterbury farmland with modern equipment and crops" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center">
            <div className="p-6 lg:p-8 text-white">
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                Good morning, John!
              </h1>
              <p className="text-lg lg:text-xl opacity-90">
                Welcome to your Canterbury farming operations dashboard
              </p>
              <p className="text-sm opacity-75 mt-2">
                {new Date().toLocaleDateString('en-NZ', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Weather & Quick Actions */}
          <div className="space-y-6">
            <WeatherWidget />
            
            {/* Quick Actions */}
            <div className="bg-card/80 rounded-xl border border-border/50 p-4 shadow-soft">
              <h3 className="font-semibold text-foreground mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Add New Task
                </button>
                <button className="w-full text-left p-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors">
                  Record Field Observation
                </button>
                <button className="w-full text-left p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors">
                  Equipment Check-in
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Tasks */}
          <div className="lg:col-span-2">
            <TasksList />
          </div>
        </div>

        {/* Fields Overview */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">Field Overview</h2>
            <button className="text-primary hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-lg transition-colors">
              View All Fields
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockFields.map((field) => (
              <FieldCard 
                key={field.id} 
                field={field}
                onClick={() => console.log('Navigate to field:', field.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
