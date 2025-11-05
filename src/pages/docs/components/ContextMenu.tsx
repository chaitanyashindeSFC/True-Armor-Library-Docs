import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { ContextMenuTA } from '@chaitanya123123/truearmor-ui-components';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const ContextMenu = () => {
  const importCode = `import { ContextMenuTA } from '@chaitanya123123/truearmor-ui-components';`;
  const usageCode = `<ContextMenuTA type="action" />`;

  const props = [
    { name: 'type', type: 'string', description: 'Type of context menu' },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">ContextMenuTA</h1>
          <p className="text-gray-600 mb-4">Context menu for actions.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <ContextMenuTA type="action" />
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

export default ContextMenu;
