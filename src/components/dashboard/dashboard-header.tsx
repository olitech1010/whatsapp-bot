"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { UserNav } from "./user-nav";
import { ModeToggle } from "../mode-toggle";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-[hsl(var(--background))]">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center">
          <MobileNav />
          <Link href="/dashboard" className="hidden items-center space-x-2 md:flex">
            <span className="hidden font-bold sm:inline-block">
              WhatsApp Bot SaaS
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <UserNav />
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileNavOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-[hsl(var(--background))] p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
          <div className="relative z-20 grid gap-6 rounded-md bg-[hsl(var(--background))] p-4">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2"
              onClick={() => setMobileNavOpen(false)}
            >
              <span className="font-bold">Dashboard</span>
            </Link>
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              <Link
                href="/dashboard/bots"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={() => setMobileNavOpen(false)}
              >
                Bots
              </Link>
              <Link
                href="/dashboard/conversations"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={() => setMobileNavOpen(false)}
              >
                Conversations
              </Link>
              <Link
                href="/dashboard/knowledge"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={() => setMobileNavOpen(false)}
              >
                Knowledge Base
              </Link>
              <Link
                href="/dashboard/analytics"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={() => setMobileNavOpen(false)}
              >
                Analytics
              </Link>
              <Link
                href="/dashboard/billing"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={() => setMobileNavOpen(false)}
              >
                Billing
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={() => setMobileNavOpen(false)}
              >
                Settings
              </Link>
            </nav>
          </div>
          <Button
            variant="ghost"
            className="absolute right-4 top-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={() => setMobileNavOpen(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close Menu</span>
          </Button>
        </div>
      )}
    </header>
  );
}