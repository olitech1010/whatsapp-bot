import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function ConversationDetailPage({ params }: { params: { id: string } }) {
  const conversationId = params.id;
  
  // In a real implementation, this would fetch the conversation data from the database
  const conversationData = {
    id: conversationId,
    contact: {
      name: "John Doe",
      phone: "+1234567890",
      avatar: "",
    },
    messages: [
      {
        id: "1",
        content: "Hello, I need help with my order #12345",
        timestamp: "2023-06-15T10:30:00Z",
        sender: "user",
      },
      {
        id: "2",
        content: "I'd be happy to help you with your order #12345. Could you please tell me what specific issue you're experiencing?",
        timestamp: "2023-06-15T10:31:00Z",
        sender: "bot",
      },
      {
        id: "3",
        content: "I haven't received my order yet and it's been 5 days",
        timestamp: "2023-06-15T10:32:00Z",
        sender: "user",
      },
      {
        id: "4",
        content: "I apologize for the delay. Let me check the status of your order. According to our system, your order is currently in transit and should be delivered by tomorrow. Would you like me to provide you with the tracking information?",
        timestamp: "2023-06-15T10:33:00Z",
        sender: "bot",
      },
    ],
    botId: "bot-123",
    botName: "Customer Support Bot",
    startedAt: "2023-06-15T10:30:00Z",
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard/conversations">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <Avatar>
              <div className="bg-primary text-primary-foreground rounded-full h-full w-full flex items-center justify-center">
                {conversationData.contact.name.charAt(0)}
              </div>
            </Avatar>
            <div>
              <h2 className="text-lg font-semibold">{conversationData.contact.name}</h2>
              <p className="text-sm text-muted-foreground">{conversationData.contact.phone}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Link href={`/dashboard/bots/${conversationData.botId}`}>
              <Button variant="outline" size="sm">
                {conversationData.botName}
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {conversationData.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${message.sender === "user" ? "bg-muted" : "bg-primary text-primary-foreground"}`}
              >
                <p>{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            This is a read-only view of the conversation. Messages sent here won't be delivered to the user.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}