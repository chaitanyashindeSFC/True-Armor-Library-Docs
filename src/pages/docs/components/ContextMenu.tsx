import React from "react";
import DocsLayout from "@/components/DocsLayout";
import { ContextMenuTA, ContextMenuTAItem } from "@true-armor/ta-atoms2-public";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";
import { Edit2Icon, Trash2, Share2 } from "lucide-react";

const ContextMenu = () => {
  const importCode = `import { ContextMenuTA, ContextMenuTAItem } from '@true-armor/ta-atoms2-public';
import { Edit2Icon, Trash2, Share2 } from 'lucide-react';`;

  const usageCode = `<ContextMenuTA onSelect={(item) => console.log("Clicked:", item)}>
  <ContextMenuTAItem 
    label="Edit" 
    icon={Edit2Icon} 
  />
  <ContextMenuTAItem 
    label="Delete" 
    icon={Trash2} 
  />
  <ContextMenuTAItem 
    label="Share" 
    icon={Share2} 
  />
</ContextMenuTA>`;

  // ContextMenuTA props
  const contextMenuTAProps = [
    {
      name: "onSelect",
      type: "(item: string) => void",
      default: "undefined",
      description: "Callback function triggered when a menu item is clicked.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "ContextMenuTAItem components as children.",
    },
  ];

  // ContextMenuTAItem props
  const contextMenuTAItemProps = [
    {
      name: "label",
      type: "string",
      default: "undefined",
      description: "Text label displayed for the menu item.",
    },
    {
      name: "icon",
      type: "React.ComponentType",
      default: "undefined",
      description: "Optional icon component to display before the label.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the menu item is disabled.",
    },
    {
      name: "onClick",
      type: "() => void",
      default: "undefined",
      description: "Optional custom click handler (overrides onSelect from parent).",
    },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">ContextMenuTA</h1>
          <p className="text-gray-600 mb-4">
            A flexible and reusable context menu component for TrueArmor UI  
            built with compound components for clean composition.
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
            <ContextMenuTA onSelect={(item) => alert(`Clicked: ${item}`)}>
              <ContextMenuTAItem 
                label="Edit" 
                icon={Edit2Icon} 
              />
              <ContextMenuTAItem 
                label="Delete" 
                icon={Trash2} 
              />
              <ContextMenuTAItem 
                label="Share" 
                icon={Share2} 
              />
            </ContextMenuTA>
          </div>
        </div>

        {/* Props Table */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">ContextMenuTA</h3>
            <PropsTable props={contextMenuTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">ContextMenuTAItem</h3>
            <PropsTable props={contextMenuTAItemProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default ContextMenu;
