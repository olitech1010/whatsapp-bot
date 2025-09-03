"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessageSquare,
  Bot,
  Database,
  Settings,
  CreditCard,
  BarChart,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export function DashboardNav() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Bots",
      href: "/dashboard/bots",
      icon: <Bot className="mr-2 h-4 w-4" />,
    },
    {
      title: "Conversations",
      href: "/dashboard/conversations",
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
    },
    {
      title: "Knowledge Base",
      href: "/dashboard/knowledge",
      icon: <Database className="mr-2 h-4 w-4" />,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: <BarChart className="mr-2 h-4 w-4" />,
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <nav className="hidden w-64 flex-col border-r bg-[hsl(var(--background))] p-4 md:flex">
      <div className="flex h-14 items-center px-4 py-2">
        <Link href="/dashboard" className="flex items-center">
          <span className="text-xl font-bold">WhatsApp Bot</span>
        </Link>
      </div>
      <div className="mt-8 flex flex-col space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
              pathname === item.href
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}