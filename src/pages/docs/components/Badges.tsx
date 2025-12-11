import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { BadgeTA } from '@true-armor/ta-atoms2-public';
import { CheckCircle2, Star } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const Badges = () => {
  const importCode = `import { BadgeTA } from '@true-armor/ta-atoms2-public';
import { CheckCircle, Star } from 'lucide-react';`;

  const usageCode = `// Simple Badge with Icon (left position - default)
<BadgeTA 
  label="Active" 
  color="blue" 
  icon={CheckCircle}
  iconPosition="left"
/>

// Badge without Icon
<BadgeTA 
  label="New" 
  color="green"
/>

// Badge with Right Icon
<BadgeTA 
  label="Premium" 
  color="purple" 
  icon={Star}
  iconPosition="right"
/>`;

  // BadgeTA props
  const badgeTAProps = [
    {
      name: 'label',
      type: 'string',
      default: 'undefined',
      description: 'The badge text (required).',
    },
    {
      name: 'icon',
      type: 'React.ComponentType<any>',
      default: 'undefined',
      description: 'Optional icon component from lucide-react.',
    },
    {
      name: 'color',
      type: 'string',
      default: '"blue"',
      description: 'Badge color. Available: "blue", "green", "purple", "gray", "indigo", "pink", or any color supported by flowbite-react Badge.',
    },
    {
      name: 'iconPosition',
      type: '"left" | "right"',
      default: '"left"',
      description: 'Icon position relative to the label.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional CSS classes.',
    },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">BadgeTA</h1>
          <p className="text-gray-600 mb-4">
            Small inline badge for status/labels. Now uses flowbite-react Badge directly. 
            Wrapper components (Badge, BadgeIcon, BadgeLabel) are no longer exported.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div >
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white flex gap-4 justify-center items-center w-full">
            <BadgeTA label="Active" color="blue" icon={CheckCircle2} iconPosition="left" className="w-ful" />
            <BadgeTA label="New" color="green" />
            <BadgeTA label="Premium" color="purple" icon={Star} iconPosition="right" />
            <BadgeTA label="Info" color="gray" />
            <BadgeTA label="Indigo" color="indigo" />
            <BadgeTA label="Pink" color="pink" />
          </div>
        </div>
    
        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">BadgeTA</h3>
            <PropsTable props={badgeTAProps} />
            <p className="text-sm text-gray-500 mt-3">
              All other props from flowbite-react Badge are supported.
            </p>
          </div>
          
          <div className="rounded-xl border bg-muted/50 p-6 mt-6">
            <h3 className="text-lg font-semibold mb-2">Available Colors</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li><code>"blue"</code> (default)</li>
              <li><code>"green"</code></li>
              <li><code>"purple"</code></li>
              <li><code>"gray"</code></li>
              <li><code>"indigo"</code></li>
              <li><code>"pink"</code></li>
              <li>Any color supported by flowbite-react Badge</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Badges;
