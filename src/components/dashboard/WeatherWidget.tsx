import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Droplets, Wind, Eye } from 'lucide-react';
import { mockWeather } from '@/data/mockData';

export function WeatherWidget() {
  const weather = mockWeather;

  return (
    <Card className="bg-gradient-sky border-0 shadow-soft">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Cloud className="h-5 w-5" />
          {weather.location}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-foreground">{weather.temperature}°C</div>
            <div className="text-sm text-muted-foreground">{weather.condition}</div>
          </div>
          <div className="text-right space-y-1">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Droplets className="h-4 w-4" />
              {weather.humidity}%
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Wind className="h-4 w-4" />
              {weather.windSpeed} km/h {weather.windDirection}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Eye className="h-4 w-4" />
              {weather.precipitation}mm
            </div>
          </div>
        </div>
        
        <div className="border-t pt-3">
          <div className="text-sm font-medium text-foreground mb-2">5-Day Forecast</div>
          <div className="grid grid-cols-5 gap-2">
            {weather.forecast.map((day) => (
              <div key={day.date} className="text-center">
                <div className="text-xs text-muted-foreground mb-1">
                  {new Date(day.date).toLocaleDateString('en-NZ', { weekday: 'short' })}
                </div>
                <div className="text-sm font-medium text-foreground">{day.high}°</div>
                <div className="text-xs text-muted-foreground">{day.low}°</div>
                <div className="text-xs text-sky-blue">{day.precipitation}%</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}