import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function BotDetailLoading() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="h-9 w-[200px] rounded-md bg-muted animate-pulse" />
          <div className="flex space-x-2">
            <div className="h-10 w-[150px] rounded-md bg-muted animate-pulse" />
            <div className="h-10 w-[120px] rounded-md bg-muted animate-pulse" />
          </div>
        </div>
        <div className="h-4 w-[300px] rounded-md bg-muted animate-pulse" />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="h-5 w-[100px] rounded-md bg-muted animate-pulse" />
                <div className="h-4 w-4 rounded-full bg-muted animate-pulse" />
              </CardHeader>
              <CardContent>
                <div className="h-8 w-[80px] rounded-md bg-muted animate-pulse" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-6 w-[150px] rounded-md bg-muted animate-pulse" />
                <div className="h-4 w-[250px] rounded-md bg-muted animate-pulse" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-muted animate-pulse" />
                  <div className="h-6 w-[200px] rounded-md bg-muted animate-pulse" />
                  <div className="h-4 w-[250px] rounded-md bg-muted animate-pulse" />
                  <div className="h-10 w-[150px] rounded-md bg-muted animate-pulse" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="h-6 w-[150px] rounded-md bg-muted animate-pulse" />
              <div className="h-4 w-[250px] rounded-md bg-muted animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-10 w-full rounded-md bg-muted animate-pulse" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}