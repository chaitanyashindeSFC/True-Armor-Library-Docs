import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { ToolTipTA, ToolTipTAContent, ToolTipTAArrow, ToolTipTAWrapper } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

interface PropsRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

const TooltipComponent = () => {
  const propsData: PropsRow[] = [
    {
      name: 'content',
      type: 'React.ReactNode',
      description: 'Content to display in the tooltip'
    },
    {
      name: 'delayDuration',
      type: 'number',
      default: '200',
      description: 'Delay duration before showing tooltip'
    },
    {
      name: 'side',
      type: '"top" | "right" | "bottom" | "left"',
      default: '"top"',
      description: 'Preferred side of the anchor to render against'
    },
    {
      name: 'align',
      type: '"start" | "center" | "end"',
      default: '"center"',
      description: 'Preferred alignment against the anchor'
    },
    {
      name: 'variant',
      type: '"default" | "success" | "error" | "warning" | "info"',
      default: '"default"',
      description: 'Visual style variant of the tooltip'
    }
  ];

  const importCode = `import { ToolTipTA, ToolTipTAContent, ToolTipTAArrow, ToolTipTAWrapper } from '@true-armor/ta-atoms2-public';`;

  const usageCode = `// Dark Tooltip
<ToolTipTA type="dark">
  <button className="px-4 py-2 bg-gray-900 text-white rounded">
    Hover me (Dark)
  </button>
  <ToolTipTAWrapper>
    <ToolTipTAContent>This is a dark tooltip</ToolTipTAContent>
    <ToolTipTAArrow />
  </ToolTipTAWrapper>
</ToolTipTA>

// Light Tooltip
<ToolTipTA type="light">
  <button className="px-4 py-2 bg-gray-500 text-white rounded">
    Hover me (Light)
  </button>
  <ToolTipTAWrapper>
    <ToolTipTAContent>This is a light tooltip</ToolTipTAContent>
    <ToolTipTAArrow />
  </ToolTipTAWrapper>
</ToolTipTA>`;

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">ToolTipTA</h1>
        <p className="text-gray-600 mb-4">
          A tooltip component that displays additional information when hovering over an element.
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
        <div className="p-4 border rounded-lg bg-white space-x-6">
          <ToolTipTA type="dark">
            <button className="px-4 py-2 bg-gray-900 text-white rounded">
              Hover me (Dark)
            </button>
            <ToolTipTAWrapper>
              <ToolTipTAContent>This is a dark tooltip</ToolTipTAContent>
              <ToolTipTAArrow />
            </ToolTipTAWrapper>
          </ToolTipTA>
          
          <ToolTipTA type="light">
            <button className="px-4 py-2 bg-gray-500 text-white rounded">
              Hover me (Light)
            </button>
            <ToolTipTAWrapper>
              <ToolTipTAContent>This is a light tooltip</ToolTipTAContent>
              <ToolTipTAArrow />
            </ToolTipTAWrapper>
          </ToolTipTA>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={propsData} />
      </div>
      </div>
    </DocsLayout>
  );
};

export default TooltipComponent;