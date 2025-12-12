import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { ToggleSwitchTA, ToggleSwitchTAControl, ToggleSwitchTALabel, ToggleSwitchTADescription } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

interface PropsRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

const ToggleSwitchComponent = () => {
  // ToggleSwitchTA props
  const toggleSwitchTAProps: PropsRow[] = [
    {
      name: 'checked',
      type: 'boolean',
      default: 'false',
      description: 'Controlled checked state of the toggle switch.',
    },
    {
      name: 'onChange',
      type: '(checked: boolean) => void',
      default: 'undefined',
      description: 'Callback function triggered when the toggle state changes.',
    },
    {
      name: 'size',
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: 'Size variant of the toggle switch.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the toggle switch is disabled.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'ToggleSwitchTAControl, ToggleSwitchTALabel, and ToggleSwitchTADescription components as children.',
    },
  ];

  // ToggleSwitchTAControl props
  const toggleSwitchTAControlProps: PropsRow[] = [
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the toggle control is disabled (inherited from parent if not specified).',
    },
  ];

  // ToggleSwitchTALabel props
  const toggleSwitchTALabelProps: PropsRow[] = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Label text or content displayed next to the toggle switch.',
    },
  ];

  // ToggleSwitchTADescription props
  const toggleSwitchTADescriptionProps: PropsRow[] = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Description text or content displayed below the label.',
    },
  ];

  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const importCode = `import { ToggleSwitchTA, ToggleSwitchTAControl, ToggleSwitchTALabel, ToggleSwitchTADescription } from '@true-armor/atoms';`;

  const usageCode = `const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);

<ToggleSwitchTA checked={isSwitchEnabled} onChange={setIsSwitchEnabled} size="md">
  <ToggleSwitchTAControl />
  <div>
    <ToggleSwitchTALabel>Enable notifications</ToggleSwitchTALabel>
    <ToggleSwitchTADescription>Receive email notifications</ToggleSwitchTADescription>
  </div>
</ToggleSwitchTA>`;

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">ToggleSwitchTA</h1>
        <p className="text-gray-600 mb-4">
          A toggle switch component for binary choices.
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
        <div className="p-4 border rounded-lg bg-white space-y-4">
          <ToggleSwitchTA checked={isSwitchEnabled} onChange={setIsSwitchEnabled} size="md">
            <ToggleSwitchTAControl />
            <div>
              <ToggleSwitchTALabel>Enable notifications</ToggleSwitchTALabel>
              <ToggleSwitchTADescription>Receive email notifications</ToggleSwitchTADescription>
            </div>
          </ToggleSwitchTA>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToggleSwitchTA</h3>
          <PropsTable props={toggleSwitchTAProps} />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToggleSwitchTAControl</h3>
          <PropsTable props={toggleSwitchTAControlProps} />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToggleSwitchTALabel</h3>
          <PropsTable props={toggleSwitchTALabelProps} />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">ToggleSwitchTADescription</h3>
          <PropsTable props={toggleSwitchTADescriptionProps} />
        </div>
      </div>
      </div>
    </DocsLayout>
  );
};

export default ToggleSwitchComponent;