import React from "react";
import DocsLayout from "@/components/DocsLayout";
import { CardTA } from "@true-armor/ta-atoms2-public";
// @ts-expect-error - These components should be available according to the API documentation
import { CardTAIcon, CardTAContent, CardTATitle, CardTABody } from "@true-armor/ta-atoms2-public";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";
import { UserCircle2, Users, Shield, TrendingUp } from "lucide-react";

const Cards = () => {
  const importCode = `import { 
  CardTA, 
  CardTAIcon, 
  CardTAContent, 
  CardTATitle, 
  CardTABody 
} from "@true-armor/ta-atoms2-public";
import { UserCircle2, Users, Shield, TrendingUp } from "lucide-react";`;

  const basicUsageCode = `// Basic card with all components
<CardTA borderColor="#C60000">
  <CardTAIcon icon={UserCircle2} bg="#A80C0C" color="white" />
  <CardTAContent>
    <CardTATitle count={42} title="Total Users" />
    <CardTABody instances={12} label="Active Now" />
  </CardTAContent>
</CardTA>`;

  const multipleCardsCode = `// Multiple Cards Example
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Users Card */}
  <CardTA borderColor="#C60000">
    <CardTAIcon icon={UserCircle2} bg="#A80C0C" color="white" />
    <CardTAContent>
      <CardTATitle count={42} title="Total Users" />
      <CardTABody instances={12} label="Active Now" />
    </CardTAContent>
  </CardTA>

  {/* Teams Card */}
  <CardTA borderColor="#059669">
    <CardTAIcon icon={Users} bg="#047857" color="white" />
    <CardTAContent>
      <CardTATitle count={8} title="Teams" />
      <CardTABody instances={24} label="Members" />
    </CardTAContent>
  </CardTA>
</div>`;

  const titleOnlyCode = `// Card with Title Only
<CardTA borderColor="#173B4E">
  <CardTAIcon icon={TrendingUp} bg="#1E40AF" color="white" />
  <CardTAContent>
    <CardTATitle title="Revenue Growth" />
    <CardTABody instances="+24%" label="This Month" />
  </CardTAContent>
</CardTA>`;

  const customContentCode = `// Card with Custom Content
<CardTA borderColor="#7C3AED" className="max-w-sm">
  <CardTAIcon icon={Shield} bg="#6D28D9" color="white" />
  <CardTAContent>
    <CardTATitle count={99.9} title="Uptime" color="#7C3AED" />
    <div className="mt-3">
      <p className="text-sm text-gray-600">
        System is running smoothly with no issues detected.
      </p>
    </div>
  </CardTAContent>
</CardTA>`;

  // CardTA props
  const cardTAProps = [
    {
      name: "borderColor",
      type: "string",
      default: '"#C60000"',
      description: "Left border color (6px solid border).",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Additional CSS classes.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "CardTAIcon and CardTAContent components.",
    },
  ];

  // CardTAIcon props
  const cardTAIconProps = [
    {
      name: "icon",
      type: "React.ComponentType<any>",
      default: "UserCircle2",
      description: "Icon component from lucide-react.",
    },
    {
      name: "bg",
      type: "string",
      default: '"#A80C0C"',
      description: "Background color of the icon container.",
    },
    {
      name: "color",
      type: "string",
      default: '"white"',
      description: "Icon color.",
    },
  ];

  // CardTAContent props
  const cardTAContentProps = [
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "CardTATitle, CardTABody, or custom content.",
    },
  ];

  // CardTATitle props
  const cardTATitleProps = [
    {
      name: "count",
      type: "number | string",
      default: "undefined",
      description: "Large number displayed at the top.",
    },
    {
      name: "title",
      type: "string",
      default: "undefined",
      description: "Title text displayed below the count.",
    },
    {
      name: "color",
      type: "string",
      default: '"#111827"',
      description: "Color of the count text.",
    },
  ];

  // CardTABody props
  const cardTABodyProps = [
    {
      name: "instances",
      type: "number | string",
      default: "undefined",
      description: "Number or text displayed before the label.",
    },
    {
      name: "label",
      type: "string",
      default: '"Instances"',
      description: "Label text displayed after instances.",
    },
    {
      name: "color",
      type: "string",
        default: '"#6B7280"',
      description: "Color of both instances and label text.",
    },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-10 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-3">CardTA</h1>
          <p className="text-lg text-muted-foreground">
            Card component with icon, title, and body sections. Perfect for dashboard widgets, 
            statistics cards, and feature highlights. Uses a compound component pattern for flexible composition.
          </p>
        </div>

        {/* Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Basic Card</h3>
            <div className="mb-4"><CodeBlock code={basicUsageCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Multiple Cards</h3>
            <div className="mb-4"><CodeBlock code={multipleCardsCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Card with Title Only</h3>
            <div className="mb-4"><CodeBlock code={titleOnlyCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Card with Custom Content</h3>
            <div className="mb-4"><CodeBlock code={customContentCode} language="tsx" /></div>
          </div>

          <div className="p-6 border rounded-lg bg-card mt-6 shadow-soft">
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <section className="space-y-4">
              <CardTA borderColor="#DC2626">
                <CardTAIcon icon={Users} bg="#DC2626" />
                <CardTAContent>
                  <CardTATitle count={8} title="Critical Severity" />
                  <CardTABody instances={22} label="Instances" />
                </CardTAContent>
              </CardTA>
            </section>
          </div>
        </section>


        {/* Props */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CardTA (Main Component)</h3>
            <PropsTable props={cardTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CardTAIcon</h3>
            <PropsTable props={cardTAIconProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CardTAContent</h3>
            <PropsTable props={cardTAContentProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CardTATitle</h3>
            <PropsTable props={cardTATitleProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CardTABody</h3>
            <PropsTable props={cardTABodyProps} />
          </div>
        </section>

        {/* Features */}
        <section className="rounded-xl border bg-muted/50 p-6">
          <h3 className="text-lg font-semibold mb-2">✨ Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>✅ Customizable left border color</li>
            <li>✅ Icon support with custom background and color</li>
            <li>✅ Flexible content layout</li>
            <li>✅ Optional count and title display</li>
            <li>✅ Optional instances and label display</li>
            <li>✅ Fully customizable styling</li>
            <li>✅ Responsive design ready</li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Cards;
