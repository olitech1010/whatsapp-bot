import { DashboardLayout } from "@/components/dashboard/dashboard-layout";

export default function ConversationDetailLoading() {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center space-x-4">
            <div className="h-9 w-9 rounded-md bg-muted animate-pulse" />
            <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
            <div>
              <div className="h-6 w-[120px] rounded-md bg-muted animate-pulse" />
              <div className="h-4 w-[150px] rounded-md bg-muted animate-pulse mt-1" />
            </div>
          </div>
          <div className="h-9 w-[120px] rounded-md bg-muted animate-pulse" />
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${i % 2 === 0 ? "bg-muted" : "bg-primary"}`}
              >
                <div className="h-4 w-full rounded-md bg-muted/20 animate-pulse mb-1" />
                <div className="h-4 w-3/4 rounded-md bg-muted/20 animate-pulse mb-1" />
                <div className="h-4 w-1/2 rounded-md bg-muted/20 animate-pulse" />
                <div className="h-3 w-[60px] rounded-md bg-muted/20 animate-pulse mt-1" />
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-4">
          <div className="flex space-x-2">
            <div className="h-10 flex-1 rounded-md bg-muted animate-pulse" />
            <div className="h-10 w-10 rounded-md bg-muted animate-pulse" />
          </div>
          <div className="h-4 w-full rounded-md bg-muted animate-pulse mt-2" />
        </div>
      </div>
    </DashboardLayout>
  );
}