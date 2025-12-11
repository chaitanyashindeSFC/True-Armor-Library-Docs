import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { ToastTA, ToastTAItem, ToastTAIcon, ToastTAMessage, ToastTAProgress, ButtonTA } from '@true-armor/ta-atoms2-public';
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

  const showToast = (type: string) => {
    const id = Date.now();
    setData((prev) => [
      ...prev,
      {
        id,
        type,
        message: type === 'success'
          ? 'Operation completed successfully'
          : 'Something went wrong',
      },
    ]);
    // clear after 3s to mimic typical toast lifecycle
    setTimeout(() => {
      setData((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
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

  const importCode = `import { ToastTA, ToastTAItem, ToastTAIcon, ToastTAMessage, ToastTAProgress } from '@true-armor/ta-atoms2-public';`;

  const usageCode = `const [toasts, setToasts] = useState([]);

const showToast = (type) => {
  setToasts((prev) => [
    ...prev,
    {
      id: Date.now(),
      type,
      message: type === "success"
        ? "Operation completed successfully"
        : "Something went wrong",
    },
  ]);
};

<ToastTA data={toasts} position="top-right" duration={3000}>
  {toasts.map((toast) => (
    <ToastTAItem toast={toast} key={toast.id}>
      <ToastTAIcon />
      <ToastTAMessage />
      <ToastTAProgress />
    </ToastTAItem>
  ))}
</ToastTA>`;

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
          <div className="space-x-2 mb-4">
            <ButtonTA
              label="Show Success Toast"
              buttonType="primary"
              onClick={() => showToast('success')}
            />
            <ButtonTA
              label="Show Error Toast"
              buttonType="secondary"
              onClick={() => showToast('error')}
            />
          </div>
          <ToastTA data={data} position="top-right" duration={3000}>
            {data.map((toast) => (
              <ToastTAItem toast={toast} key={toast.id}>
                <ToastTAIcon />
                <ToastTAMessage />
                <ToastTAProgress />
              </ToastTAItem>
            ))}
          </ToastTA>
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