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
          <PropsTable props={props} />
        </div>
      </div>
    </DocsLayout>
  );
};

export default RangeSliderDoc;
