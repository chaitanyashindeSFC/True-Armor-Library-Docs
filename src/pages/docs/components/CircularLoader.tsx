
import DocsLayout from "@/components/DocsLayout";
import { 
  // @ts-expect-error - Component not yet exported from library
  CircularLoaderTA as CircularLoaderComponent, 
  // @ts-expect-error - Component not yet exported from library
  CircularLoaderTASpinner as CircularLoaderSpinnerComponent 
} from "@true-armor/ta-atoms2-public";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";

const CircularLoader = () => {
  const importCode = `import { CircularLoader, CircularLoaderSpinner } from "@true-armor/atoms";`;

  const basicUsageCode = `// Basic Loader
<CircularLoader size={50}>
  <CircularLoaderSpinner sticks={12} />
</CircularLoader>`;

  const customSizeCode = `// Custom Size
<CircularLoader size={120}>
  <CircularLoaderSpinner />
</CircularLoader>`;

  const customColorsCode = `// Custom Colors
const customColors = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#FFA07A',
  '#98D8C8'
];

<CircularLoader size={100}>
  <CircularLoaderSpinner colors={customColors} />
</CircularLoader>`;

  const customAnimationCode = `// Custom Animation Speed
<CircularLoader size={80}>
  <CircularLoaderSpinner 
    animationDuration={1.5} 
    sticks={8}
  />
</CircularLoader>`;

  const fullPageLoaderCode = `// Full Page Loader
<div className="relative min-h-screen">
  <CircularLoader size={100}>
    <CircularLoaderSpinner />
  </CircularLoader>
</div>`;

  // CircularLoader props
  const circularLoaderProps = [
    {
      name: "size",
      type: "number",
      default: "80",
      description: "Size of the loader in pixels (width and height).",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "CircularLoaderSpinner component.",
    },
  ];

  // CircularLoaderSpinner props
  const circularLoaderSpinnerProps = [
    {
      name: "colors",
      type: "string[]",
      default: "undefined",
      description: "Array of color hex codes for the spinner. Defaults to a blue gradient palette.",
    },
    {
      name: "sticks",
      type: "number",
      default: "11",
      description: "Number of spinner sticks/segments.",
    },
    {
      name: "animationDuration",
      type: "number",
      default: "2.2",
      description: "Animation duration in seconds.",
    },
  ];

  const customColors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#FFA07A',
    '#98D8C8'
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-10 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-3">CircularLoader</h1>
          <p className="text-lg text-muted-foreground">
            Animated circular loading spinner component with customizable colors, size, and animation speed. 
            Perfect for indicating loading states, data fetching, or processing operations.
          </p>
        </div>

        {/* Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Basic Loader</h3>
            <div className="mb-4"><CodeBlock code={basicUsageCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Custom Size</h3>
            <div className="mb-4"><CodeBlock code={customSizeCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Custom Colors</h3>
            <div className="mb-4"><CodeBlock code={customColorsCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Custom Animation Speed</h3>
            <div className="mb-4"><CodeBlock code={customAnimationCode} language="tsx" /></div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Full Page Loader</h3>
            <div className="mb-4"><CodeBlock code={fullPageLoaderCode} language="tsx" /></div>
          </div>
        </section>

        {/* Preview */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-6 border rounded-lg bg-card shadow-soft space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Basic Loader</h3>
              <div className="p-8 border rounded-lg bg-white flex justify-center items-center">
                <CircularLoaderComponent size={50}>
                  <CircularLoaderSpinnerComponent sticks={12} />
                </CircularLoaderComponent>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Custom Size (120px)</h3>
              <div className="p-8 border rounded-lg bg-white flex justify-center items-center">
                <CircularLoaderComponent size={120}>
                  <CircularLoaderSpinnerComponent />
                </CircularLoaderComponent>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Custom Colors</h3>
              <div className="p-8 border rounded-lg bg-white flex justify-center items-center">
                <CircularLoaderComponent size={100}>
                  <CircularLoaderSpinnerComponent colors={customColors} />
                </CircularLoaderComponent>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Custom Animation (8 sticks, 1.5s duration)</h3>
              <div className="p-8 border rounded-lg bg-white flex justify-center items-center">
                <CircularLoaderComponent size={80}>
                  <CircularLoaderSpinnerComponent 
                    animationDuration={1.5} 
                    sticks={8}
                  />
                </CircularLoaderComponent>
              </div>
            </div>
          </div>
        </section>

        {/* Props */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CircularLoader (Main Component)</h3>
            <PropsTable props={circularLoaderProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CircularLoaderSpinner</h3>
            <PropsTable props={circularLoaderSpinnerProps} />
          </div>
        </section>

        {/* Features */}
        <section className="rounded-xl border bg-muted/50 p-6">
          <h3 className="text-lg font-semibold mb-2">✨ Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>✅ Customizable size (width and height)</li>
            <li>✅ Custom color palette support</li>
            <li>✅ Adjustable animation speed</li>
            <li>✅ Configurable number of spinner sticks</li>
            <li>✅ Smooth, continuous animation</li>
            <li>✅ Perfect for loading states</li>
            <li>✅ Lightweight and performant</li>
            <li>✅ Accessible and user-friendly</li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default CircularLoader;

