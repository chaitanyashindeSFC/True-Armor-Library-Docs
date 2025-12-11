import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { ModalTA, ModalTAHeader, ModalTABody, ModalTAFooter, ButtonTA } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const Modals = () => {
  const [open, setOpen] = useState(false);

  const importCode = `import { ModalTA, ModalTAHeader, ModalTABody, ModalTAFooter, ButtonTA } from '@true-armor/ta-atoms2-public';`;

  const usageCode = `export default function ModalDemo(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <ButtonTA label="Open Modal" buttonType="primary" onClick={() => setOpen(true)} />
      <ModalTA open={open} onClose={() => setOpen(false)}>
        <ModalTAHeader>Confirm Action</ModalTAHeader>
        <ModalTABody>
          <p>Are you sure you want to proceed?</p>
        </ModalTABody>
        <ModalTAFooter>
          <ButtonTA label="Cancel" buttonType="secondary" onClick={() => setOpen(false)} />
          <ButtonTA label="Confirm" buttonType="primary" onClick={() => setOpen(false)} />
        </ModalTAFooter>
      </ModalTA>
    </>
  );
}`;

  // ModalTA props
  const modalTAProps = [
    {
      name: 'open',
      type: 'boolean',
      default: 'false',
      description: 'Controls whether the modal is visible or hidden.',
    },
    {
      name: 'onClose',
      type: '() => void',
      default: 'undefined',
      description: 'Callback function triggered when the modal should be closed (e.g., clicking overlay or close button).',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'ModalTAHeader, ModalTABody, and ModalTAFooter components as children.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional custom CSS classes to apply to the modal container.',
    },
  ];

  // ModalTAHeader props
  const modalTAHeaderProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Header content, typically the modal title.',
    },
  ];

  // ModalTABody props
  const modalTABodyProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Main content of the modal.',
    },
  ];

  // ModalTAFooter props
  const modalTAFooterProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Footer content, typically action buttons.',
    },
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
            <ButtonTA label="Open Modal" buttonType="primary" onClick={() => setOpen(true)} />
            <ModalTA open={open} onClose={() => setOpen(false)}>
              <ModalTAHeader>Confirm Action</ModalTAHeader>
              <ModalTABody>
                <p>Are you sure you want to proceed?</p>
              </ModalTABody>
              <ModalTAFooter>
                <ButtonTA label="Cancel" buttonType="secondary" onClick={() => setOpen(false)} />
                <ButtonTA label="Confirm" buttonType="primary" onClick={() => setOpen(false)} />
              </ModalTAFooter>
            </ModalTA>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">ModalTA</h3>
            <PropsTable props={modalTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">ModalTAHeader</h3>
            <PropsTable props={modalTAHeaderProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">ModalTABody</h3>
            <PropsTable props={modalTABodyProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">ModalTAFooter</h3>
            <PropsTable props={modalTAFooterProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Modals;
