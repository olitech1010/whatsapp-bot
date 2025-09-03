import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  actionOnClick?: () => void;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
  actionOnClick,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8",
        className
      )}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm">
        {description}
      </p>
      {actionLabel && (actionHref || actionOnClick) && (
        <div className="mt-4">
          {actionHref ? (
            <Link href={actionHref}>
              <Button variant="outline">{actionLabel}</Button>
            </Link>
          ) : (
            <Button variant="outline" onClick={actionOnClick}>
              {actionLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}