import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import {
  BreadCrumbTA,
  BreadCrumbItem,
  BreadCrumbSeperator
} from '@true-armor/ta-atoms2-public';
import { Home, ShoppingBag, Package, ChevronRight } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const Breadcrumbs = () => {
  const importCode = `import { BreadCrumbTA, BreadCrumbItem, BreadCrumbSeperator } from '@true-armor/ta-atoms2-public';
import { Home, ChevronRight } from 'lucide-react';`;
  const usageCode = `<BreadCrumbTA>
  <BreadCrumbItem label="Home" icon={Home} href="/" />
  <BreadCrumbSeperator icon={ChevronRight} />
  <BreadCrumbItem label="Products" icon={ShoppingBag} href="/products" />
  <BreadCrumbSeperator icon={ChevronRight} />
  <BreadCrumbItem label="Current" icon={Package} href="#" active />
</BreadCrumbTA>`;

  // BreadCrumbTA props
  const breadcrumbProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Breadcrumb items and separators as children components.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional custom CSS classes to apply to the breadcrumb container.',
    },
  ];

  // BreadCrumbItem props
  const breadcrumbItemProps = [
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Text label displayed for the breadcrumb item.',
    },
    {
      name: 'href',
      type: 'string',
      default: 'undefined',
      description: 'URL link for the breadcrumb item. If not provided, item is rendered as plain text.',
    },
    {
      name: 'icon',
      type: 'React.ComponentType',
      default: 'undefined',
      description: 'Optional icon component to display before the label.',
    },
    {
      name: 'active',
      type: 'boolean',
      default: 'false',
      description: 'Marks the breadcrumb item as active (typically the current page).',
    },
  ];

  // BreadCrumbSeperator props
  const breadcrumbSeparatorProps = [
    {
      name: 'icon',
      type: 'React.ComponentType',
      default: 'undefined',
      description: 'Icon component to display as the separator between breadcrumb items.',
    },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">BreadCrumbTA</h1>
          <p className="text-gray-600 mb-4">Breadcrumb navigation for hierarchical pages.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <BreadCrumbTA>
              <BreadCrumbItem label="Home" icon={Home} href="/" />
              <BreadCrumbSeperator icon={ChevronRight} />
              <BreadCrumbItem label="Products" icon={ShoppingBag} href="/products" />
              <BreadCrumbSeperator icon={ChevronRight} />
              <BreadCrumbItem label="Current" icon={Package} href="#" active />
            </BreadCrumbTA>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">BreadCrumbTA</h3>
            <PropsTable props={breadcrumbProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">BreadCrumbItem</h3>
            <PropsTable props={breadcrumbItemProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">BreadCrumbSeperator</h3>
            <PropsTable props={breadcrumbSeparatorProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Breadcrumbs;
