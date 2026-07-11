// src/App.jsx
import { useState } from "react";
import { cn } from "@/lib/utils";

// Baseline Shadcn UI Component blueprints
function Button({ className, variant = "default", ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 active:scale-98 cursor-pointer",
        variant === "default" &&
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs",
        variant === "outline" &&
          "border border-border bg-background hover:bg-muted text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card text-card-foreground shadow-xs",
        className,
      )}
      {...props}
    />
  );
}

export default function App() {
  const [metrics, setMetrics] = useState({ builds: 24, latency: 14 });

  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50">
      {/* Sticky Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-md sticky top-0 z-50">
        <div className="flex h-16 items-center px-6 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center space-x-2 font-bold text-slate-900">
            <span className="text-primary font-bold text-xl">✦</span>
            <span>ShadcnTemplate</span>
          </div>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Template Architecture: Ready
          </span>
        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="flex-1 space-y-6 p-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            System Workspace
          </h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={() =>
                setMetrics((p) => ({
                  ...p,
                  latency: Math.max(5, p.latency - 2),
                }))
              }
            >
              Optimize Nodes
            </Button>
            <Button
              onClick={() =>
                setMetrics((p) => ({ ...p, builds: p.builds + 1 }))
              }
            >
              Trigger Build
            </Button>
          </div>
        </div>

        {/* Informational Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="p-6">
            <span className="text-sm font-medium text-muted-foreground block mb-1">
              Production Builds Ran
            </span>
            <div className="text-3xl font-bold">{metrics.builds}</div>
          </Card>
          <Card className="p-6">
            <span className="text-sm font-medium text-muted-foreground block mb-1">
              Average Edge Latency
            </span>
            <div className="text-3xl font-bold">{metrics.latency}ms</div>
          </Card>
        </div>
      </main>
    </div>
  );
}
