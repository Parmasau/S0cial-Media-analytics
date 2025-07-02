import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const platformData = [
  { platform: 'Instagram', followers: 45000, engagement: 8.5, reach: 120000 },
  { platform: 'Twitter', followers: 28000, engagement: 6.2, reach: 85000 },
  { platform: 'Facebook', followers: 52000, engagement: 4.8, reach: 160000 },
  { platform: 'LinkedIn', followers: 15000, engagement: 12.3, reach: 45000 },
  { platform: 'TikTok', followers: 38000, engagement: 15.7, reach: 200000 },
];

export function PlatformAnalytics() {
  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Platform Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={platformData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="platform" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--foreground))'
                }}
              />
              <Bar 
                dataKey="engagement" 
                fill="url(#gradientEngagement)"
                radius={[4, 4, 0, 0]}
              />
              <defs>
                <linearGradient id="gradientEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--chart-1))" />
                  <stop offset="100%" stopColor="hsl(var(--chart-2))" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}