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

  // ToastTA props
  const toastTAProps: PropsRow[] = [
    {
      name: 'data',
      type: 'Array<{ id: number | string; type?: string; message: string }>',
      default: '[]',
      description: 'Array of toast objects to display.',
    },
    {
      name: 'position',
      type: '"top-left" | "top-right" | "bottom-left" | "bottom-right"',
      default: '"top-right"',
      description: 'Position of the toast container on the screen.',
    },
    {
      name: 'duration',
      type: 'number',
      default: '3000',
      description: 'Duration in milliseconds before the toast automatically disappears.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'ToastTAItem components as children.',
    },
  ];

  // ToastTAItem props
  const toastTAItemProps: PropsRow[] = [
    {
      name: 'toast',
      type: '{ id: number | string; type?: string; message: string }',
      default: 'undefined',
      description: 'Toast object containing id, type, and message.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'ToastTAIcon, ToastTAMessage, and ToastTAProgress components as children.',
    },
  ];

  // ToastTAIcon props
  const toastTAIconProps: PropsRow[] = [
    {
      name: 'icon',
      type: 'React.ComponentType',
      default: 'undefined',
      description: 'Optional custom icon component (defaults to type-based icon if not provided).',
    },
  ];

  // ToastTAMessage props
  const toastTAMessageProps: PropsRow[] = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Custom message content (defaults to toast.message if not provided).',
    },
  ];

  // ToastTAProgress props
  const toastTAProgressProps: PropsRow[] = [
    {
      name: 'duration',
      type: 'number',
      default: 'undefined',
      description: 'Duration in milliseconds for the progress bar animation (inherits from ToastTA if not specified).',
    },
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
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToastTA</h3>
          <PropsTable props={toastTAProps} />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToastTAItem</h3>
          <PropsTable props={toastTAItemProps} />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToastTAIcon</h3>
          <PropsTable props={toastTAIconProps} />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToastTAMessage</h3>
          <PropsTable props={toastTAMessageProps} />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToastTAProgress</h3>
          <PropsTable props={toastTAProgressProps} />
        </div>
      </div>
      </div>
    </DocsLayout>
  );
};

export default ToastComponent;