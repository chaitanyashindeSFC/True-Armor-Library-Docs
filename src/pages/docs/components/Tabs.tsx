import DocsLayout from '@/components/DocsLayout';
import { TabsTA } from '@chaitanya123123/truearmor-ui-components';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

interface PropsRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

const tabs = [
  {
    title: 'Tab 1',
    content: 'Content for Tab 1'
  },
  {
    title: 'Tab 2',
    content: 'Content for Tab 2'
  }
];

const TabsComponent = () => {
  const propsData: PropsRow[] = [
    {
      name: 'tabs',
      type: 'TabItem[]',
      default: '[]',
      description: 'Array of tab items containing title and content'
    },
    {
      name: 'variant',
      type: '"default" | "pills" | "underline"',
      default: '"default"',
      description: 'Visual style variant of the tabs'
    },
    {
      name: 'color',
      type: 'string',
      default: '"primary"',
      description: 'Color theme for the active tab indicator'
    }
  ];

  const importCode = `import { TabsTA } from '@chaitanya123123/truearmor-ui-components';`;

  const usageCode = `import { TabsTA } from '@chaitanya123123/truearmor-ui-components';

const tabs = [
  { title: 'One', content: 'First' },
  { title: 'Two', content: 'Second' }
];

export default function TabsExample() {
  return <TabsTA tabs={tabs} />;
}`;

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">TabsTA</h1>
          <p className="text-gray-600 mb-4">
            A tabbed interface component that organizes content into separate views that can be switched between.
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
            <TabsTA tabs={tabs} />
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

export default TabsComponent;