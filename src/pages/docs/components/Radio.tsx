import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
// @ts-expect-error - These components should be available according to the API documentation
import { CustomRadioTA, CustomRadioTAInput, CustomRadioTALabel } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const RadioDoc = () => {
  const [selected, setSelected] = useState("option1");
  const importCode = `import { CustomRadioTA, CustomRadioTAInput, CustomRadioTALabel } from '@true-armor/atoms';
import { useState } from 'react';`;
  
  const simpleUsageCode = `// Simple Usage (Recommended)
const [selected, setSelected] = useState("option1");

<CustomRadioTA
  name="options"
  label="Option 1"
  checked={selected === "option1"}
  onChange={() => setSelected("option1")}
/>

<CustomRadioTA
  name="options"
  label="Option 2"
  checked={selected === "option2"}
  onChange={() => setSelected("option2")}
/>`;

  const compoundUsageCode = `// Compound Component Pattern
const [selected, setSelected] = useState("option1");

<label className="flex items-center gap-2 cursor-pointer">
  <CustomRadioTAInput
    name="options"
    checked={selected === "option1"}
    onChange={() => setSelected("option1")}
  />
  <CustomRadioTALabel checked={selected === "option1"}>
    Option 1
  </CustomRadioTALabel>
</label>

<label className="flex items-center gap-2 cursor-pointer">
  <CustomRadioTAInput
    name="options"
    checked={selected === "option2"}
    onChange={() => setSelected("option2")}
  />
  <CustomRadioTALabel checked={selected === "option2"}>
    Option 2
  </CustomRadioTALabel>
</label>`;

  // CustomRadioTA props
  const customRadioTAProps = [
    {
      name: 'label',
      type: 'string',
      default: '"Default radio"',
      description: 'Radio button label.',
    },
    {
      name: 'name',
      type: 'string',
      default: '"custom-radio"',
      description: 'Radio group name (all radio buttons in a group should share the same name).',
    },
    {
      name: 'checked',
      type: 'boolean',
      default: 'false',
      description: 'Checked state.',
    },
    {
      name: 'onChange',
      type: '() => void',
      default: '() => {}',
      description: 'Change handler.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional CSS classes.',
    },
  ];

  // CustomRadioTAInput props
  const customRadioTAInputProps = [
    {
      name: 'checked',
      type: 'boolean',
      default: 'false',
      description: 'Checked state.',
    },
    {
      name: 'onChange',
      type: '() => void',
      default: '() => {}',
      description: 'Change handler.',
    },
    {
      name: 'name',
      type: 'string',
      default: '""',
      description: 'Radio group name.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional CSS classes.',
    },
  ];

  // CustomRadioTALabel props
  const customRadioTALabelProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Label text or content (required).',
    },
    {
      name: 'checked',
      type: 'boolean',
      default: 'false',
      description: 'Checked state (affects text color).',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional CSS classes.',
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
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Simple Usage (Recommended)</h3>
            <div className="mb-4"><CodeBlock code={simpleUsageCode} language="tsx" /></div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Compound Component Pattern</h3>
            <div className="mb-4"><CodeBlock code={compoundUsageCode} language="tsx" /></div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Simple Usage</h3>
              <div className="space-y-2">
                <CustomRadioTA
                  name="options"
                  label="Option 1"
                  checked={selected === "option1"}
                  onChange={() => setSelected("option1")}
                />
                <CustomRadioTA
                  name="options"
                  label="Option 2"
                  checked={selected === "option2"}
                  onChange={() => setSelected("option2")}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Compound Pattern</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <CustomRadioTAInput
                    name="compound-options"
                    checked={selected === "option1"}
                    onChange={() => setSelected("option1")}
                  />
                  <CustomRadioTALabel checked={selected === "option1"}>
                    Option 1
                  </CustomRadioTALabel>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <CustomRadioTAInput
                    name="compound-options"
                    checked={selected === "option2"}
                    onChange={() => setSelected("option2")}
                  />
                  <CustomRadioTALabel checked={selected === "option2"}>
                    Option 2
                  </CustomRadioTALabel>
                </label>
              </div>
            </div>
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
