import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { ToggleSwitchTA } from '@true-armor/atoms-ta';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

interface PropsRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

const ToggleSwitchComponent = () => {
  const propsData: PropsRow[] = [
    {
      name: 'checked',
      type: 'boolean',
      description: 'The controlled checked state of the toggle'
    },
    {
      name: 'onChange',
      type: '(checked: boolean) => void',
      description: 'Callback when the toggle state changes'
    },
    {
      name: 'size',
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: 'Size of the toggle switch'
    },
    {
      name: 'label',
      type: 'string',
      description: 'Label text for the toggle switch'
    },
    {
      name: 'description',
      type: 'string',
      description: 'Additional description text'
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the toggle switch is disabled'
    }
  ];

  const importCode = `import { ToggleSwitchTA } from '@true-armor/atoms-ta';`;

  const usageCode = `import { ToggleSwitchTA } from '@true-armor/atoms-ta';
import React from 'react';

export default function ToggleSwitchExample() {
  const [checked, setChecked] = React.useState(false);
  return (
    <ToggleSwitchTA checked={checked} onChange={(v) => setChecked(v)} label="Notifications" />
  );
}`;

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
          <ToggleSwitchTA
            label="Small Toggle"
            size="sm"
          />
          <ToggleSwitchTA
            label="Default Toggle"
            description="With description"
          />
          <ToggleSwitchTA
            label="Large Toggle"
            size="lg"
          />
          <ToggleSwitchTA
            label="Disabled Toggle"
            disabled
          />
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

export default ToggleSwitchComponent;