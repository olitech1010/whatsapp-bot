import Link from "next/link";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Settings, Link as LinkIcon, BarChart, Database } from "lucide-react";

export default function BotDetailPage({ params }: { params: { id: string } }) {
  const botId = params.id;
  
  // In a real implementation, this would fetch the bot data from the database
  const botData = {
    id: botId,
    name: "Customer Support Bot",
    description: "A bot that handles customer support inquiries",
    status: "online",
    messagesHandled: 1245,
    averageResponseTime: "1.2s",
    createdAt: "2023-06-15",
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">{botData.name}</h1>
          <div className="flex space-x-2">
            <Link href={`/dashboard/bots/${botId}/connect`}>
              <Button variant="outline">Connect WhatsApp</Button>
            </Link>
            <Link href={`/dashboard/bots/${botId}/settings`}>
              <Button>
                <Settings className="mr-2 h-4 w-4" /> Settings
              </Button>
            </Link>
          </div>
        </div>
        <p className="text-muted-foreground">{botData.description}</p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="text-2xl font-bold">{botData.status}</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Messages Handled
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{botData.messagesHandled}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{botData.averageResponseTime}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Created
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{botData.createdAt}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Conversations</CardTitle>
              <CardDescription>
                Latest conversations handled by this bot.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-semibold">No conversations yet</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Connect your bot to WhatsApp to start seeing conversations.
                </p>
                <Link href={`/dashboard/bots/${botId}/connect`}>
                  <Button className="mt-4" variant="outline">
                    Connect WhatsApp
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>
                Documents and sources used by this bot.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <Database className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-semibold">No documents yet</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Add documents to your knowledge base to improve bot responses.
                </p>
                <Link href="/dashboard/knowledge">
                  <Button className="mt-4" variant="outline">
                    Add Documents
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common actions for managing your bot.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <Link href={`/dashboard/bots/${botId}/settings`}>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Bot Settings
                  </Button>
                </Link>
                <Link href={`/dashboard/bots/${botId}/connect`}>
                  <Button variant="outline" className="w-full justify-start">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Connect WhatsApp
                  </Button>
                </Link>
                <Link href={`/dashboard/analytics?bot=${botId}`}>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart className="mr-2 h-4 w-4" />
                    View Analytics
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}