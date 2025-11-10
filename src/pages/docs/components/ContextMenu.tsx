import React from "react";
import DocsLayout from "@/components/DocsLayout";
import { ContextMenuTA } from "@true-armor/atoms-ta";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";
import { FileText, Share2 } from "lucide-react";

const ContextMenu = () => {
  const importCode = `import { ContextMenuTA } from '@true-armor/atoms-ta';`;

  const usageCode = `<ContextMenuTA
  type=""
  customItems={[
    { label: "Duplicate", icon: <FileText size={16} /> },
    { label: "Pin", icon: <Share2 size={16} /> },
  ]}
  onSelect={(label) => console.log('Selected:', label)}
/>`;

  const props = [
    {
      name: "type",
      type: `"action" | "download" | "archived"`,
      description: "Defines which type of menu to render.",
    },
    {
      name: "customItems",
      type: "Array<{ label: string; icon?: React.ReactNode }>",
      description: "Optional array of custom menu items to extend or replace defaults.",
    },
    {
      name: "onSelect",
      type: "(label: string) => void",
      description: "Callback function triggered when a menu item is clicked.",
    },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">ContextMenuTA</h1>
          <p className="text-gray-600 mb-4">
            A flexible and reusable context menu component for TrueArmor UI.  
            Supports predefined menu types (<code>action</code>, <code>download</code>, <code>archived</code>)  
            and fully custom menu items.
          </p>
        </div>

        {/* Usage Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4">
            <CodeBlock code={importCode} language="typescript" />
          </div>
          <div className="mb-4">
            <CodeBlock code={usageCode} language="tsx" />
          </div>
        </div>

        {/* Preview Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <ContextMenuTA
            
              customItems={[
                { label: "Duplicate", icon: <FileText size={16} /> },
                { label: "Pin", icon: <Share2 size={16} /> },
              ]}
              onSelect={(label) => alert(`Selected: ${label}`)}
            />
          </div>
        </div>

        {/* Props Table */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          <PropsTable props={props} />
        </div>
      </div>
    </DocsLayout>
  );
};

export default ContextMenu;
