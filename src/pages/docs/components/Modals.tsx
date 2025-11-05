import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { ModalTA, ButtonTA } from '@chaitanya123123/truearmor-ui-components';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const Modals = () => {
  const [open, setOpen] = useState(false);

  const importCode = `import { ModalTA } from '@chaitanya123123/truearmor-ui-components';`;

  const usageCode = `export default function ModalDemo(){
  const [open,setOpen] = useState(true);
  return <ModalTA open={open} onClose={()=>setOpen(false)} content={{ title: 'Title', body: <p>Body</p> }} />;
}`;

  const props = [
    { name: 'open', type: 'boolean', description: 'Whether modal is open' },
    { name: 'onClose', type: '() => void', description: 'Close handler' },
    { name: 'content', type: 'object', description: 'title/body/footer slots' },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">ModalTA</h1>
          <p className="text-gray-600 mb-4">Simple modal wrapper with content prop.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <ButtonTA label="Open Modal" onClick={() => setOpen(true)} />
            <ModalTA open={open} onClose={() => setOpen(false)} content={{ title: 'Hello', body: <p>This is modal content</p> }} />
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

export default Modals;
