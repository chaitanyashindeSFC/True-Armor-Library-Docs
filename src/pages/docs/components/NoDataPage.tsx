import React from "react";
import DocsLayout from "@/components/DocsLayout";
import { 
  NoDataPageTA, 
  NoDataPageTAImg, 
  NoDataPageTABody, 
  NoDataPageTATitle, 
  NoDataPageTAButton
} from "@true-armor/ta-atoms2-public";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";

const NoDataPage = () => {
  const importCode = `import { 
  NoDataPageTA, 
  NoDataPageTAImg, 
  NoDataPageTABody, 
  NoDataPageTATitle, 
  NoDataPageTAButton 
} from "@true-armor/atoms";`;

  const basicUsageCode = `// Basic Example (using context props)
<NoDataPageTA 
  title="No data available" 
  buttonText="Add New Item"
  image="/path/to/empty-state-image.svg"
>
  <NoDataPageTAImg />
  <NoDataPageTABody>
    <NoDataPageTATitle />
    <NoDataPageTAButton onClick={() => console.log("Clicked!")} />
  </NoDataPageTABody>
</NoDataPageTA>`;

  const directPropsCode = `// With Direct Props (overriding context)
<NoDataPageTA>
  <NoDataPageTAImg src="/custom-empty-image.png" />
  <NoDataPageTABody>
    <NoDataPageTATitle>No users found</NoDataPageTATitle>
    <NoDataPageTAButton onClick={handleAddUser}>
      Create First User
    </NoDataPageTAButton>
  </NoDataPageTABody>
</NoDataPageTA>`;

  const minimalCode = `// Minimal Example (only image)
<NoDataPageTA image="/empty-state.svg">
  <NoDataPageTAImg />
</NoDataPageTA>`;

  const customContentCode = `// Custom Content Example
<NoDataPageTA title="No results found">
  <NoDataPageTAImg src="/search-empty.svg" />
  <NoDataPageTABody>
    <NoDataPageTATitle>Try adjusting your search filters</NoDataPageTATitle>
    <div className="mt-4">
      <p className="text-gray-500 text-xs">
        We couldn't find any items matching your criteria.
      </p>
    </div>
    <NoDataPageTAButton onClick={handleResetFilters}>
      Clear Filters
    </NoDataPageTAButton>
  </NoDataPageTABody>
</NoDataPageTA>`;

  const withoutButtonCode = `// Without Button
<NoDataPageTA title="No items to display" image="/empty-box.svg">
  <NoDataPageTAImg />
  <NoDataPageTABody>
    <NoDataPageTATitle />
  </NoDataPageTABody>
</NoDataPageTA>`;

  // NoDataPageTA props
  const noDataPageTAProps = [
    {
      name: "title",
      type: "string",
      default: "undefined",
      description: "Title text to display (can be overridden by NoDataPageTATitle children).",
    },
    {
      name: "buttonText",
      type: "string",
      default: "undefined",
      description: "Button text (can be overridden by NoDataPageTAButton children).",
    },
    {
      name: "image",
      type: "string",
      default: "undefined",
      description: "Image URL/path (can be overridden by NoDataPageTAImg src prop).",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "NoDataPageTAImg, NoDataPageTABody, and their children.",
    },
  ];

  // NoDataPageTAImg props
  const noDataPageTAImgProps = [
    {
      name: "src",
      type: "string",
      default: "undefined",
      description: "Image URL/path (overrides context image if provided). Uses context image if src is not provided. Returns null if no image is available.",
    },
  ];

  // NoDataPageTABody props
  const noDataPageTABodyProps = [
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "NoDataPageTATitle, NoDataPageTAButton, or custom content. Wraps content in a centered, text-aligned container.",
    },
  ];

  // NoDataPageTATitle props
  const noDataPageTATitleProps = [
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Title text (overrides context title if provided). Uses context title if children are not provided. Returns null if no title is available. Styled with text-[#4B5563] text-sm.",
    },
  ];

  // NoDataPageTAButton props
  const noDataPageTAButtonProps = [
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Button text (overrides context buttonText if provided). Uses context buttonText if children are not provided. Returns null if no button text is available.",
    },
    {
      name: "onClick",
      type: "() => void",
      default: "undefined",
      description: "Click handler function. Uses ButtonTA with buttonType='primary'.",
    },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-10 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-3">NoDataPageTA</h1>
          <p className="text-lg text-muted-foreground">
            Empty state component for displaying "no data" or "empty" states in your application. 
            Perfect for when lists are empty, search results return nothing, or when users need 
            guidance on what to do next. Uses a compound component pattern with context-based prop 
            sharing for flexible composition.
          </p>
        </div>

        {/* Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Basic Example (using context props)</h3>
            <div className="mb-4"><CodeBlock code={basicUsageCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">With Direct Props (overriding context)</h3>
            <div className="mb-4"><CodeBlock code={directPropsCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Minimal Example (only image)</h3>
            <div className="mb-4"><CodeBlock code={minimalCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Custom Content Example</h3>
            <div className="mb-4"><CodeBlock code={customContentCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Without Button</h3>
            <div className="mb-4"><CodeBlock code={withoutButtonCode} language="tsx" /></div>
          </div>
        </section>

        {/* Preview */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-6 border rounded-lg bg-card shadow-soft space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Basic Example</h3>
              <div className="p-8 border rounded-lg bg-white">
                <NoDataPageTA 
                  title="No data available" 
                  buttonText="Add New Item"
                  image="/NoAssessment.svg"
                >
                  <NoDataPageTAImg />
                  <NoDataPageTABody>
                    <NoDataPageTATitle />
                    <NoDataPageTAButton onClick={() => console.log("Clicked!")} />
                  </NoDataPageTABody>
                </NoDataPageTA>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">With Direct Props</h3>
              <div className="p-8 border rounded-lg bg-white">
                <NoDataPageTA>
                  <NoDataPageTAImg src="/EmptyPolicy.svg" />
                  <NoDataPageTABody>
                    <NoDataPageTATitle>No users found</NoDataPageTATitle>
                    <NoDataPageTAButton onClick={() => console.log("Add user")}>
                      Create First User
                    </NoDataPageTAButton>
                  </NoDataPageTABody>
                </NoDataPageTA>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Minimal Example</h3>
              <div className="p-8 border rounded-lg bg-white">
                <NoDataPageTA image="/NoAssessment.svg">
                  <NoDataPageTAImg />
                </NoDataPageTA>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Without Button</h3>
              <div className="p-8 border rounded-lg bg-white">
                <NoDataPageTA title="No items to display" image="/EmptyPolicy.svg">
                  <NoDataPageTAImg />
                  <NoDataPageTABody>
                    <NoDataPageTATitle />
                  </NoDataPageTABody>
                </NoDataPageTA>
              </div>
            </div>
          </div>
        </section>

        {/* Props */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">NoDataPageTA (Main Component)</h3>
            <PropsTable props={noDataPageTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">NoDataPageTAImg</h3>
            <PropsTable props={noDataPageTAImgProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">NoDataPageTABody</h3>
            <PropsTable props={noDataPageTABodyProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">NoDataPageTATitle</h3>
            <PropsTable props={noDataPageTATitleProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">NoDataPageTAButton</h3>
            <PropsTable props={noDataPageTAButtonProps} />
          </div>
        </section>

        {/* Features */}
        <section className="rounded-xl border bg-muted/50 p-6">
          <h3 className="text-lg font-semibold mb-2">✨ Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>✅ Context-based prop sharing for flexible composition</li>
            <li>✅ Direct prop override support (props take precedence over context)</li>
            <li>✅ Conditional rendering (components return null if no data provided)</li>
            <li>✅ Centered, responsive layout</li>
            <li>✅ Custom image support</li>
            <li>✅ Integrated with ButtonTA component</li>
            <li>✅ Flexible content structure</li>
            <li>✅ Perfect for empty states, no results, and onboarding flows</li>
          </ul>
        </section>

        {/* Use Cases */}
        <section className="rounded-xl border bg-muted/50 p-6">
          <h3 className="text-lg font-semibold mb-2">💡 Use Cases</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Empty lists or tables</li>
            <li>• No search results</li>
            <li>• Empty cart or checkout</li>
            <li>• No notifications</li>
            <li>• Empty dashboard sections</li>
            <li>• Onboarding flows</li>
            <li>• Error recovery states</li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default NoDataPage;

