import { Layout } from '@/components/layout/Layout';
import { FieldCard } from '@/components/dashboard/FieldCard';
import { mockFields } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Search, Filter } from 'lucide-react';
import { useState } from 'react';

const Fields = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredFields = mockFields.filter(field => {
    const matchesSearch = field.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         field.cropType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || field.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Field Management</h1>
            <p className="text-muted-foreground">Monitor and manage all your farming fields</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="h-5 w-5 mr-2" />
            Add New Field
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search fields by name or crop type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Healthy">Healthy</SelectItem>
              <SelectItem value="Needs Attention">Needs Attention</SelectItem>
              <SelectItem value="Ready for Harvest">Ready for Harvest</SelectItem>
              <SelectItem value="Recently Planted">Recently Planted</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-foreground">{mockFields.length}</div>
            <div className="text-sm text-muted-foreground">Total Fields</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-field-green">
              {mockFields.filter(f => f.status === 'Healthy').length}
            </div>
            <div className="text-sm text-muted-foreground">Healthy</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-harvest-orange">
              {mockFields.filter(f => f.status === 'Ready for Harvest').length}
            </div>
            <div className="text-sm text-muted-foreground">Ready to Harvest</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border/50 shadow-soft">
            <div className="text-2xl font-bold text-destructive">
              {mockFields.filter(f => f.status === 'Needs Attention').length}
            </div>
            <div className="text-sm text-muted-foreground">Need Attention</div>
          </div>
        </div>

        {/* Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFields.map((field) => (
            <FieldCard 
              key={field.id} 
              field={field}
              onClick={() => console.log('Navigate to field details:', field.id)}
            />
          ))}
        </div>

        {filteredFields.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">No fields found matching your criteria</div>
            <Button variant="outline" onClick={() => {
              setSearchQuery('');
              setStatusFilter('all');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Fields;