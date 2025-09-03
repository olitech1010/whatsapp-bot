import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function BotSettingsPage({ params }: { params: { id: string } }) {
  const botId = params.id;

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Bot Settings</h1>
        <p className="text-muted-foreground">
          Configure your WhatsApp bot settings and behavior.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>
              Basic information about your bot.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Bot Name</Label>
                <Input id="name" placeholder="Customer Support Bot" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="A bot that handles customer support inquiries"
                  className="min-h-[100px]"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Configuration</CardTitle>
            <CardDescription>
              Configure the AI behavior of your bot.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="model">OpenAI Model</Label>
                <select
                  id="model"
                  className="flex h-10 w-full rounded-md border border-input bg-[hsl(var(--background))] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="gpt-4o">GPT-4o</option>
                  <option value="gpt-4-turbo">GPT-4 Turbo</option>
                  <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="system-prompt">System Prompt</Label>
                <Textarea
                  id="system-prompt"
                  placeholder="You are a helpful customer support assistant for [Company Name]..."
                  className="min-h-[150px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="temperature">Temperature</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="temperature"
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    defaultValue="0.7"
                    className="w-full"
                  />
                  <span className="w-12 text-center">0.7</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Controls randomness: Lower values are more deterministic, higher values are more creative.
                </p>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button>Save AI Configuration</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>RAG Configuration</CardTitle>
            <CardDescription>
              Configure Retrieval-Augmented Generation settings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="enable-rag" className="h-4 w-4 rounded border-gray-300" />
                  <Label htmlFor="enable-rag">Enable RAG</Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  When enabled, the bot will use your knowledge base to augment its responses.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="knowledge-sources">Knowledge Sources</Label>
                <select
                  id="knowledge-sources"
                  multiple
                  className="flex h-32 w-full rounded-md border border-input bg-[hsl(var(--background))] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="product-manual">Product Manual</option>
                  <option value="faq">FAQ</option>
                  <option value="website">Website Content</option>
                </select>
                <p className="text-xs text-muted-foreground">
                  Select which knowledge sources to include in the bot&apos;s responses.
                </p>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button>Save RAG Configuration</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Danger Zone</CardTitle>
            <CardDescription>
              Destructive actions for your bot.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Disconnect WhatsApp</h3>
              <p className="text-sm text-muted-foreground">
                Disconnect your bot from WhatsApp. You will need to scan the QR code again to reconnect.
              </p>
              <Button variant="outline" className="mt-2">Disconnect</Button>
            </div>
            <div>
              <h3 className="text-lg font-medium">Delete Bot</h3>
              <p className="text-sm text-muted-foreground">
                Permanently delete this bot and all its data. This action cannot be undone.
              </p>
              <Button variant="destructive" className="mt-2">Delete Bot</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}