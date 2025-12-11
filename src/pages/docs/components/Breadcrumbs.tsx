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

  const props = [
    { 
      name: 'items', 
      type: 'Array<{ label: string; href?: string; active?: boolean }>', 
      description: 'Array of breadcrumb items with label, optional href and active state' 
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
          <PropsTable props={props} />
        </div>
      </div>
    </DocsLayout>
  );
};

export default Breadcrumbs;
