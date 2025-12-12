import React, { useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import { 
  // @ts-expect-error - Component not yet exported from library
  GroupedMultiSelectTA, 
  // @ts-expect-error - Component not yet exported from library
  GroupedMultiSelectTAItem 
} from "@true-armor/ta-atoms2-public";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";

const GroupedMultiSelect = () => {
  const importCode = `import { GroupedMultiSelectTA, GroupedMultiSelectTAItem } from "@true-armor/atoms";
import { useState } from "react";`;

  const basicExampleCode = `// Basic Example
const [selected, setSelected] = useState<string[]>([]);

<GroupedMultiSelectTA value={selected} onChange={setSelected}>
  <GroupedMultiSelectTAItem value="fruits">
    Fruits
    <GroupedMultiSelectTAItem value="apple">Apple</GroupedMultiSelectTAItem>
    <GroupedMultiSelectTAItem value="banana">Banana</GroupedMultiSelectTAItem>
    <GroupedMultiSelectTAItem value="orange">Orange</GroupedMultiSelectTAItem>
  </GroupedMultiSelectTAItem>
  
  <GroupedMultiSelectTAItem value="vegetables">
    Vegetables
    <GroupedMultiSelectTAItem value="carrot">Carrot</GroupedMultiSelectTAItem>
    <GroupedMultiSelectTAItem value="broccoli">Broccoli</GroupedMultiSelectTAItem>
  </GroupedMultiSelectTAItem>
</GroupedMultiSelectTA>`;

  const deeplyNestedCode = `// Deeply Nested Groups (Permission Management)
const [permissions, setPermissions] = useState<string[]>([]);

<GroupedMultiSelectTA value={permissions} onChange={setPermissions}>
  <GroupedMultiSelectTAItem value="admin">
    Admin Access
    <GroupedMultiSelectTAItem value="users">
      User Management
      <GroupedMultiSelectTAItem value="create-user">Create User</GroupedMultiSelectTAItem>
      <GroupedMultiSelectTAItem value="edit-user">Edit User</GroupedMultiSelectTAItem>
      <GroupedMultiSelectTAItem value="delete-user">Delete User</GroupedMultiSelectTAItem>
      <GroupedMultiSelectTAItem value="view-user">View User</GroupedMultiSelectTAItem>
    </GroupedMultiSelectTAItem>
    <GroupedMultiSelectTAItem value="settings">
      Settings
      <GroupedMultiSelectTAItem value="general">General Settings</GroupedMultiSelectTAItem>
      <GroupedMultiSelectTAItem value="security">Security Settings</GroupedMultiSelectTAItem>
      <GroupedMultiSelectTAItem value="notifications">Notification Settings</GroupedMultiSelectTAItem>
    </GroupedMultiSelectTAItem>
  </GroupedMultiSelectTAItem>
</GroupedMultiSelectTA>`;

  const controlledComponentCode = `// Controlled Component with Initial Selection
const [selectedItems, setSelectedItems] = useState<string[]>(['apple', 'banana']);

<GroupedMultiSelectTA value={selectedItems} onChange={setSelectedItems}>
  <GroupedMultiSelectTAItem value="fruits">
    Fruits
    <GroupedMultiSelectTAItem value="apple">Apple</GroupedMultiSelectTAItem>
    <GroupedMultiSelectTAItem value="banana">Banana</GroupedMultiSelectTAItem>
    <GroupedMultiSelectTAItem value="orange">Orange</GroupedMultiSelectTAItem>
  </GroupedMultiSelectTAItem>
</GroupedMultiSelectTA>

// Access selected values
console.log(selectedItems); // ['fruits', 'apple', 'banana']`;

  const categorySelectionCode = `// Category Selection with Subcategories
const [categories, setCategories] = useState<string[]>([]);

<GroupedMultiSelectTA value={categories} onChange={setCategories}>
  <GroupedMultiSelectTAItem value="electronics">
    Electronics
    <GroupedMultiSelectTAItem value="phones">
      Phones
      <GroupedMultiSelectTAItem value="smartphone">Smartphone</GroupedMultiSelectTAItem>
      <GroupedMultiSelectTAItem value="feature-phone">Feature Phone</GroupedMultiSelectTAItem>
    </GroupedMultiSelectTAItem>
    <GroupedMultiSelectTAItem value="computers">
      Computers
      <GroupedMultiSelectTAItem value="laptop">Laptop</GroupedMultiSelectTAItem>
      <GroupedMultiSelectTAItem value="desktop">Desktop</GroupedMultiSelectTAItem>
      <GroupedMultiSelectTAItem value="tablet">Tablet</GroupedMultiSelectTAItem>
    </GroupedMultiSelectTAItem>
  </GroupedMultiSelectTAItem>
  <GroupedMultiSelectTAItem value="clothing">
    Clothing
    <GroupedMultiSelectTAItem value="men">Men's</GroupedMultiSelectTAItem>
    <GroupedMultiSelectTAItem value="women">Women's</GroupedMultiSelectTAItem>
    <GroupedMultiSelectTAItem value="kids">Kids</GroupedMultiSelectTAItem>
  </GroupedMultiSelectTAItem>
</GroupedMultiSelectTA>`;

  const fileFolderCode = `// File/Folder Structure Example
const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

<GroupedMultiSelectTA value={selectedFiles} onChange={setSelectedFiles}>
  <GroupedMultiSelectTAItem value="documents">
    Documents
    <GroupedMultiSelectTAItem value="projects">
      Projects
      <GroupedMultiSelectTAItem value="project-1">Project 1</GroupedMultiSelectTAItem>
      <GroupedMultiSelectTAItem value="project-2">Project 2</GroupedMultiSelectTAItem>
    </GroupedMultiSelectTAItem>
    <GroupedMultiSelectTAItem value="reports">Reports</GroupedMultiSelectTAItem>
    <GroupedMultiSelectTAItem value="notes">Notes</GroupedMultiSelectTAItem>
  </GroupedMultiSelectTAItem>
  <GroupedMultiSelectTAItem value="images">
    Images
    <GroupedMultiSelectTAItem value="photos">Photos</GroupedMultiSelectTAItem>
    <GroupedMultiSelectTAItem value="screenshots">Screenshots</GroupedMultiSelectTAItem>
  </GroupedMultiSelectTAItem>
</GroupedMultiSelectTA>`;

  // GroupedMultiSelectTA props
  const groupedMultiSelectTAProps = [
    {
      name: "value",
      type: "string[]",
      default: "undefined",
      description: "Array of selected item values. When a parent is selected, all its children are automatically included.",
    },
    {
      name: "onChange",
      type: "(value: string[]) => void",
      default: "undefined",
      description: "Callback function triggered when selection changes. Receives the updated array of selected values.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "GroupedMultiSelectTAItem components representing the tree structure.",
    },
  ];

  // GroupedMultiSelectTAItem props
  const groupedMultiSelectTAItemProps = [
    {
      name: "value",
      type: "string",
      default: "undefined",
      description: "Unique identifier for the item. Must be unique across all items in the tree.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Label text (first text node) and/or nested GroupedMultiSelectTAItem components for creating sub-items.",
    },
  ];

  const [selected, setSelected] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <DocsLayout>
      <div className="flex flex-col gap-10 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-3">GroupedMultiSelectTA</h1>
          <p className="text-lg text-muted-foreground">
            Hierarchical multi-select component with nested groups and checkboxes. Supports parent-child relationships 
            with automatic selection propagation. Perfect for category selection, permission management, and nested 
            data selection. Uses a compound component pattern with recursive rendering for unlimited nesting depth.
          </p>
        </div>

        {/* Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Basic Example</h3>
            <div className="mb-4"><CodeBlock code={basicExampleCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Deeply Nested Groups (Permission Management)</h3>
            <div className="mb-4"><CodeBlock code={deeplyNestedCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Controlled Component with Initial Selection</h3>
            <div className="mb-4"><CodeBlock code={controlledComponentCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Category Selection with Subcategories</h3>
            <div className="mb-4"><CodeBlock code={categorySelectionCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">File/Folder Structure Example</h3>
            <div className="mb-4"><CodeBlock code={fileFolderCode} language="tsx" /></div>
          </div>
        </section>

        {/* Preview */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-6 border rounded-lg bg-card shadow-soft space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Basic Example</h3>
              <div className="p-8 border rounded-lg bg-white">
                <GroupedMultiSelectTA value={selected} onChange={setSelected}>
                  <GroupedMultiSelectTAItem value="fruits">
                    Fruits
                    <GroupedMultiSelectTAItem value="apple">Apple</GroupedMultiSelectTAItem>
                    <GroupedMultiSelectTAItem value="banana">Banana</GroupedMultiSelectTAItem>
                    <GroupedMultiSelectTAItem value="orange">Orange</GroupedMultiSelectTAItem>
                  </GroupedMultiSelectTAItem>
                  
                  <GroupedMultiSelectTAItem value="vegetables">
                    Vegetables
                    <GroupedMultiSelectTAItem value="carrot">Carrot</GroupedMultiSelectTAItem>
                    <GroupedMultiSelectTAItem value="broccoli">Broccoli</GroupedMultiSelectTAItem>
                  </GroupedMultiSelectTAItem>
                </GroupedMultiSelectTA>
                <div className="mt-4 text-sm text-muted-foreground">
                  Selected: {selected.length > 0 ? selected.join(", ") : "None"}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Category Selection</h3>
              <div className="p-8 border rounded-lg bg-white">
                <GroupedMultiSelectTA value={selectedCategories} onChange={setSelectedCategories}>
                  <GroupedMultiSelectTAItem value="electronics">
                    Electronics
                    <GroupedMultiSelectTAItem value="phones">
                      Phones
                      <GroupedMultiSelectTAItem value="smartphone">Smartphone</GroupedMultiSelectTAItem>
                      <GroupedMultiSelectTAItem value="feature-phone">Feature Phone</GroupedMultiSelectTAItem>
                    </GroupedMultiSelectTAItem>
                    <GroupedMultiSelectTAItem value="computers">
                      Computers
                      <GroupedMultiSelectTAItem value="laptop">Laptop</GroupedMultiSelectTAItem>
                      <GroupedMultiSelectTAItem value="desktop">Desktop</GroupedMultiSelectTAItem>
                    </GroupedMultiSelectTAItem>
                  </GroupedMultiSelectTAItem>
                  <GroupedMultiSelectTAItem value="clothing">
                    Clothing
                    <GroupedMultiSelectTAItem value="men">Men's</GroupedMultiSelectTAItem>
                    <GroupedMultiSelectTAItem value="women">Women's</GroupedMultiSelectTAItem>
                  </GroupedMultiSelectTAItem>
                </GroupedMultiSelectTA>
                <div className="mt-4 text-sm text-muted-foreground">
                  Selected: {selectedCategories.length > 0 ? selectedCategories.join(", ") : "None"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Props */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">GroupedMultiSelectTA (Main Component)</h3>
            <PropsTable props={groupedMultiSelectTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">GroupedMultiSelectTAItem</h3>
            <PropsTable props={groupedMultiSelectTAItemProps} />
          </div>
        </section>

        {/* Features */}
        <section className="rounded-xl border bg-muted/50 p-6">
          <h3 className="text-lg font-semibold mb-2">✨ Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>✅ Unlimited nesting depth (recursive rendering)</li>
            <li>✅ Hierarchical/nested structure support</li>
            <li>✅ Parent-child selection propagation</li>
            <li>✅ Indeterminate state (partial selection) with minus icon</li>
            <li>✅ Expandable/collapsible groups with chevron icons</li>
            <li>✅ Fully controlled component pattern</li>
            <li>✅ Automatic value collection (selecting parent includes all descendants)</li>
            <li>✅ Visual feedback with checkmarks (✓) and minus (-) icons</li>
            <li>✅ Hover states and smooth transitions</li>
            <li>✅ Click to expand/collapse groups</li>
            <li>✅ Independent checkbox selection</li>
          </ul>
        </section>

        {/* Selection Behavior */}
        <section className="rounded-xl border bg-muted/50 p-6">
          <h3 className="text-lg font-semibold mb-2">📋 Selection Behavior</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• <strong>Selecting a parent</strong>: Automatically selects all children and descendants</li>
            <li>• <strong>Deselecting a parent</strong>: Automatically deselects all children and descendants</li>
            <li>• <strong>Selecting all children</strong>: Automatically selects the parent</li>
            <li>• <strong>Partial selection</strong>: Shows indeterminate state (minus icon) when some but not all children are selected</li>
            <li>• <strong>Leaf nodes</strong>: Can be selected independently without affecting siblings</li>
            <li>• <strong>Value array</strong>: Contains all selected values including parents and all their descendants</li>
          </ul>
        </section>

        {/* Visual States */}
        <section className="rounded-xl border bg-muted/50 p-6">
          <h3 className="text-lg font-semibold mb-2">🎨 Visual States</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• <strong>Unselected</strong>: Empty checkbox with white background</li>
            <li>• <strong>Fully Selected</strong>: Checkmark icon (✓) with dark blue background (#173B4E)</li>
            <li>• <strong>Partially Selected</strong>: Minus icon (-) with dark blue background (#173B4E)</li>
            <li>• <strong>Expanded Group</strong>: ChevronDown icon pointing down</li>
            <li>• <strong>Collapsed Group</strong>: ChevronRight icon pointing right</li>
          </ul>
        </section>

        {/* Use Cases */}
        <section className="rounded-xl border bg-muted/50 p-6">
          <h3 className="text-lg font-semibold mb-2">💡 Use Cases</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Permission management systems (role-based access control)</li>
            <li>• Category selection with subcategories (e-commerce filters)</li>
            <li>• File/folder selection (file managers, cloud storage)</li>
            <li>• Feature toggles with groups (feature flags)</li>
            <li>• Multi-level filtering (advanced search)</li>
            <li>• Hierarchical data selection (organizational structures)</li>
            <li>• Tag management with categories</li>
            <li>• Settings configuration with grouped options</li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default GroupedMultiSelect;

