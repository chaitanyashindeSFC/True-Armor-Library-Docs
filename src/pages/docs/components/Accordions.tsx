import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { AccordionTA, AccordionPanel, AccordionTitle, AccordionContent } from "@true-armor/ta-atoms2-public";

import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const Accordions = () => {
  const importCode = `import { AccordionTA, AccordionPanel, AccordionTitle, AccordionContent } from '@true-armor/atoms';`;

  const usageCode = `
<AccordionTA>
  <AccordionPanel>
    <AccordionTitle>Section 1</AccordionTitle>
    <AccordionContent>Details for section 1</AccordionContent>
  </AccordionPanel>
</AccordionTA>`;

  // AccordionTA props
  const accordionProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'AccordionPanel components as children.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional custom CSS classes to apply to the accordion container.',
    },
    {
      name: 'allowMultiple',
      type: 'boolean',
      default: 'false',
      description: 'Whether multiple panels can be expanded at the same time.',
    },
  ];

  // AccordionPanel props
  const accordionPanelProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'AccordionTitle and AccordionContent components.',
    },
    {
      name: 'defaultOpen',
      type: 'boolean',
      default: 'false',
      description: 'Whether the panel is open by default.',
    },
  ];

  // AccordionTitle props
  const accordionTitleProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Title text or content to display in the accordion header.',
    },
  ];

  // AccordionContent props
  const accordionContentProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Content to display when the accordion panel is expanded.',
    },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">AccordionTA</h1>
          <p className="text-gray-600 mb-4">Accordion wrapper with panels and content.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <AccordionTA>
              <AccordionPanel>
                <AccordionTitle>Section A</AccordionTitle>
                <AccordionContent>
                  <p>Details for section A</p>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle>Section B</AccordionTitle>
                <AccordionContent>
                  <p>Details for section B</p>
                </AccordionContent>
              </AccordionPanel>
            </AccordionTA>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">AccordionTA</h3>
            <PropsTable props={accordionProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">AccordionPanel</h3>
            <PropsTable props={accordionPanelProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">AccordionTitle</h3>
            <PropsTable props={accordionTitleProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">AccordionContent</h3>
            <PropsTable props={accordionContentProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Accordions;
