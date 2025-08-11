import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockFarmers } from '@/data/mockData';
import { Plus, Phone, Mail, MapPin, User, MessageCircle } from 'lucide-react';
import { Farmer } from '@/types/farming';

const Directory = () => {
  const getSpecialtyColor = (specialty: string) => {
    const colors = [
      'bg-field-green text-white',
      'bg-sky-blue text-white', 
      'bg-wheat-gold text-foreground',
      'bg-sage-green text-foreground',
      'bg-earth-brown text-white'
    ];
    const hash = specialty.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return colors[Math.abs(hash) % colors.length];
  };

  const FarmerCard = ({ farmer }: { farmer: Farmer }) => (
    <Card className="hover:shadow-medium transition-all duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-foreground">{farmer.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{farmer.role}</p>
              {farmer.company && (
                <p className="text-xs text-muted-foreground">{farmer.company}</p>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a href={`tel:${farmer.phone}`} className="text-primary hover:underline">
              {farmer.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <a href={`mailto:${farmer.email}`} className="text-primary hover:underline">
              {farmer.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {farmer.location}
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-foreground mb-2">Specialties</div>
          <div className="flex flex-wrap gap-1">
            {farmer.specialties.map(specialty => (
              <Badge 
                key={specialty} 
                className={getSpecialtyColor(specialty)}
                variant="secondary"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        {farmer.lastContact && (
          <div className="text-xs text-muted-foreground">
            Last contact: {new Date(farmer.lastContact).toLocaleDateString('en-NZ')}
          </div>
        )}

        {farmer.notes && (
          <div className="bg-muted/50 p-2 rounded text-xs text-muted-foreground">
            {farmer.notes}
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="flex-1">
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            <MessageCircle className="h-4 w-4 mr-2" />
            Message
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const groupedFarmers = {
    advisors: mockFarmers.filter(f => f.role.includes('Advisor') || f.role.includes('Agronomist')),
    suppliers: mockFarmers.filter(f => f.role.includes('Dealer') || f.role.includes('Specialist')),
    services: mockFarmers.filter(f => f.role.includes('Veterinarian') || f.role.includes('Services'))
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Farmer Directory</h1>
            <p className="text-muted-foreground">Connect with agricultural professionals and suppliers</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="h-5 w-5 mr-2" />
            Add Contact
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-foreground">{mockFarmers.length}</div>
            <div className="text-sm text-muted-foreground">Total Contacts</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-field-green">{groupedFarmers.advisors.length}</div>
            <div className="text-sm text-muted-foreground">Advisors</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-sky-blue">{groupedFarmers.suppliers.length}</div>
            <div className="text-sm text-muted-foreground">Suppliers</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-wheat-gold">{groupedFarmers.services.length}</div>
            <div className="text-sm text-muted-foreground">Services</div>
          </div>
        </div>

        {/* Farmer Sections */}
        <div className="space-y-8">
          {/* Advisors & Agronomists */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-field-green rounded-full"></div>
              Agricultural Advisors & Agronomists
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupedFarmers.advisors.map(farmer => (
                <FarmerCard key={farmer.id} farmer={farmer} />
              ))}
            </div>
          </div>

          {/* Equipment & Suppliers */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-sky-blue rounded-full"></div>
              Equipment Dealers & Specialists
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupedFarmers.suppliers.map(farmer => (
                <FarmerCard key={farmer.id} farmer={farmer} />
              ))}
            </div>
          </div>

          {/* Veterinary & Services */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-wheat-gold rounded-full"></div>
              Veterinary & Professional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupedFarmers.services.map(farmer => (
                <FarmerCard key={farmer.id} farmer={farmer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Directory;