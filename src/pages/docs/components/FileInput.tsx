import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { FileInputTA } from '@chaitanya123123/truearmor-ui-components';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const FileInput = () => {
  const importCode = `import { FileInputTA } from '@chaitanya123123/truearmor-ui-components';`;
  const usageCode = `<FileInputTA />`;

  const props = [
    { name: 'onChange', type: 'function', description: 'File change handler' },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">FileInputTA</h1>
          <p className="text-gray-600 mb-4">Simple file input control.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <FileInputTA />
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

export default FileInput;
