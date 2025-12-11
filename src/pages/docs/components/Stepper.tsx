import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { StepperTA, StepperTAStep, ButtonTA } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const StepperDoc = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const importCode = `import { StepperTA, StepperTAStep } from '@true-armor/ta-atoms2-public';`;
  const usageCode = `const [currentStep, setCurrentStep] = useState(2);

<StepperTA currentStep={currentStep} color="#173B4E">
  <StepperTAStep label="Step 1" />
  <StepperTAStep label="Step 2" />
  <StepperTAStep label="Step 3" />
  <StepperTAStep label="Step 4" />
</StepperTA>`;

  const props = [
    { name: 'currentStep', type: 'number', description: 'Current active step index' },
    { name: 'color', type: 'string', description: 'Color theme for the stepper' },
    { name: 'children', type: 'StepperTAStep[]', description: 'Step components' },
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
          <div className="p-4 border rounded-lg bg-white space-y-4">
            <StepperTA currentStep={currentStep} color="#173B4E">
              <StepperTAStep label="Step 1" />
              <StepperTAStep label="Step 2" />
              <StepperTAStep label="Step 3" />
              <StepperTAStep label="Step 4" />
            </StepperTA>
            <div className="flex gap-2">
              <ButtonTA 
                label="Previous" 
                buttonType="secondary" 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} 
              />
              <ButtonTA 
                label="Next" 
                buttonType="secondary" 
                onClick={() => setCurrentStep(Math.min(3, currentStep + 1))} 
              />
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