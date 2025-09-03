import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data for charts
const messageData = [
  { name: "Mon", messages: 40 },
  { name: "Tue", messages: 30 },
  { name: "Wed", messages: 60 },
  { name: "Thu", messages: 45 },
  { name: "Fri", messages: 70 },
  { name: "Sat", messages: 25 },
  { name: "Sun", messages: 15 },
];

const botUsageData = [
  { name: "Customer Support Bot", usage: 65 },
  { name: "Sales Assistant", usage: 45 },
  { name: "FAQ Bot", usage: 30 },
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          View analytics and statistics for your WhatsApp bots.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">285</div>
              <p className="text-xs text-muted-foreground">
                +20% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Response Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <p className="text-xs text-muted-foreground">
                +2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2s</div>
              <p className="text-xs text-muted-foreground">
                -0.3s from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Messages per Day</CardTitle>
              <CardDescription>
                Number of messages processed per day over the last week.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <div className="flex flex-col h-full justify-center items-center text-muted-foreground">
                <p>Chart visualization temporarily unavailable</p>
                <p className="text-sm mt-2">Data: {messageData.map(d => `${d.name}: ${d.messages}`).join(', ')}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bot Usage</CardTitle>
              <CardDescription>
                Usage distribution across your bots.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <div className="flex flex-col h-full justify-center items-center text-muted-foreground">
                <p>Chart visualization temporarily unavailable</p>
                <p className="text-sm mt-2">Data: {botUsageData.map(d => `${d.name}: ${d.usage}`).join(', ')}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}