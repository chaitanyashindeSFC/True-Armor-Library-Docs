import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { ToolTipTA } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

interface PropsRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

const TooltipComponent = () => {
  // ToolTipTA props
  const toolTipTAProps: PropsRow[] = [
    {
      name: 'content',
      type: 'string',
      default: 'undefined',
      description: 'The tooltip text (required).',
    },
    {
      name: 'type',
      type: '"dark" | "light"',
      default: '"dark"',
      description: 'Tooltip style (dark or light theme).',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Element to attach tooltip to (required).',
    },
  ];

  const importCode = `import { ToolTipTA } from '@true-armor/atoms';`;

  const usageCode = `// Dark Tooltip
<ToolTipTA type="dark" content="This is a dark tooltip">
  <button className="px-4 py-2 bg-gray-900 text-white rounded">
    Hover me
  </button>
</ToolTipTA>

// Light Tooltip
<ToolTipTA type="light" content="This is a light tooltip">
  <button className="px-4 py-2 bg-gray-200 rounded">
    Hover me
  </button>
</ToolTipTA>

// With Custom Element
<ToolTipTA type="dark" content="Click to download">
  <div className="cursor-pointer p-2">
    <DownloadIcon />
  </div>
</ToolTipTA>`;

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">ToolTipTA</h1>
        <p className="text-gray-600 mb-4">
          A tooltip component that displays additional information when hovering over an element. 
          Now uses flowbite-react Tooltip directly. Wrapper components (ToolTipTAContent, ToolTipTAArrow, ToolTipTAWrapper) are no longer exported.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Usage</h2>
        <div className="mb-4">
          <CodeBlock code={importCode} language="typescript" />
        </div>
        <div className="mb-4">
          <CodeBlock code={usageCode} language="typescript" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Preview</h2>
        <div className="p-4 border rounded-lg bg-white space-x-6 flex flex justify-center">
          <ToolTipTA type="dark" content="This is a dark tooltip">
            <button className="px-4 py-2 bg-gray-900 text-white rounded">
              Hover me (Dark)
            </button>
          </ToolTipTA>
          
          <ToolTipTA type="light" content="This is a light tooltip">
            <button className="px-4 py-2 bg-gray-200 rounded">
              Hover me (Light)
            </button>
          </ToolTipTA>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToolTipTA</h3>
          <PropsTable props={toolTipTAProps} />
          <p className="text-sm text-gray-500 mt-3">
            All other props from flowbite-react Tooltip are supported.
          </p>
        </div>
      </div>
      </div>
    </DocsLayout>
  );
};

export default TooltipComponent;