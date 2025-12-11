import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { ProgressBarTA, ProgressBarTALabel, ProgressBarTABar, ButtonTA } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const ProgressDoc = () => {
  const [progress, setProgress] = useState(75);
  const importCode = `import { ProgressBarTA, ProgressBarTALabel, ProgressBarTABar } from '@true-armor/ta-atoms2-public';`;
  const usageCode = `const [progress, setProgress] = useState(75);

<ProgressBarTA progress={progress} height="h-2">
  <ProgressBarTALabel />
  <ProgressBarTABar />
</ProgressBarTA>`;

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
          <div className="p-4 border rounded-lg bg-white space-y-4">
            <ProgressBarTA progress={progress} height="h-2">
              <ProgressBarTALabel />
              <ProgressBarTABar />
            </ProgressBarTA>
            <div className="flex gap-2">
              <ButtonTA label="Decrease" buttonType="secondary" onClick={() => setProgress(Math.max(0, progress - 10))} />
              <ButtonTA label="Increase" buttonType="secondary" onClick={() => setProgress(Math.min(100, progress + 10))} />
            </div>
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
