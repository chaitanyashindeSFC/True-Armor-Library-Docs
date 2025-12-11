import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import {  DropDownTA,
  DropDownTATrigger,
  DropDownTAContent,
  DropDownTASearch,
  DropDownTAItem,
  DropDownTAEmpty, } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';
import { useState } from 'react';

const Dropdown = () => {

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

  // DropDownTA props
 const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

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
  const filteredItems = teamMembers.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (item) => {
    setSelectedUser(item);
    setIsOpen(false);
    setSearchTerm("");
  };

  // DropDownTATrigger props
  const dropDownTATriggerProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Custom trigger content (defaults to selected item label if not provided).',
    },
  ];

  // DropDownTASearch props
  const dropDownTASearchProps = [
    {
      name: 'placeholder',
      type: 'string',
      default: '"Search..."',
      description: 'Placeholder text for the search input.',
    },
  ];

  // DropDownTAList props
  const dropDownTAListProps = [
    {
      name: 'renderItem',
      type: '(item: any) => React.ReactNode',
      default: 'undefined',
      description: 'Custom render function for each dropdown item.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Custom list content (defaults to rendering items if not provided).',
    },
  ];
const dropDownTAProps = [
    {
      name: 'items',
      type: 'any[]',
      default: '[]',
      description: 'Array of items to display in the dropdown.',
    },
    {
      name: 'isOpen',
      type: 'boolean',
      default: 'false',
      description: 'Controlled state for whether the dropdown is open.',
    },
    {
      name: 'setIsOpen',
      type: '(isOpen: boolean) => void',
      default: 'undefined',
      description: 'Callback function to control the open state.',
    },
    {
      name: 'searchTerm',
      type: 'string',
      default: '""',
      description: 'Current search/filter term for the dropdown items.',
    },
    {
      name: 'setSearchTerm',
      type: '(term: string) => void',
      default: 'undefined',
      description: 'Callback function to update the search term.',
    },
    {
      name: 'selectedItem',
      type: 'any',
      default: 'undefined',
      description: 'Currently selected item from the dropdown.',
    },
    {
      name: 'setSelectedItem',
      type: '(item: any) => void',
      default: 'undefined',
      description: 'Callback function triggered when an item is selected.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: '"Select..."',
      description: 'Placeholder text displayed when no item is selected.',
    },
    {
      name: 'getItemLabel',
      type: '(item: any) => string',
      default: 'undefined',
      description: 'Function to extract the label from an item object.',
    },
    {
      name: 'showSearch',
      type: 'boolean',
      default: 'false',
      description: 'Whether to show the search input field.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'DropDownTATrigger, DropDownTASearch, and DropDownTAList components as children.',
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
         <section className="space-y-4">
        <DropDownTA isOpen={isOpen} onToggle={setIsOpen}>
          <DropDownTATrigger
            selectedItem={selectedUser}
            placeholder="Select a team member"
            getItemLabel={(item) => item.name}
          />

          <DropDownTAContent>
            <DropDownTASearch
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            {filteredItems.map((item) => (
              <DropDownTAItem
                key={item.id}
                item={item}
                getItemLabel={(item) => item.name}
                onSelect={handleSelect}
              />
            ))}

            {filteredItems.length === 0 && (
              <DropDownTAEmpty message="No results" />
            )}
          </DropDownTAContent>
        </DropDownTA>
      </section>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          {/* <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DropDownTA</h3>
            <PropsTable props={dropDownTAProps} />
          </div> */}

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DropDownTATrigger</h3>
            <PropsTable props={dropDownTATriggerProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DropDownTASearch</h3>
            <PropsTable props={dropDownTASearchProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DropDownTAList</h3>
            <PropsTable props={dropDownTAListProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Dropdown;
