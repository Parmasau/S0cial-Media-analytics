import { Users, Heart, Eye, TrendingUp, BarChart3, Calendar, Share } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { EngagementChart } from "@/components/EngagementChart";
import { PlatformAnalytics } from "@/components/PlatformAnalytics";
import { RecentActivity } from "@/components/RecentActivity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Social Media Analytics
            </h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive insights across all your social platforms
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-border hover:bg-muted">
              <Calendar className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Share className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Followers"
          value="178.2K"
          change={12.5}
          changeType="increase"
          icon={<Users className="h-4 w-4" />}
          subtitle="Across all platforms"
        />
        <MetricCard
          title="Engagement Rate"
          value="8.2%"
          change={3.2}
          changeType="increase"
          icon={<Heart className="h-4 w-4" />}
          subtitle="Average this month"
        />
        <MetricCard
          title="Total Reach"
          value="2.1M"
          change={8.7}
          changeType="increase"
          icon={<Eye className="h-4 w-4" />}
          subtitle="Monthly impressions"
        />
        <MetricCard
          title="Growth Rate"
          value="15.3%"
          change={2.1}
          changeType="decrease"
          icon={<TrendingUp className="h-4 w-4" />}
          subtitle="Follower growth"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-primary" />
              Engagement Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <EngagementChart />
          </CardContent>
        </Card>
        
        <PlatformAnalytics />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Posts This Week</span>
              <span className="font-semibold text-foreground">23</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Avg. Response Time</span>
              <span className="font-semibold text-foreground">2.4h</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Top Performing Post</span>
              <span className="font-semibold text-success">+145% reach</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Scheduled Posts</span>
              <span className="font-semibold text-foreground">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Active Campaigns</span>
              <span className="font-semibold text-primary">3</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
