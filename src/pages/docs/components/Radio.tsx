import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { CustomRadioTA, CustomRadioTAInput, CustomRadioTALabel } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const RadioDoc = () => {
  const [selected, setSelected] = useState("option1");
  const importCode = `import { CustomRadioTA, CustomRadioTAInput, CustomRadioTALabel } from '@true-armor/ta-atoms2-public';`;
  const usageCode = `<CustomRadioTA
  name="demo-radio"
  checked={selected === "option1"}
  onChange={() => setSelected("option1")}
>
  <CustomRadioTAInput />
  <CustomRadioTALabel>Option 1</CustomRadioTALabel>
</CustomRadioTA>

<CustomRadioTA
  name="demo-radio"
  checked={selected === "option2"}
  onChange={() => setSelected("option2")}
>
  <CustomRadioTAInput />
  <CustomRadioTALabel>Option 2</CustomRadioTALabel>
</CustomRadioTA>`;

  // CustomRadioTA props
  const customRadioTAProps = [
    {
      name: 'name',
      type: 'string',
      default: 'undefined',
      description: 'Input name for form submissions (all radio buttons in a group should share the same name).',
    },
    {
      name: 'checked',
      type: 'boolean',
      default: 'false',
      description: 'Controlled checked state of the radio button.',
    },
    {
      name: 'onChange',
      type: '() => void',
      default: 'undefined',
      description: 'Callback function triggered when the radio button state changes.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the radio button is disabled.',
    },
    {
      name: 'value',
      type: 'string',
      default: 'undefined',
      description: 'Value of the radio button (used for form submissions).',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'CustomRadioTAInput and CustomRadioTALabel components as children.',
    },
  ];

  // CustomRadioTAInput props
  const customRadioTAInputProps = [
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the radio input is disabled (inherited from parent if not specified).',
    },
  ];

  // CustomRadioTALabel props
  const customRadioTALabelProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Label text or content displayed next to the radio button.',
    },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">CustomRadioTA</h1>
          <p className="text-gray-600 mb-4">Custom radio control.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white space-y-2">
            <CustomRadioTA
              name="demo-radio"
              checked={selected === "option1"}
              onChange={() => setSelected("option1")}
            >
              <CustomRadioTAInput />
              <CustomRadioTALabel>Option 1</CustomRadioTALabel>
            </CustomRadioTA>
            <CustomRadioTA
              name="demo-radio"
              checked={selected === "option2"}
              onChange={() => setSelected("option2")}
            >
              <CustomRadioTAInput />
              <CustomRadioTALabel>Option 2</CustomRadioTALabel>
            </CustomRadioTA>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CustomRadioTA</h3>
            <PropsTable props={customRadioTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CustomRadioTAInput</h3>
            <PropsTable props={customRadioTAInputProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CustomRadioTALabel</h3>
            <PropsTable props={customRadioTALabelProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default RadioDoc;
