import { Link } from "react-router-dom";
import {
  AlertTA,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chaitanya123123/truearmor-ui-components"; // ✅ your library
import { ButtonTA } from "@chaitanya123123/truearmor-ui-components";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";
import DocsLayout from "@/components/DocsLayout";

const Alerts = () => {
  const basicExample = `import { AlertTA } from "@chaitanya123123/truearmor-ui-components";

function App() {
  return (
    <AlertTA
      type="info"
      title="Heads up!"
      message="You can add components to your app using the CLI."
    />
  );
}`;

  const variantsExample = `<AlertTA type="success" title="Success" message="This is a success alert." />
<AlertTA type="error" title="Error" message="Something went wrong!" />
<AlertTA type="warning" title="Warning" message="Please review your information." />
<AlertTA type="info" title="Info" message="This is an informational alert." />`;

  const alertProps = [
    {
      name: "type",
      type: '"success" | "error" | "warning" | "info"',
      default: '"info"',
      description: "The visual type of the alert, which controls its icon and color.",
    },
    {
      name: "title",
      type: "string | ReactNode",
      default: "undefined",
      description: "Title of the alert message.",
    },
    {
      name: "message",
      type: "string | ReactNode",
      default: "undefined",
      description: "Main alert text content.",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Additional custom CSS classes to apply to the alert container.",
    },
  ];

  return (
    <DocsLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Alert</h1>
          <p className="text-lg text-muted-foreground">
            Displays important messages to the user — including info, success,
            warnings, and errors.
          </p>
        </div>

        {/* Basic Usage */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Basic Usage
            </h2>
            <CodeBlock code={basicExample} language="tsx" />

            <div className="mt-6 space-y-4">
              <AlertTA
                type="info"
                title="Heads up!"
                message="You can add components to your app using the CLI."
              />
            </div>
          </div>

          {/* Variants */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Variants</h2>
            <p className="text-muted-foreground mb-4">
              Use different <code>type</code> values to convey different levels of importance.
            </p>
            <CodeBlock code={variantsExample} language="tsx" />

            <div className="mt-6 space-y-4">
              <AlertTA
                type="success"
                title="Success"
                message="Your changes have been saved successfully!"
              />
              <AlertTA
                type="error"
                title="Error"
                message="Something went wrong! Please try again."
              />
              <AlertTA
                type="warning"
                title="Warning"
                message="Please review your information before submitting."
              />
              <AlertTA
                type="info"
                title="Information"
                message="This is a default informational alert."
              />
            </div>
          </div>

          {/* Props Table */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Props</h2>
            <PropsTable props={alertProps} />
          </div>

          {/* Best Practices */}
          <div className="rounded-xl border bg-muted/50 p-6">
            <h3 className="text-lg font-semibold mb-2">💡 Best Practices</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Use icons to visually differentiate alert types</li>
              <li>• Keep alert messages short and clear</li>
              <li>• Use error type only for actual errors</li>
              <li>• Success and info types should be non-intrusive</li>
              <li>• Ensure readable contrast on colored backgrounds</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between py-4 border-t">
          <Link to="/docs">
            <ButtonTA buttonType="secondary">← Introduction</ButtonTA>
          </Link>
          <Link to="/docs/components/buttons">
            <ButtonTA buttonType="secondary">Buttons →</ButtonTA>
          </Link>
        </div>
      </div>  
    </DocsLayout>
  );
};

export default Alerts;
