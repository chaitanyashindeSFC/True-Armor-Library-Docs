import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { TableTA } from '@true-armor/atoms-ta';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const TableDoc = () => {
  const data = [
    { id: 1, name: 'John', age: 30, city: 'New York' },
    { id: 2, name: 'Jane', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob', age: 35, city: 'Chicago' },
  ];

  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
    { key: 'city', header: 'City' },  
  ];

  const importCode = `import { TableTA } from '@true-armor/atoms-ta';`;
  const usageCode = `const data = [
  { id: 1, name: 'John', age: 30, city: 'New York' },
  { id: 2, name: 'Jane', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Bob', age: 35, city: 'Chicago' },
];

const columns = [
  { key: 'name', header: 'Name' },
  { key: 'age', header: 'Age' },
  { key: 'city', header: 'City' },
];

<TableTA 
  data={data}
  columns={columns}
  onRowClick={(row) => console.log(row)}
/>`;

  const props = [
    { name: 'data', type: 'any[]', description: 'Array of data objects to display' },
    { name: 'columns', type: 'Column[]', description: 'Array of column configurations. Each column must have key and header properties.' },
    { name: 'onRowClick', type: '(row: any) => void', description: 'Callback when a row is clicked', optional: true },
    { name: 'striped', type: 'boolean', description: 'Whether to show striped rows', optional: true },
    { name: 'hoverable', type: 'boolean', description: 'Whether to show hover effect on rows', optional: true },
    { name: 'className', type: 'string', description: 'Additional CSS classes for the table', optional: true },
  ];

  const columnProps = [
    { name: 'key', type: 'string', description: 'The key in data objects that this column displays' },
    { name: 'header', type: 'string', description: 'The header text for this column' },
    { name: 'width', type: 'string', description: 'CSS width value for the column', optional: true },
    { name: 'render', type: '(value: any, row: any) => React.ReactNode', description: 'Custom render function for cell content', optional: true },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">TableTA</h1>
          <p className="text-gray-600 mb-4">A flexible table component for displaying data in rows and columns.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <TableTA 
              data={data}
              columns={columns}
              onRowClick={(row) => console.log(row)}
              hoverable
              striped
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Component Props</h2>
          <PropsTable props={props} />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Column Configuration</h2>
          <PropsTable props={columnProps} />
        </div>
      </div>
    </DocsLayout>
  );
};

export default TableDoc;