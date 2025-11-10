import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { CustomRadioTA } from 'atoms-ta';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const RadioDoc = () => {
  const importCode = `import { CustomRadioTA } from 'atoms-ta';`;
  const usageCode = `<CustomRadioTA label="Option" name="r1" checked={true} onChange={()=>{}} />`;

  const props = [
    { name: 'label', type: 'string', description: 'Label text' },
    { name: 'name', type: 'string', description: 'Input name for form submissions' },
    { name: 'checked', type: 'boolean', description: 'Whether the radio is checked' },
    { name: 'onChange', type: '() => void', description: 'Callback when radio state changes' },
    { name: 'disabled', type: 'boolean', description: 'Whether the radio is disabled', optional: true },
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
          <div className="p-4 border rounded-lg bg-white">
            <CustomRadioTA label="Option" name="r1" checked={true} onChange={()=>{}} />
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

export default RadioDoc;
