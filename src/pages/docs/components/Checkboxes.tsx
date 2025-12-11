import React, { useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { CheckboxTA, CheckboxTAInput, CheckboxTALabel } from "@true-armor/ta-atoms2-public";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";

const Checkboxes = () => {
  const importCode = `import { CheckboxTA, CheckboxTAInput, CheckboxTALabel } from '@true-armor/ta-atoms2-public';`;
  const usageCode = `<CheckboxTA checked={isChecked} onChange={setIsChecked}>
  <CheckboxTAInput />
  <CheckboxTALabel>Accept terms and conditions</CheckboxTALabel>
</CheckboxTA>`;

  // CheckboxTA props
  const checkboxTAProps = [
    {
      name: "checked",
      type: "boolean",
      default: "false",
      description: "Controlled checked state of the checkbox.",
    },
    {
      name: "onChange",
      type: "(checked: boolean) => void",
      default: "undefined",
      description: "Callback function triggered when the checkbox state changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the checkbox is disabled.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "CheckboxTAInput and CheckboxTALabel components as children.",
    },
  ];

  // CheckboxTAInput props
  const checkboxTAInputProps = [
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the checkbox input is disabled (inherited from parent if not specified).",
    },
  ];

  // CheckboxTALabel props
  const checkboxTALabelProps = [
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Label text or content displayed next to the checkbox.",
    },
  ];

  // ✅ Local state for preview example
  const [checked, setChecked] = useState(false);

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">CheckboxTA</h1>
          <p className="text-gray-600 mb-4">Simple checkbox control.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4">
            <CodeBlock code={importCode} language="typescript" />
          </div>
          <div className="mb-4">
            <CodeBlock code={usageCode} language="tsx" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white flex flex-col gap-3">
            <CheckboxTA checked={checked} onChange={setChecked}>
              <CheckboxTAInput />
              <CheckboxTALabel>Accept terms and conditions</CheckboxTALabel>
            </CheckboxTA>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CheckboxTA</h3>
            <PropsTable props={checkboxTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CheckboxTAInput</h3>
            <PropsTable props={checkboxTAInputProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CheckboxTALabel</h3>
            <PropsTable props={checkboxTALabelProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Checkboxes;
