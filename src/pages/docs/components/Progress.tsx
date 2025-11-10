import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { ProgressBarTA } from '@true-armor/atoms-ta';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const ProgressDoc = () => {
  const importCode = `import { ProgressBarTA } from '@true-armor/atoms-ta';`;
  const usageCode = `<ProgressBarTA progress={60} />`;

  const props = [
    { name: 'progress', type: 'number', description: '0-100' },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">ProgressBarTA</h1>
          <p className="text-gray-600 mb-4">Progress indicator.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <ProgressBarTA progress={60} />
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

export default ProgressDoc;
