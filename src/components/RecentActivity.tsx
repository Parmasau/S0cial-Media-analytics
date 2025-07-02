import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    platform: "Instagram",
    action: "Post published",
    content: "Summer collection reveal",
    time: "2 hours ago",
    engagement: "high",
    platformColor: "from-pink-500 to-purple-500"
  },
  {
    id: 2,
    platform: "Twitter",
    action: "Tweet scheduled",
    content: "Product launch announcement",
    time: "4 hours ago",
    engagement: "medium",
    platformColor: "from-blue-400 to-blue-600"
  },
  {
    id: 3,
    platform: "LinkedIn",
    action: "Article shared",
    content: "Industry insights report",
    time: "6 hours ago",
    engagement: "high",
    platformColor: "from-blue-600 to-blue-800"
  },
  {
    id: 4,
    platform: "Facebook",
    action: "Event created",
    content: "Webinar registration open",
    time: "8 hours ago",
    engagement: "low",
    platformColor: "from-blue-500 to-indigo-600"
  },
  {
    id: 5,
    platform: "TikTok",
    action: "Video uploaded",
    content: "Behind the scenes content",
    time: "12 hours ago",
    engagement: "high",
    platformColor: "from-black to-gray-800"
  },
];

export function RecentActivity() {
  const getEngagementColor = (engagement: string) => {
    switch (engagement) {
      case "high": return "bg-success";
      case "medium": return "bg-warning";
      case "low": return "bg-destructive";
      default: return "bg-muted";
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
            <Avatar>
              <AvatarFallback className={`bg-gradient-to-br ${activity.platformColor} text-white`}>
                {activity.platform.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">{activity.platform}</p>
                <Badge variant="outline" className={`${getEngagementColor(activity.engagement)} text-white border-none`}>
                  {activity.engagement}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{activity.action}: {activity.content}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}