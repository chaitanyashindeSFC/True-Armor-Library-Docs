import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { RangeSliderTA, RangeSliderTAInput, RangeSliderTATooltip, RangeSliderTAMarks } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const RangeSliderDoc = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const importCode = `import { RangeSliderTA, RangeSliderTAInput, RangeSliderTATooltip, RangeSliderTAMarks } from '@true-armor/ta-atoms2-public';`;
  const usageCode = `const [sliderValue, setSliderValue] = useState(50);

// Controlled mode with value and onChange
<RangeSliderTA 
  min={0} 
  max={100} 
  value={sliderValue} 
  step={1} 
  onChange={(val) => setSliderValue(val)}
>
  <RangeSliderTATooltip />
  <RangeSliderTAInput />
  <RangeSliderTAMarks />
</RangeSliderTA>

// Uncontrolled mode
<RangeSliderTA min={0} max={100} defaultValue={50} step={1}>
  <RangeSliderTATooltip />
  <RangeSliderTAInput />
  <RangeSliderTAMarks />
</RangeSliderTA>`;

  // RangeSliderTA props
  const rangeSliderTAProps = [
    {
      name: 'min',
      type: 'number',
      default: '0',
      description: 'Minimum value of the slider.',
    },
    {
      name: 'max',
      type: 'number',
      default: '100',
      description: 'Maximum value of the slider.',
    },
    {
      name: 'step',
      type: 'number',
      default: '1',
      description: 'Step increment for the slider value.',
    },
    {
      name: 'value',
      type: 'number',
      default: 'undefined',
      description: 'Controlled value of the slider (for controlled mode).',
    },
    {
      name: 'defaultValue',
      type: 'number',
      default: 'undefined',
      description: 'Default value for uncontrolled slider mode.',
    },
    {
      name: 'onChange',
      type: '(value: number) => void',
      default: 'undefined',
      description: 'Callback function triggered when the slider value changes.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'RangeSliderTATooltip, RangeSliderTAInput, and RangeSliderTAMarks components as children.',
    },
  ];

  // RangeSliderTATooltip props
  const rangeSliderTATooltipProps = [
    {
      name: 'show',
      type: 'boolean',
      default: 'true',
      description: 'Whether to show the tooltip displaying the current value.',
    },
  ];

  // RangeSliderTAInput props
  const rangeSliderTAInputProps = [
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the slider input is disabled.',
    },
  ];

  // RangeSliderTAMarks props
  const rangeSliderTAMarksProps = [
    {
      name: 'marks',
      type: 'Array<{ value: number; label: string }>',
      default: 'undefined',
      description: 'Custom marks to display along the slider track.',
    },
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
          <div className="p-4 border rounded-lg bg-white space-y-4">
            <p className="text-sm text-gray-600">Current value: {sliderValue}</p>
            <RangeSliderTA 
              min={0} 
              max={100} 
              value={sliderValue} 
              step={1} 
              onChange={(val) => setSliderValue(val)}
            >
              <RangeSliderTATooltip />
              <RangeSliderTAInput />
              <RangeSliderTAMarks />
            </RangeSliderTA>
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Uncontrolled mode:</p>
              <RangeSliderTA min={0} max={100} defaultValue={50} step={1}>
                <RangeSliderTATooltip />
                <RangeSliderTAInput />
                <RangeSliderTAMarks />
              </RangeSliderTA>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">RangeSliderTA</h3>
            <PropsTable props={rangeSliderTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">RangeSliderTATooltip</h3>
            <PropsTable props={rangeSliderTATooltipProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">RangeSliderTAInput</h3>
            <PropsTable props={rangeSliderTAInputProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">RangeSliderTAMarks</h3>
            <PropsTable props={rangeSliderTAMarksProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default RangeSliderDoc;
