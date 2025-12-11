import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { BadgeTA, Badge, BadgeIcon, BadgeLabel } from '@true-armor/ta-atoms2-public';
import { CheckCircle2, Star, AlertTriangle, AlertCircle, Award, Zap, Info } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const Badges = () => {
  const importCode = `import { BadgeTA, Badge, BadgeIcon, BadgeLabel } from '@true-armor/ta-atoms2-public';
import { CheckCircle2, Star } from 'lucide-react';`;

  const usageCode = `// BadgeTA - Simple pattern with dynamic icons
<BadgeTA label="Active" color="success" icon={CheckCircle2} />
<BadgeTA label="New" color="info" icon={Star} />

// Badge - Compound pattern with dynamic icons
<Badge color="success">
  <BadgeIcon icon={CheckCircle2} />
  <BadgeLabel>Verified</BadgeLabel>
</Badge>`;

  const props = [
    { name: 'label', type: 'string | React.ReactNode', description: 'Text or node to render inside the badge' },
    { name: 'icon', type: 'React.ComponentType', description: 'Optional icon component' },
    { name: 'value', type: 'any', description: 'Optional value used by Card footers' },
    { name: 'color', type: 'string', description: 'Visual color theme (e.g. success, warning, info)' },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">BadgeTA</h1>
          <p className="text-gray-600 mb-4">Small inline badge for status/labels.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white flex gap-3 items-center flex-wrap">
            <BadgeTA label="Active" color="success" icon={CheckCircle2} />
            <BadgeTA label="New" color="info" icon={Star} />
            <BadgeTA label="Warning" color="warning" icon={AlertTriangle} />
            <BadgeTA label="Error" color="failure" icon={AlertCircle} />
            <BadgeTA label="Premium" color="purple" icon={Award} />
            <Badge color="success">
              <BadgeIcon icon={CheckCircle2} />
              <BadgeLabel>Verified</BadgeLabel>
            </Badge>
            <Badge color="info">
              <BadgeIcon icon={Info} />
              <BadgeLabel>Information</BadgeLabel>
            </Badge>
            <Badge color="warning">
              <BadgeIcon icon={AlertTriangle} />
              <BadgeLabel>Pending</BadgeLabel>
            </Badge>
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

export default Badges;
