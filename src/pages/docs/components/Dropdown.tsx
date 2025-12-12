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

  const importCode = `import { 
  DropDownTA,
  DropDownTATrigger,
  DropDownTAContent,
  DropDownTASearch,
  DropDownTAItem,
  DropDownTAEmpty
} from "@true-armor/atoms";
import { useState } from "react";`;
  
  const usageCode = `const [isOpen, setIsOpen] = useState(false);
const [searchTerm, setSearchTerm] = useState("");
const [selectedUser, setSelectedUser] = useState(null);

const teamMembers = [
  { 
    id: 1, 
    name: "Leslie Alexander", 
    avatar: "https://randomuser.me/api/portraits/women/44.jpg", 
    isYou: true 
  },
  { 
    id: 2, 
    name: "Michael Gough", 
    avatar: "https://randomuser.me/api/portraits/men/32.jpg" 
  },
  { 
    id: 3, 
    name: "Lana Byrd", 
    avatar: "https://randomuser.me/api/portraits/women/68.jpg" 
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
      placeholder="Search team members..."
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
      <DropDownTAEmpty message="No results found" />
    )}
  </DropDownTAContent>
</DropDownTA>`;

  const simpleUsageCode = `const [isOpen, setIsOpen] = useState(false);
const [selectedUser, setSelectedUser] = useState(null);

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

<DropDownTA isOpen={isOpen} onToggle={setIsOpen}>
  <DropDownTATrigger
    selectedItem={selectedUser}
    placeholder="Select user"
    getItemLabel={(item) => item.name}
  />
  <DropDownTAContent>
    {users.map((user) => (
      <DropDownTAItem
        key={user.id}
        item={user}
        getItemLabel={(item) => item.name}
        onSelect={(item) => {
          setSelectedUser(item);
          setIsOpen(false);
        }}
      />
    ))}
  </DropDownTAContent>
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

  // DropDownTA props
  const dropDownTAProps = [
    {
      name: 'isOpen',
      type: 'boolean',
      default: 'false',
      description: 'Controlled state for dropdown visibility.',
    },
    {
      name: 'onToggle',
      type: '(open: boolean) => void',
      default: '() => {}',
      description: 'Callback when dropdown state changes.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional CSS classes.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'DropDownTATrigger and DropDownTAContent components.',
    },
  ];

  // DropDownTATrigger props
  const dropDownTATriggerProps = [
    {
      name: 'selectedItem',
      type: 'any',
      default: 'null',
      description: 'Currently selected item object.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: '"Select an item"',
      description: 'Placeholder text when no item is selected.',
    },
    {
      name: 'getItemLabel',
      type: '(item: any) => string',
      default: '(item) => item?.name || ""',
      description: 'Function to extract label from item.',
    },
    {
      name: 'isOpen',
      type: 'boolean',
      default: 'auto-injected',
      description: 'Whether dropdown is open (auto-injected from DropDownTA).',
    },
    {
      name: 'onToggle',
      type: '(open: boolean) => void',
      default: 'auto-injected',
      description: 'Toggle handler (auto-injected from DropDownTA).',
    },
  ];

  // DropDownTAContent props
  const dropDownTAContentProps = [
    {
      name: 'isOpen',
      type: 'boolean',
      default: 'auto-injected',
      description: 'Whether dropdown is open (auto-injected from DropDownTA).',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'DropDownTASearch, DropDownTAItem, and DropDownTAEmpty components.',
    },
  ];

  // DropDownTASearch props
  const dropDownTASearchProps = [
    {
      name: 'searchTerm',
      type: 'string',
      default: '""',
      description: 'Current search value.',
    },
    {
      name: 'onSearchChange',
      type: '(term: string) => void',
      default: '() => {}',
      description: 'Callback when search term changes.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: '"Search..."',
      description: 'Search input placeholder.',
    },
  ];

  // DropDownTAItem props
  const dropDownTAItemProps = [
    {
      name: 'item',
      type: 'any',
      default: 'undefined',
      description: 'Item object to display (required).',
    },
    {
      name: 'getItemLabel',
      type: '(item: any) => string',
      default: '(item) => item?.name || ""',
      description: 'Function to extract label.',
    },
    {
      name: 'onSelect',
      type: '(item: any) => void',
      default: '() => {}',
      description: 'Callback when item is selected.',
    },
  ];

  // DropDownTAEmpty props
  const dropDownTAEmptyProps = [
    {
      name: 'message',
      type: 'string',
      default: '"No results found"',
      description: 'Message to display when no items match.',
    },
  ];

  return (
    
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">DropDownTA</h1>
          <p className="text-gray-600 mb-4">
            Dropdown selector with optional search functionality and avatar support. 
            Uses a compound component pattern for maximum flexibility.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">With Search</h3>
            <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Simple Usage (without search)</h3>
            <div className="mb-4"><CodeBlock code={simpleUsageCode} language="tsx" /></div>
          </div>
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
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DropDownTA (Main Component)</h3>
            <PropsTable props={dropDownTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DropDownTATrigger</h3>
            <PropsTable props={dropDownTATriggerProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DropDownTAContent</h3>
            <PropsTable props={dropDownTAContentProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DropDownTASearch</h3>
            <PropsTable props={dropDownTASearchProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DropDownTAItem</h3>
            <PropsTable props={dropDownTAItemProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DropDownTAEmpty</h3>
            <PropsTable props={dropDownTAEmptyProps} />
          </div>
        </div>

        <div className="rounded-xl border bg-muted/50 p-6">
          <h3 className="text-lg font-semibold mb-2">✨ Features</h3>
          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>Avatar support (displays <code>item.avatar</code> if available)</li>
            <li>"(You)" indicator (displays when <code>item.isYou === true</code>)</li>
            <li>Search/filter functionality</li>
            <li>Customizable item rendering</li>
            <li>Empty state handling</li>
            <li>Fully controlled component pattern</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Dropdown;
