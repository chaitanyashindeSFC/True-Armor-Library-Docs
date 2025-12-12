import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { StepperTA, StepperTAStep, ButtonTA } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const StepperDoc = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const importCode = `import { StepperTA, StepperTAStep } from '@true-armor/atoms';`;
  const usageCode = `const [currentStep, setCurrentStep] = useState(2);

<StepperTA currentStep={currentStep} color="#173B4E">
  <StepperTAStep label="Step 1" />
  <StepperTAStep label="Step 2" />
  <StepperTAStep label="Step 3" />
  <StepperTAStep label="Step 4" />
</StepperTA>`;

  // StepperTA props
  const stepperTAProps = [
    {
      name: 'currentStep',
      type: 'number',
      default: '0',
      description: 'Current active step index (zero-based).',
    },
    {
      name: 'color',
      type: 'string',
      default: 'undefined',
      description: 'Color theme for the stepper (hex color code, e.g., "#173B4E").',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'StepperTAStep components as children.',
    },
  ];

  // StepperTAStep props
  const stepperTAStepProps = [
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Text label displayed for the step.',
    },
    {
      name: 'description',
      type: 'string',
      default: 'undefined',
      description: 'Optional description text for the step.',
    },
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
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">StepperTA</h3>
            <PropsTable props={stepperTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">StepperTAStep</h3>
            <PropsTable props={stepperTAStepProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default StepperDoc;