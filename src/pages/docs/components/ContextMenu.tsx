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

  const props = [
    {
      name: "onSelect",
      type: "(item: string) => void",
      description: "Callback function triggered when a menu item is clicked.",
    },
    {
      name: "children",
      type: "ContextMenuTAItem[]",
      description: "Menu item components.",
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
          <PropsTable props={props} />
        </div>
      </div>
    </DocsLayout>
  );
};

export default ContextMenu;
