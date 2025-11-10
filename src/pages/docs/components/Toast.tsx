import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { ToastTA ,ButtonTA} from 'atoms-ta';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';


interface PropsRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

const ToastComponent = () => {
  const [data, setData] = useState<Array<{ id: number | string; type?: string; message: string }>>([]);

  const showToast = () => {
    const id = Date.now();
    setData([{ id, type: 'success', message: 'This is a toast notification' }]);
    // clear after 3s to mimic typical toast lifecycle
    setTimeout(() => setData([]), 3000);
  };

  const propsData: PropsRow[] = [
    {
      name: 'title',
      type: 'string',
      description: 'The title to display in the toast'
    },
    {
      name: 'description',
      type: 'string',
      description: 'The description text for the toast'
    },
    {
      name: 'action',
      type: 'React.ReactNode',
      description: 'Optional action component to show in the toast'
    },
    {
      name: 'variant',
      type: '"default" | "destructive"',
      default: '"default"',
      description: 'The visual style variant of the toast'
    }
  ];

  const importCode = `import { ToastTA } from 'atoms-ta';`;

  const usageCode = `import { ToastTA } from 'atoms-ta';

export default function ToastExample() {
  return (
    <ToastTA data={[{ id: 1, type: 'success', message: 'Saved' }]} />
  );
}`;

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">ToastTA</h1>
        <p className="text-gray-600 mb-4">
          A toast component for displaying brief notifications to users.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Usage</h2>
        <div className="mb-4">
          <CodeBlock code={importCode} language="typescript" />
        </div>
        <div className="mb-4">
          <CodeBlock code={usageCode} language="typescript" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Preview</h2>
        <div className="p-4 border rounded-lg bg-white">
         <div className='h-10'>
           <ToastTA data={data}  top-0 right-0/>
         </div>
          <br />

          <ButtonTA
           
            onClick={showToast}
          >
            Show Toast
          </ButtonTA>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={propsData} />
      </div>
      </div>
    </DocsLayout>
  );
};

export default ToastComponent;