import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, Bot, Database, Zap, Shield, BarChart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-[hsl(var(--background))]">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <MessageSquare className="h-6 w-6" />
              <span className="inline-block font-bold">WhatsApp Bot SaaS</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="/auth/login"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                Login
              </Link>
              <Link href="/auth/register">
                <Button>Get Started</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Create AI-Powered WhatsApp Bots in Minutes
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Build, deploy, and manage intelligent WhatsApp bots with RAG capabilities.
                  No coding required.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/auth/register">
                  <Button size="lg">Get Started for Free</Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Features
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Everything you need to build powerful WhatsApp bots
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-4">
                <Bot className="h-8 w-8" />
                <h3 className="text-xl font-bold">Easy Bot Creation</h3>
                <p className="text-muted-foreground">
                  Create and configure WhatsApp bots in minutes with our intuitive dashboard.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-4">
                <Database className="h-8 w-8" />
                <h3 className="text-xl font-bold">RAG Capabilities</h3>
                <p className="text-muted-foreground">
                  Upload documents, websites, and custom knowledge to power your bots with accurate information.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-4">
                <Zap className="h-8 w-8" />
                <h3 className="text-xl font-bold">AI-Powered</h3>
                <p className="text-muted-foreground">
                  Leverage the latest AI models to provide intelligent responses to customer inquiries.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-4">
                <Shield className="h-8 w-8" />
                <h3 className="text-xl font-bold">Secure & Reliable</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade security and reliability for your WhatsApp automation needs.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-4">
                <BarChart className="h-8 w-8" />
                <h3 className="text-xl font-bold">Analytics</h3>
                <p className="text-muted-foreground">
                  Gain insights into bot performance, user engagement, and conversation metrics.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-4">
                <MessageSquare className="h-8 w-8" />
                <h3 className="text-xl font-bold">Multi-Bot Support</h3>
                <p className="text-muted-foreground">
                  Create and manage multiple bots for different use cases and departments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Pricing Plans
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that fits your needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div>
                  <h3 className="text-2xl font-bold">Free</h3>
                  <div className="mt-4 text-3xl font-bold">$0<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">✓ 1 WhatsApp Bot</li>
                    <li className="flex items-center">✓ 100 messages/month</li>
                    <li className="flex items-center">✓ Basic RAG capabilities</li>
                    <li className="flex items-center">✓ Community support</li>
                  </ul>
                </div>
                <Link href="/auth/register">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border border-primary p-6">
                <div>
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <div className="mt-4 text-3xl font-bold">$49<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">✓ 10 WhatsApp Bots</li>
                    <li className="flex items-center">✓ 10,000 messages/month</li>
                    <li className="flex items-center">✓ Premium RAG capabilities</li>
                    <li className="flex items-center">✓ Priority support</li>
                    <li className="flex items-center">✓ Advanced analytics</li>
                    <li className="flex items-center">✓ Custom bot templates</li>
                  </ul>
                </div>
                <Link href="/auth/register">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div>
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <div className="mt-4 text-3xl font-bold">Custom<span className="text-sm font-normal text-muted-foreground"></span></div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">✓ Unlimited WhatsApp Bots</li>
                    <li className="flex items-center">✓ Unlimited messages</li>
                    <li className="flex items-center">✓ Enterprise-grade RAG</li>
                    <li className="flex items-center">✓ Dedicated support</li>
                    <li className="flex items-center">✓ Custom integrations</li>
                    <li className="flex items-center">✓ SLA guarantees</li>
                  </ul>
                </div>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Create your first WhatsApp bot in minutes. No credit card required.
                </p>
              </div>
              <Link href="/auth/register">
                <Button size="lg">Sign Up for Free</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2023 WhatsApp Bot SaaS. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="text-sm font-medium hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:underline">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
