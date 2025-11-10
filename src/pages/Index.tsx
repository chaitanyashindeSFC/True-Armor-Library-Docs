import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Palette, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <a href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <span className="text-lg font-bold text-white">T</span>
            </div>
            <span className="font-bold text-lg">TrueArmor UI</span>
          </a>
          <nav className="flex items-center space-x-1">
            <a href="/docs">
              <Button variant="ghost">Documentation</Button>
            </a>
            <a href="/docs/installation">
              <Button>Get Started</Button>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative container px-4 py-24 md:py-32 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10 blur-3xl"></div>
          <div className="mx-auto max-w-4xl text-center space-y-8 animate-fade-in relative z-10">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm bg-muted shadow-soft">
              <span className="text-primary font-medium">New:</span>
              <span className="ml-2 text-muted-foreground">Version 1.0 is now available</span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Build Beautiful Apps
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Faster Than Ever
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              TrueArmor UI is a modern React component library built with Tailwind CSS.
              Production-ready components that are accessible, customizable, and beautiful.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/quickstart">
                <Button size="lg" className="text-lg px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="/docs">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Documentation
                </Button>
              </a>
            </div>

            <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Accessible</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 py-16 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Why Choose TrueArmor UI?
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to build modern web applications
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border bg-card p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Developer First</h3>
                <p className="text-sm text-muted-foreground">
                  Built with TypeScript for type safety and excellent DX. Full autocomplete support.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Customizable</h3>
                <p className="text-sm text-muted-foreground">
                  Easily theme components with CSS variables. Matches your brand perfectly.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Accessible</h3>
                <p className="text-sm text-muted-foreground">
                  WAI-ARIA compliant components. Keyboard navigation and screen reader tested.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Performant</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized bundle size with tree-shaking. Lightning-fast load times.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 py-16 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border bg-gradient-hero p-12 text-white shadow-glow text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Ready to build something amazing?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Join thousands of developers using TrueArmor UI to create beautiful applications.
                </p>
                <a href="/quickstart">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 shadow-large">
                    Start Building Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 mt-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              Made by Chaitanya
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a
                href="/docs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
