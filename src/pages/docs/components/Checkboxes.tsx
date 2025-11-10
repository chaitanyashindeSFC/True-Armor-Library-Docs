import React, { useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { CheckboxTA } from "atoms-ta";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";

const Checkboxes = () => {
  const importCode = `import { CheckboxTA } from 'atoms-ta';`;
  const usageCode = `<CheckboxTA label="Accept" checked={true} onChange={(v)=>console.log(v)} />`;

  const props = [
    { name: "label", type: "string", description: "Label text" },
    { name: "checked", type: "boolean", description: "Checked state" },
    { name: "onChange", type: "(checked: boolean) => void", description: "Fires when checkbox changes" },
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
            <CheckboxTA label="Accept Terms" checked={checked} onChange={setChecked} />

          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          <PropsTable props={props} />
        </div>
      </div>
    </DocsLayout>
  );
};

export default Checkboxes;
