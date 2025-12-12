import { Link } from "react-router-dom";
import {
  AlertTA,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@true-armor/ta-atoms2-public";
import { ButtonTA } from "@true-armor/ta-atoms2-public";
import { CheckCircle2, AlertCircle } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";
import DocsLayout from "@/components/DocsLayout";

const Alerts = () => {
  const basicExample = `import { AlertTA, Alert, AlertIcon, AlertTitle, AlertDescription } from "@true-armor/atoms";
import { CheckCircle2, AlertCircle } from "lucide-react";

function App() {
  return (
    <>
      <AlertTA
        type="success"
        title="Success!"
        message="Operation completed successfully"
        icon={<CheckCircle2 size={20} />}
      />
      
      <Alert type="error">
        <AlertCircle size={20} className="text-red-600" />
        <div>
          <AlertTitle type="error">Error</AlertTitle>
          <AlertDescription>Something went wrong</AlertDescription>
        </div>
      </Alert>
    </>
  );
}`;

  const variantsExample = `<AlertTA 
  type="success" 
  title="Success" 
  message="This is a success alert." 
  icon={<CheckCircle2 size={20} />}
/>

<Alert type="error">
  <AlertCircle size={20} className="text-red-600" />
    <AlertTitle type="error">Error</AlertTitle>
    <AlertDescription>Something went wrong!</AlertDescription
</Alert>

<AlertTA 
  type="warning" 
  title="Warning" 
  message="Please review your information." 
/>

<AlertTA 
  type="info" 
  title="Info" 
  message="This is an informational alert." 
/>`;

  const alertProps = [
    {
      name: "type",
      type: '"success" | "error" | "warning" | "info"',
      default: '"info"',
      description:
        "The visual type of the alert, which controls its icon and color.",
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
      description:
        "Additional custom CSS classes to apply to the alert container.",
    },
  ];

  return (
    <DocsLayout>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-[Montserrat] overflow-x-hidden">
        {/* ✅ Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Alert</h1>
          <p className="text-lg text-gray-600">
            Displays important messages to the user — including info, success,
            warnings, and errors.
          </p>
        </div>

        {/* ✅ Basic Usage */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>

            {/* Prevent overflow */}
            <div className="overflow-x-auto rounded-md border bg-gray-50">
              <CodeBlock code={basicExample} language="tsx" />
            </div>

            <div className="mt-6 space-y-4">
              <AlertTA
                type="success"
                title="Success!"
                message="Operation completed successfully"
                icon={<CheckCircle2 size={20} />} 
              />
              <Alert type="error">
                <AlertCircle size={20} className="text-red-600" />
                
                  <AlertTitle type="error">Error</AlertTitle>
                  <AlertDescription>Something went wrong</AlertDescription>
                
              </Alert>
            </div>
          </div>

          {/* ✅ Variants */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Variants</h2>
            <p className="text-gray-500 mb-4">
              Use different <code>type</code> values to convey different levels
              of importance.
            </p>

            {/* CodeBlock in scroll-safe container */}
            <div className="overflow-x-auto rounded-md border bg-gray-50">
              <CodeBlock code={variantsExample} language="tsx" />
            </div>

            <div className="mt-6 space-y-4">
              <AlertTA
                type="success"
                title="Success"
                message="Your changes have been saved successfully!"
                icon={<CheckCircle2 size={20} />}
              />
              <Alert type="error">
                <AlertCircle size={20} className="text-red-600" />
                <div>
                  <AlertTitle type="error">Error</AlertTitle>
                  <AlertDescription>Something went wrong! Please try again.</AlertDescription>
                </div>
              </Alert>
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

          {/* ✅ Props Table */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Props</h2>
            <PropsTable props={alertProps} />
          </div>

          {/* ✅ Best Practices */}
          <div className="rounded-xl border bg-muted/50 p-6">
            <h3 className="text-lg font-semibold mb-2">💡 Best Practices</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Use icons to visually differentiate alert types</li>
              <li>• Keep alert messages short and clear</li>
              <li>• Use error type only for actual errors</li>
              <li>• Success and info types should be non-intrusive</li>
              <li>• Ensure readable contrast on colored backgrounds</li>
            </ul>
          </div>
        </div>

        {/* ✅ Navigation */}
        <footer className="flex items-center justify-between py-4 border-t">
          <Link to="/docs">
            <ButtonTA buttonType="secondary" className="w-full">← Introduction</ButtonTA>
          </Link>
          <Link to="/docs/components/buttons">
            <ButtonTA buttonType="secondary" className="w-full">Buttons →</ButtonTA>
          </Link>
        </footer>
      </div>
    </DocsLayout>
  );
};

export default Alerts;
