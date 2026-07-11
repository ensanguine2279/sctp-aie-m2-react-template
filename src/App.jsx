// src/App.jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* App Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-blue-600">
            <span>🚀</span>
            <span>TailwindTemplate</span>
          </div>
          <nav className="flex items-center gap-4">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
              Status: Active
            </span>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all sm:p-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Welcome to your Tailwind environment
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This boilerplate template is fully configured with clean grid
              alignments, responsive padding breaks, typography tracking, and
              component lifecycle resets.
            </p>

            {/* Interactive State Demo */}
            <div className="mt-8">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-95 transition-all"
                onClick={() => setCount((prev) => prev + 1)}
              >
                Interaction Counter: {count}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* App Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Tailwind Sandbox. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
