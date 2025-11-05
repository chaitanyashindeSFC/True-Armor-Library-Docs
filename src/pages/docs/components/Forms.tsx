import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { InputTA, CheckboxTA, FileInputTA, DatePickerTA } from '@chaitanya123123/truearmor-ui-components';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const Forms = () => {
  const [name, setName] = useState('');
  const [agree, setAgree] = useState(false);

  const importCode = `import { InputTA, CheckboxTA, FileInputTA, DatePickerTA } from '@chaitanya123123/truearmor-ui-components';`;

  const usageCode = `export default function FormDemo(){
  const [name,setName] = useState('');
  return (
    <div>
      <InputTA id="name" label="Name" value={name} onChange={(e)=>setName(e.target.value)} />
      <CheckboxTA label="Agree" checked={true} onChange={()=>{}} />
    </div>
  );
}`;

  const props = [
    { name: 'InputTA', type: 'id,label,value,onChange', description: 'Basic input field' },
    { name: 'CheckboxTA', type: 'label,checked,onChange', description: 'Checkbox control' },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Forms</h1>
          <p className="text-gray-600 mb-4">The package provides input primitives (InputTA, CheckboxTA, FileInputTA, DatePickerTA). There is no single `FormTA` composite — compose primitives to build forms.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white space-y-4">
            <InputTA id="name" label="Name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            <CheckboxTA label="Agree to terms" checked={agree} onChange={(v:boolean)=>setAgree(v)} />
            <FileInputTA />
            <DatePickerTA />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Notes</h2>
          <p className="text-muted-foreground">If you need a higher-level Form component, compose these primitives or use a form library (react-hook-form) with the provided inputs.</p>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Forms;
