import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { InputTA } from '@chaitanya123123/truearmor-ui-components';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const InputDoc = () => {
  const [value, setValue] = useState('');
  const importCode = `import { InputTA } from '@chaitanya123123/truearmor-ui-components';`;
  const usageCode = `<InputTA id="name" label="Name" value={value} onChange={(e)=>setValue(e.target.value)} />`;

  const props = [
    { name: 'id', type: 'string', description: 'Input id' },
    { name: 'label', type: 'string', description: 'Label text' },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">InputTA</h1>
          <p className="text-gray-600 mb-4">Text input primitive.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <InputTA id="name" label="Name" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)} />
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

export default InputDoc;
