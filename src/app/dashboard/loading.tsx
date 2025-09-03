import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DashboardLoading() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="h-9 w-[200px] rounded-md bg-muted animate-pulse" />
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
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="flex justify-between items-center">
                      <div className="h-4 w-[200px] rounded-md bg-muted animate-pulse" />
                      <div className="h-4 w-[100px] rounded-md bg-muted animate-pulse" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}