
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl">
          {/* Retro terminal-style card */}
          <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
            {/* Title bar — subtle nod to old OS windows */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/60">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
              <span className="ml-2 text-xs font-mono text-muted-foreground tracking-wide">
                ~/davidrunemalm.com
              </span>
            </div>

            <div className="px-8 py-12 text-center">
              {/* Subtle blinking cursor + small icon */}
              <div className="flex items-center justify-center gap-3 mb-6 text-muted-foreground">
                <span className="text-2xl" aria-hidden="true">🚧</span>
                <span className="font-mono text-sm uppercase tracking-[0.2em]">
                  Under Construction
                </span>
                <span className="inline-block w-2 h-4 bg-foreground animate-blink align-middle" />
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                David Runemalm
              </h1>

              <p className="text-muted-foreground leading-relaxed mb-8">
                A new version of this site is being built. In the meantime, feel
                free to reach out — I'd love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:david.runemalm@gmail.com"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Email me
                </a>
                <a
                  href="https://github.com/runemalm"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Status bar — old-school footer */}
            <div className="border-t border-border bg-muted/40 px-4 py-2 font-mono text-[11px] text-muted-foreground flex justify-between">
              <span>status: rebuilding…</span>
              <span>last updated: May 2026</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
