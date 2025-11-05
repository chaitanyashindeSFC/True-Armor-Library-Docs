import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Zap, Package, Shield } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import DocsLayout from "@/components/DocsLayout";

const Introduction = () => {
  const installCode = `npm install @chaitanya123123/truearmor-ui-components`;

  const importCode = `import { ButtonTA, AlertTA, CardTA } from "@chaitanya123123/truearmor-ui-components";
import "@chaitanya123123/truearmor-ui-components/styles.css";

function App() {
  return (
    <div>
      <AlertTA variant="info">Welcome to TrueArmor UI!</Alert>
      <ButtonTA onClick={() => console.log("Clicked!")}>
        Click me
      </ButtonTA>
    </div>
  );
}`;

  return (
    <DocsLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Welcome to TrueArmor UI Components
          </h1>
          <p className="text-lg text-muted-foreground">
            A modern, accessible, and customizable React component library built
            with Tailwind CSS. Create beautiful applications faster with
            production-ready components.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6 shadow-soft hover:shadow-medium transition-shadow">
            <Zap className="h-10 w-10 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Optimized for performance with tree-shaking and minimal bundle
              size.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-soft hover:shadow-medium transition-shadow">
            <Package className="h-10 w-10 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Fully Customizable</h3>
            <p className="text-sm text-muted-foreground">
              Built with Tailwind CSS for easy theming and customization.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-soft hover:shadow-medium transition-shadow">
            <Shield className="h-10 w-10 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Type Safe</h3>
            <p className="text-sm text-muted-foreground">
              Written in TypeScript with comprehensive type definitions.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-soft hover:shadow-medium transition-shadow">
            <Rocket className="h-10 w-10 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Production Ready</h3>
            <p className="text-sm text-muted-foreground">
              Battle-tested components used by teams worldwide.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Quick Start</h2>
          <p className="text-muted-foreground">
            Get started with TrueArmor UI in seconds. Install the package and
            start building.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Installation</h3>
              <CodeBlock code={installCode} language="bash" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Usage Example</h3>
              <CodeBlock code={importCode} language="tsx" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-gradient-primary p-8 text-white shadow-large">
          <h2 className="text-2xl font-bold mb-3">Why TrueArmor UI?</h2>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>50+ production-ready components</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Full dark mode support out of the box</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>WAI-ARIA compliant for accessibility</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Comprehensive documentation with live examples</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Active community and regular updates</span>
            </li>
          </ul>
          <Link to="/quickstart">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started →
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-between py-4 border-t">
          <span className="text-sm text-muted-foreground">
            Next: Installation Guide
          </span>
          <Link to="/docs/installation">
            <Button variant="outline">
              Next →
            </Button>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Introduction;
