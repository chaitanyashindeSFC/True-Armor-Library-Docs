import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { RangeSliderTA } from '@true-armor/atoms-ta';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const RangeSliderDoc = () => {
  const importCode = `import { RangeSliderTA } from '@true-armor/atoms-ta';`;
  const usageCode = `<RangeSliderTA defaultValue={50} />`;

  const props = [
    { name: 'defaultValue', type: 'number', description: 'Default value' },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">RangeSliderTA</h1>
          <p className="text-gray-600 mb-4">Range slider component.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <RangeSliderTA defaultValue={50} max={100} />
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

export default RangeSliderDoc;
