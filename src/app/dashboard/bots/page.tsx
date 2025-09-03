import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function BotsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Bots</h1>
          <Button asChild>
            <Link href="/dashboard/bots/new">
              <Plus className="mr-2 h-4 w-4" /> Create Bot
            </Link>
          </Button>
        </div>
        <p className="text-muted-foreground">
          Manage your WhatsApp bots and their configurations.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Create a New Bot</CardTitle>
              <CardDescription>
                Set up a new WhatsApp bot with RAG capabilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create a new WhatsApp bot, configure its settings, and connect it to your knowledge base.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/bots/new">
                  <Plus className="mr-2 h-4 w-4" /> Create Bot
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}