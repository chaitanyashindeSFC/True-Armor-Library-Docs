import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { StepperTA } from 'atoms-ta';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';
import { ButtonTA } from 'atoms-ta';
const StepperDoc = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ['Account', 'Details', 'Review'];

  const importCode = `import { StepperTA } from 'atoms-ta';`;
  const usageCode = `const [currentStep, setCurrentStep] = useState(1);
const steps = ['Account', 'Details', 'Review'];

<StepperTA 
  steps={steps}
  currentStep={currentStep}
  onStepClick={setCurrentStep}
/>`;

  const props = [
    { name: 'steps', type: 'string[]', description: 'Array of step titles' },
    { name: 'currentStep', type: 'number', description: 'Current active step (1-based index)' },
    { name: 'onStepClick', type: '(step: number) => void', description: 'Callback when a step is clicked' },
    { name: 'disabled', type: 'boolean', description: 'Whether the stepper is disabled', optional: true },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">StepperTA</h1>
          <p className="text-gray-600 mb-4">A component for displaying progress through numbered steps.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <StepperTA 
              steps={steps}
              currentStep={currentStep}
              onStepClick={setCurrentStep}
            />
            <div className="mt-4 space-x-2 flex">
              <ButtonTA 
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              
                disabled={currentStep === 1}
              >
                Previous
              </ButtonTA>
              <ButtonTA 
                onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
              
                disabled={currentStep === steps.length}
              >
                Next
              </ButtonTA>
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

export default StepperDoc;