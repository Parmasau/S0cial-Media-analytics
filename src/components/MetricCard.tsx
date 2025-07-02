import { ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  changeType: "increase" | "decrease";
  icon: React.ReactNode;
  subtitle?: string;
}

export function MetricCard({ title, value, change, changeType, icon, subtitle }: MetricCardProps) {
  const isPositive = changeType === "increase";
  
  return (
    <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mb-2">{subtitle}</p>
        )}
        <div className="flex items-center space-x-1">
          {isPositive ? (
            <ArrowUp className="h-4 w-4 text-success" />
          ) : (
            <ArrowDown className="h-4 w-4 text-destructive" />
          )}
          <span className={`text-xs font-medium ${isPositive ? "text-success" : "text-destructive"}`}>
            {change}%
          </span>
          <span className="text-xs text-muted-foreground">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}