import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewBotPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Create New Bot</h1>
        <p className="text-muted-foreground">
          Set up a new WhatsApp bot with RAG capabilities.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Bot Information</CardTitle>
            <CardDescription>
              Enter the basic information for your WhatsApp bot.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Bot Name</Label>
                <Input id="name" placeholder="My Company Bot" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="A WhatsApp bot for my company that answers customer questions."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" placeholder="My Company, Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-website">Company Website</Label>
                <Input id="company-website" placeholder="https://example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="welcome-message">Welcome Message</Label>
                <Textarea
                  id="welcome-message"
                  placeholder="Hello! I'm your company's AI assistant. How can I help you today?"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Create Bot</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>OpenAI Configuration</CardTitle>
            <CardDescription>
              Configure the OpenAI settings for your bot.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="openai-api-key">OpenAI API Key</Label>
                <Input id="openai-api-key" type="password" placeholder="sk-..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="openai-model">OpenAI Model</Label>
                <Input id="openai-model" placeholder="gpt-3.5-turbo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="embedding-model">Embedding Model</Label>
                <Input id="embedding-model" placeholder="text-embedding-ada-002" />
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vector Database</CardTitle>
            <CardDescription>
              Choose and configure your vector database for RAG capabilities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vector-db-provider">Vector Database Provider</Label>
                <Input id="vector-db-provider" placeholder="mongodb" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mongodb-uri">MongoDB URI (if using MongoDB)</Label>
                <Input id="mongodb-uri" placeholder="mongodb://localhost:27017/whatsapp_bot" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mongodb-collection">MongoDB Collection</Label>
                <Input id="mongodb-collection" placeholder="vector_embeddings" />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Save and Continue</Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
}