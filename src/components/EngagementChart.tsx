import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', engagement: 4000, reach: 2400, interactions: 2400 },
  { name: 'Feb', engagement: 3000, reach: 1398, interactions: 2210 },
  { name: 'Mar', engagement: 2000, reach: 9800, interactions: 2290 },
  { name: 'Apr', engagement: 2780, reach: 3908, interactions: 2000 },
  { name: 'May', engagement: 1890, reach: 4800, interactions: 2181 },
  { name: 'Jun', engagement: 2390, reach: 3800, interactions: 2500 },
  { name: 'Jul', engagement: 3490, reach: 4300, interactions: 2100 },
];

export function EngagementChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
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
          <Line 
            type="monotone" 
            dataKey="engagement" 
            stroke="hsl(var(--chart-1))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--chart-1))', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: 'hsl(var(--chart-1))' }}
          />
          <Line 
            type="monotone" 
            dataKey="reach" 
            stroke="hsl(var(--chart-2))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--chart-2))', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: 'hsl(var(--chart-2))' }}
          />
          <Line 
            type="monotone" 
            dataKey="interactions" 
            stroke="hsl(var(--chart-3))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--chart-3))', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: 'hsl(var(--chart-3))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}