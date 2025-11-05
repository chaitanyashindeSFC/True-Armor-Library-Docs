import { Link } from "react-router-dom";
import { ButtonTA } from "@chaitanya123123/truearmor-ui-components"; // ✅ your button
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";
import DocsLayout from "@/components/DocsLayout";

const Buttons = () => {
  const basicExample = `import { ButtonTA } from "@chaitanya123123/truearmor-ui-components";

function App() {
  return (
    <div>
      <ButtonTA label="Primary" />
      <ButtonTA label="Secondary" buttonType="secondary" />
      <ButtonTA label="Tertiary" buttonType="tertiary" />
      <ButtonTA label="Disabled" disabled />
    </div>
  );
}`;

  const iconsExample = `import { ArrowRight, Download } from "lucide-react";

<ButtonTA label="Download" icon={<Download />} iconPosition="before" />
<ButtonTA>
  Continue
  <ArrowRight />
</ButtonTA>`;

  const buttonProps = [
    {
      name: "label",
      type: "string",
      default: '"Click Me"',
      description: "Text label for the button. Ignored if children are provided.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description:
        "Custom inner content of the button. If provided, overrides the label prop.",
    },
    {
      name: "buttonType",
      type: '"primary" | "secondary" | "tertiary"',
      default: '"primary"',
      description: "Defines the visual style of the button.",
    },
    {
      name: "icon",
      type: "React.ReactNode",
      default: "undefined",
      description: "Optional icon to display inside the button.",
    },
    {
      name: "iconPosition",
      type: '"before" | "after"',
      default: '"after"',
      description: "Position of the icon relative to the label.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the button and prevents click actions.",
    },
    {
      name: "onClick",
      type: "() => void",
      default: "undefined",
      description: "Callback function triggered on button click.",
    },
    {
      name: "customCss",
      type: "string",
      default: '""',
      description: "Additional custom CSS classes to apply.",
    },
  ];

  return (
    <DocsLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Button</h1>
          <p className="text-lg text-muted-foreground">
            The <code>ButtonTA</code> component is used for actions in forms,
            dialogs, and toolbars. It supports multiple styles, icons, and
            disabled states.
          </p>
        </div>

        {/* Basic Usage */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Basic Usage
          </h2>
          <CodeBlock code={basicExample} language="tsx" />

          <div className="mt-6 rounded-xl border bg-card p-8 shadow-soft">
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <div className="flex flex-wrap gap-3">
              <ButtonTA label="Primary" />
              <ButtonTA label="Secondary" buttonType="secondary" />
              <ButtonTA label="Tertiary" buttonType="tertiary" />
              <ButtonTA label="Disabled" disabled />
            </div>
          </div>
        </div>

        {/* Icons Example */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            With Icons
          </h2>
          <p className="text-muted-foreground mb-4">
            Add icons before or after button text to improve clarity.
          </p>
          <CodeBlock code={iconsExample} language="tsx" />

          <div className="mt-6 rounded-xl border bg-card p-8 shadow-soft">
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <div className="flex flex-wrap gap-3">
              <ButtonTA
                label="Download"
                icon={<span className="text-lg">📥</span>}
                iconPosition="before"
              />
              <ButtonTA>
                Continue
                <span className="ml-1">→</span>
              </ButtonTA>
            </div>
          </div>
        </div>

        {/* Props Table */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Props</h2>
          <PropsTable props={buttonProps} />
        </div>

        {/* Best Practices */}
        <div className="rounded-xl border bg-muted/50 p-6">
          <h3 className="text-lg font-semibold mb-2">💡 Best Practices</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Use primary for the main action on a screen</li>
            <li>• Secondary buttons for alternative actions</li>
            <li>• Tertiary for less important or subtle actions</li>
            <li>• Keep text short and action-focused (e.g., “Save”, “Continue”)</li>
            <li>• Include clear icons when they enhance understanding</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between py-4 border-t">
          <Link to="/docs/components/alerts">
            <ButtonTA buttonType="secondary">← Alerts</ButtonTA>
          </Link>
          <Link to="/docs/components/cards">
            <ButtonTA buttonType="secondary">Cards →</ButtonTA>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Buttons;
