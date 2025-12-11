import React, { useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { TableTA } from "@true-armor/ta-atoms2-public";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";

const TableDoc = () => {
  const tableData = [
    {
      agentName: "Customer Support BOT",
      provider: "Open AI",
      authMethod: "API Key",
      status: "ACTIVE",
      dateAdded: "15/09/2025",
      lastTested: "15/09/2025",
      actions: "⋯",
    },
    {
      agentName: "Content Generator",
      provider: "Hugging Face",
      authMethod: "OAuth2",
      status: "ACTIVE",
      dateAdded: "14/09/2025",
      lastTested: "14/09/2025",
      actions: "⋯",
    },
    {
      agentName: "Code Assistant",
      provider: "AWS Bedrock",
      authMethod: "JWT",
      status: "FAILED",
      dateAdded: "13/09/2025",
      lastTested: "13/09/2025",
      actions: "⋯",
    },
    {
      agentName: "Data Processor",
      provider: "Google AI",
      authMethod: "API Key",
      status: "INACTIVE",
      dateAdded: "12/09/2025",
      lastTested: "12/09/2025",
      actions: "⋯",
    },
  ];
  const [page, setPage] = useState(0);
  const rowsPerPage = 3;

  // Paginate the data
  const paginatedData = tableData.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  const columns = [
    { key: "agentName", label: "Agent Name", header: "Agent Name" },
    { key: "provider", label: "Provider", header: "Provider" },
    { key: "authMethod", label: "Auth Method", header: "Auth Method" },
    { key: "status", label: "Status", header: "Status" },
    { key: "dateAdded", label: "Date Added", header: "Date Added" },
    { key: "lastTested", label: "Last Tested", header: "Last Tested" },
    { key: "actions", label: "Action", header: "Action" },
  ];

  const importCode = `import { TableTA } from '@true-armor/ta-atoms2-public';`;
  const usageCode = `const tableData = [
    {
      agentName: "Customer Support BOT",
      provider: "Open AI",
      authMethod: "API Key",
      status: "ACTIVE",
      dateAdded: "15/09/2025",
      lastTested: "15/09/2025",
      actions: "⋯",
    },
    {
      agentName: "Content Generator",
      provider: "Hugging Face",
      authMethod: "OAuth2",
      status: "ACTIVE",
      dateAdded: "14/09/2025",
      lastTested: "14/09/2025",
      actions: "⋯",
    },
    {
      agentName: "Code Assistant",
      provider: "AWS Bedrock",
      authMethod: "JWT",
      status: "FAILED",
      dateAdded: "13/09/2025",
      lastTested: "13/09/2025",
      actions: "⋯",
    },
    {
      agentName: "Data Processor",
      provider: "Google AI",
      authMethod: "API Key",
      status: "INACTIVE",
      dateAdded: "12/09/2025",
      lastTested: "12/09/2025",
      actions: "⋯",
    },
  ];
  const [page, setPage] = useState(0);
  const rowsPerPage = 3;

  // Paginate the data
  const paginatedData = tableData.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  const columns = [
    { key: "agentName", label: "Agent Name", header: "Agent Name" },
    { key: "provider", label: "Provider", header: "Provider" },
    { key: "authMethod", label: "Auth Method", header: "Auth Method" },
    { key: "status", label: "Status", header: "Status" },
    { key: "dateAdded", label: "Date Added", header: "Date Added" },
    { key: "lastTested", label: "Last Tested", header: "Last Tested" },
    { key: "actions", label: "Action", header: "Action" },
  ];
  
  <section>
              <TableTA
                columns={columns}
                tableData={paginatedData}
                length={tableData.length}
                page={page}
                setPage={setPage}
                rowsCount={rowsPerPage}
              />
  </section>
  `;

const generateTablePropsFromData = (data: any[]) => {
  if (!data.length) return [];

  return Object.keys(data[0]).map((key) => ({
    name: key,
    type: typeof data[0][key],
    default: "—",
    description: "—",
  }));
};

const tableProps = generateTablePropsFromData(tableData);
const generateColumnProps = (columns) => {
  return columns.map((col) => ({
    name: col.key,
    type: "string",
    default: col.header || col.label || "—",
    description: `Column for ${col.label || col.header}`,
  }));
};

const columnProps = generateColumnProps(columns);

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">TableTA</h1>
          <p className="text-gray-600 mb-4">
            A flexible table component for displaying data in rows and columns.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4">
            <CodeBlock code={importCode} language="typescript" />
          </div>
          <div className="mb-4">
            <CodeBlock code={usageCode} language="tsx" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <section>
              <TableTA
                columns={columns}
                tableData={paginatedData}
                length={tableData.length}
                page={page}
                setPage={setPage}
                rowsCount={rowsPerPage}
              />
            </section>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Component Props</h2>
          <PropsTable props={tableProps} />
        </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Column Configuration</h3>
            <PropsTable props={columnProps} />
          </div>
        </div>
  
    </DocsLayout>
  );
};

export default TableDoc;