import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { TabsTA, TabsTAList, TabsTAItem, TabsTAPanel } from '@true-armor/ta-atoms2-public';
import { FolderIcon, ArchiveIcon } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

interface PropsRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

const TabsComponent = () => {
  // TabsTA props
  const tabsTAProps: PropsRow[] = [
    {
      name: 'variant',
      type: '"primary" | "tertiary"',
      default: '"primary"',
      description: 'Visual style variant of the tabs.',
    },
    {
      name: 'color',
      type: 'string',
      default: 'undefined',
      description: 'Color theme for the active tab indicator (hex color code).',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'TabsTAList and TabsTAPanel components as children.',
    },
  ];

  // TabsTAList props
  const tabsTAListProps: PropsRow[] = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'TabsTAItem components as children.',
    },
  ];

  // TabsTAItem props
  const tabsTAItemProps: PropsRow[] = [
    {
      name: 'index',
      type: 'number',
      default: 'undefined',
      description: 'Zero-based index of the tab item (must match corresponding panel index).',
    },
    {
      name: 'title',
      type: 'string',
      default: 'undefined',
      description: 'Text label displayed in the tab.',
    },
    {
      name: 'icon',
      type: 'React.ComponentType',
      default: 'undefined',
      description: 'Optional icon component to display in the tab.',
    },
  ];

  // TabsTAPanel props
  const tabsTAPanelProps: PropsRow[] = [
    {
      name: 'index',
      type: 'number',
      default: 'undefined',
      description: 'Zero-based index of the panel (must match corresponding tab item index).',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Content to display when this panel is active.',
    },
  ];

  const importCode = `import { TabsTA, TabsTAList, TabsTAItem, TabsTAPanel } from '@true-armor/ta-atoms2-public';
import { FolderIcon, ArchiveIcon } from 'lucide-react';`;

  const usageCode = `<TabsTA variant="tertiary" color="#173B4E">
  <TabsTAList>
    <TabsTAItem index={0} title="My Files" icon={FolderIcon} />
    <TabsTAItem index={1} title="Archived" icon={ArchiveIcon} />
  </TabsTAList>
  <TabsTAPanel index={0}>Content for My Files</TabsTAPanel>
  <TabsTAPanel index={1}>Content for Archived</TabsTAPanel>
</TabsTA>

<TabsTA variant="primary">
  <TabsTAList>
    <TabsTAItem index={0} title="My Files" />
    <TabsTAItem index={1} title="Archived" />
  </TabsTAList>
  <TabsTAPanel index={0}>Content for My Files</TabsTAPanel>
  <TabsTAPanel index={1}>Content for Archived</TabsTAPanel>
</TabsTA>`;

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
          <div className="p-4 border rounded-lg bg-white space-y-6">
            <TabsTA variant="tertiary" color="#173B4E">
              <TabsTAList>
                <TabsTAItem index={0} title="My Files" icon={FolderIcon as React.ComponentType<{ size?: number; className?: string }>} />
                <TabsTAItem index={1} title="Archived" icon={ArchiveIcon as React.ComponentType<{ size?: number; className?: string }>} />
              </TabsTAList>
              <TabsTAPanel index={0}>Content for My Files</TabsTAPanel>
              <TabsTAPanel index={1}>Content for Archived</TabsTAPanel>
            </TabsTA>
            <TabsTA variant="primary">
              <TabsTAList>
                <TabsTAItem index={0} title="My Files" />
                <TabsTAItem index={1} title="Archived" />
              </TabsTAList>
              <TabsTAPanel index={0}>Content for My Files</TabsTAPanel>
              <TabsTAPanel index={1}>Content for Archived</TabsTAPanel>
            </TabsTA>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">TabsTA</h3>
            <PropsTable props={tabsTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">TabsTAList</h3>
            <PropsTable props={tabsTAListProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">TabsTAItem</h3>
            <PropsTable props={tabsTAItemProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">TabsTAPanel</h3>
            <PropsTable props={tabsTAPanelProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default TabsComponent;