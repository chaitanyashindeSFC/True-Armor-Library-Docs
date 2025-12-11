import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { DropDownTA } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';
import { useState } from 'react';

const Dropdown = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" }
  ];
  const importCode = `import { DropDownTA, DropDownTATrigger, DropDownTASearch, DropDownTAList } from '@true-armor/ta-atoms2-public';`;
  const usageCode = `const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

<DropDownTA
  items={users}
  placeholder="Select user"
  getItemLabel={(item) => item.name}
>
  <DropDownTATrigger />
  <DropDownTASearch />
  <DropDownTAList renderItem={(item) => (
    <div>
      <span>{item.name}</span>
      <span className="text-gray-500">({item.email})</span>
    </div>
  )} />
</DropDownTA>`;

  const props = [
    { name: 'items', type: 'any[]', description: 'Items array' },
  ];
  const teamMembers = [
    {
      id: 1,
      name: "Leslie Alexander",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      isYou: true,
    },
    {
      id: 2,
      name: "Michael Gough",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Lana Byrd",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "Jessica Lee",
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
      id: 5,
      name: "Thomas Lean",
      avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
      id: 6,
      name: "Jese Leos",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    },
  ];

  return (
    
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">DropDownTA</h1>
          <p className="text-gray-600 mb-4">Dropdown selector with optional search.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
          <DropDownTA
          items={teamMembers}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedItem={selectedUser}
          setSelectedItem={setSelectedUser}
          placeholder="Select a team member or yourself"
          getItemLabel={(item) => item.name}
          showSearch={true}
        />
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

export default Dropdown;
