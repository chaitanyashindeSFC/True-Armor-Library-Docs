import { Link } from "react-router-dom";
import { ButtonTA } from "atoms-ta"; // ✅ TrueArmor UI button
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";
import DocsLayout from "@/components/DocsLayout";
import { Download, ArrowRight } from "lucide-react"; // ✅ Correct Lucide React imports

const Buttons = () => {
  // ✅ Example Code Snippets
  const basicExample = `import { ButtonTA } from "atoms-ta";

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

<ButtonTA 
  label="Download" 
  icon={<Download size={16} />} 
  iconPosition="before" 
/>

<ButtonTA 
  label="Continue" 
  icon={<ArrowRight size={16} />} 
  iconPosition="after" 
/>`;

  // ✅ Props Table Data
  const buttonProps = [
    {
      name: "label",
      type: "string",
      default: '"Click Me"',
      description:
        "Text label for the button. Ignored if children are provided.",
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
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-[Montserrat] overflow-x-hidden">
        {/* ✅ Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Button</h1>
          <p className="text-lg text-gray-600">
            The <code>ButtonTA</code> component is used for actions in forms,
            dialogs, and toolbars. It supports multiple styles, icons, and
            disabled states.
          </p>
        </div>

        {/* ✅ Basic Usage */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>

          {/* Scroll-safe code block */}
          <div className="overflow-x-auto rounded-md border bg-gray-50">
            <CodeBlock code={basicExample} language="tsx" />
          </div>

          <div className="mt-6 p-6 border rounded-xl bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <div className="flex flex-wrap gap-3">
              <ButtonTA label="Primary" />
              <ButtonTA label="Secondary" buttonType="secondary" />
              <ButtonTA label="Tertiary" buttonType="tertiary" />
              <ButtonTA label="Disabled" disabled />
            </div>
          </div>
        </section>

        {/* ✅ Icons Example */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">With Icons</h2>
          <p className="text-gray-500 mb-4">
            Add icons before or after button text to enhance clarity and
            usability.
          </p>

          <div className="overflow-x-auto rounded-md border bg-gray-50">
            <CodeBlock code={iconsExample} language="tsx" />
          </div>

          <div className="mt-6 p-6 border rounded-xl bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <ButtonTA
                label="Download"
                icon={<Download size={18} />}
                iconPosition="before"
              />
              <ButtonTA
                label="Continue"
                icon={<ArrowRight size={18} />}
                iconPosition="after"
              />
            </div>
          </div>
        </section>

        {/* ✅ Props Table */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          <PropsTable props={buttonProps} />
        </section>

        {/* ✅ Best Practices */}
        <section className="rounded-xl border bg-muted/50 p-6">
          <h3 className="text-lg font-semibold mb-2">💡 Best Practices</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Use primary for the main action on a screen.</li>
            <li>• Secondary buttons for alternative actions.</li>
            <li>• Tertiary for subtle or less critical actions.</li>
            <li>• Keep labels short and action-oriented (e.g., “Save”, “Next”).</li>
            <li>• Add icons when they improve context or clarity.</li>
          </ul>
        </section>

        {/* ✅ Navigation */}
        <footer className="flex items-center justify-between py-4 border-t">
          <Link to="/docs/components/alerts">
            <ButtonTA buttonType="secondary">← Alerts</ButtonTA>
          </Link>
          <Link to="/docs/components/cards">
            <ButtonTA buttonType="secondary">Cards →</ButtonTA>
          </Link>
        </footer>
      </div>
    </DocsLayout>
  );
};

export default Buttons;
