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
  // ToolTipTA props
  const toolTipTAProps: PropsRow[] = [
    {
      name: 'type',
      type: '"dark" | "light"',
      default: '"dark"',
      description: 'Visual style type of the tooltip (dark or light theme).',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Trigger element and ToolTipTAWrapper component as children.',
    },
  ];

  // ToolTipTAWrapper props
  const toolTipTAWrapperProps: PropsRow[] = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'ToolTipTAContent and ToolTipTAArrow components as children.',
    },
  ];

  // ToolTipTAContent props
  const toolTipTAContentProps: PropsRow[] = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Content to display in the tooltip.',
    },
    {
      name: 'delayDuration',
      type: 'number',
      default: '200',
      description: 'Delay duration in milliseconds before showing tooltip.',
    },
    {
      name: 'side',
      type: '"top" | "right" | "bottom" | "left"',
      default: '"top"',
      description: 'Preferred side of the anchor to render against.',
    },
    {
      name: 'align',
      type: '"start" | "center" | "end"',
      default: '"center"',
      description: 'Preferred alignment against the anchor.',
    },
  ];

  // ToolTipTAArrow props
  const toolTipTAArrowProps: PropsRow[] = [
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional custom CSS classes to apply to the arrow.',
    },
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
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToolTipTA</h3>
          <PropsTable props={toolTipTAProps} />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToolTipTAWrapper</h3>
          <PropsTable props={toolTipTAWrapperProps} />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToolTipTAContent</h3>
          <PropsTable props={toolTipTAContentProps} />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToolTipTAArrow</h3>
          <PropsTable props={toolTipTAArrowProps} />
        </div>
      </div>
      </div>
    </DocsLayout>
  );
};

export default TooltipComponent;