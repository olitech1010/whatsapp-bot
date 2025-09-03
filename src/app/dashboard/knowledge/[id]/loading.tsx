import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DocumentDetailLoading() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded-md bg-muted animate-pulse" />
            <div className="h-9 w-[200px] rounded-md bg-muted animate-pulse" />
          </div>
          <div className="flex space-x-2">
            <div className="h-10 w-[120px] rounded-md bg-muted animate-pulse" />
            <div className="h-10 w-[100px] rounded-md bg-muted animate-pulse" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="h-6 w-[180px] rounded-md bg-muted animate-pulse" />
              <div className="h-4 w-[150px] rounded-md bg-muted animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-4 w-[100px] rounded-md bg-muted animate-pulse" />
                    <div className="h-4 w-[80px] rounded-md bg-muted animate-pulse" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <div className="h-6 w-[150px] rounded-md bg-muted animate-pulse" />
              <div className="h-4 w-[200px] rounded-md bg-muted animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-4 bg-muted/50">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-5 w-5 rounded-md bg-muted animate-pulse" />
                  <div className="h-5 w-[150px] rounded-md bg-muted animate-pulse" />
                </div>
                <div className="space-y-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-4 w-full rounded-md bg-muted animate-pulse" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="h-6 w-[150px] rounded-md bg-muted animate-pulse" />
            <div className="h-4 w-[250px] rounded-md bg-muted animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-10">
              <div className="h-4 w-[300px] rounded-md bg-muted animate-pulse" />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}