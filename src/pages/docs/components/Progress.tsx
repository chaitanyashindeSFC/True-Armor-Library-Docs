import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { ProgressBarTA, ProgressBarTALabel, ProgressBarTABar, ButtonTA } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const ProgressDoc = () => {
  const [progress, setProgress] = useState(75);
  const importCode = `import { ProgressBarTA, ProgressBarTALabel, ProgressBarTABar } from '@true-armor/atoms';`;
  const usageCode = `const [progress, setProgress] = useState(75);

<ProgressBarTA progress={progress} height="h-2">
  <ProgressBarTALabel />
  <ProgressBarTABar />
</ProgressBarTA>`;

  // ProgressBarTA props
  const progressBarTAProps = [
    {
      name: 'progress',
      type: 'number',
      default: '0',
      description: 'Progress value between 0 and 100.',
    },
    {
      name: 'height',
      type: 'string',
      default: '"h-2"',
      description: 'Height class for the progress bar (e.g., "h-2", "h-4").',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'ProgressBarTALabel and ProgressBarTABar components as children.',
    },
  ];

  // ProgressBarTALabel props
  const progressBarTALabelProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Custom label content (defaults to progress percentage if not provided).',
    },
  ];

  // ProgressBarTABar props
  const progressBarTABarProps = [
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional custom CSS classes to apply to the progress bar.',
    },
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
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">ProgressBarTA</h3>
            <PropsTable props={progressBarTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">ProgressBarTALabel</h3>
            <PropsTable props={progressBarTALabelProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">ProgressBarTABar</h3>
            <PropsTable props={progressBarTABarProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default ProgressDoc;
