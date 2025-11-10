import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { AccordionTA, AccordionPanel, AccordionTitle, AccordionContent } from 'atoms-ta';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const Accordions = () => {
  const importCode = `import { AccordionTA, AccordionPanel, AccordionTitle, AccordionContent } from 'atoms-ta';`;

  const usageCode = `
<AccordionTA>
  <AccordionPanel>
    <AccordionTitle>Section 1</AccordionTitle>
    <AccordionContent>Details for section 1</AccordionContent>
  </AccordionPanel>
</AccordionTA>`;

  const props = [
    { name: 'children', type: 'React.ReactNode', description: 'Accordion panels' },
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
          <PropsTable props={props} />
        </div>
      </div>
    </DocsLayout>
  );
};

export default Accordions;
