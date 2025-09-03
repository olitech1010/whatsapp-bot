import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">
          Manage your subscription and billing information.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>
              You are currently on the Free plan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">Free</p>
              <p className="text-muted-foreground">$0/month</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-4">
                <li>1 WhatsApp Bot</li>
                <li>100 messages/month</li>
                <li>Basic RAG capabilities</li>
                <li>Community support</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Upgrade Plan</Button>
          </CardFooter>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>
                For small businesses and startups.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-bold">$19/month</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-4">
                  <li>3 WhatsApp Bots</li>
                  <li>1,000 messages/month</li>
                  <li>Advanced RAG capabilities</li>
                  <li>Email support</li>
                  <li>Analytics dashboard</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Select Plan</Button>
            </CardFooter>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>
                For growing businesses with higher volume.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-bold">$49/month</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-4">
                  <li>10 WhatsApp Bots</li>
                  <li>10,000 messages/month</li>
                  <li>Premium RAG capabilities</li>
                  <li>Priority support</li>
                  <li>Advanced analytics</li>
                  <li>Custom bot templates</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Select Plan</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                For large organizations with custom needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-bold">Custom Pricing</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-4">
                  <li>Unlimited WhatsApp Bots</li>
                  <li>Unlimited messages</li>
                  <li>Enterprise-grade RAG</li>
                  <li>Dedicated support</li>
                  <li>Custom integrations</li>
                  <li>SLA guarantees</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>
              View your past invoices and payment history.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-10">
              <p className="text-muted-foreground">No billing history available.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>
              Manage your payment methods.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-10">
              <p className="text-muted-foreground">No payment methods added.</p>
              <Button className="mt-4" variant="outline">
                Add Payment Method
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}