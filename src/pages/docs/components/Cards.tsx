import React from "react";
import DocsLayout from "@/components/DocsLayout";
import {
  CardTA,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardLeftIcon,
  CardRightIcon,
} from "@chaitanya123123/truearmor-ui-components";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";
import { FolderGit2, CheckCircle } from "lucide-react";

const Cards = () => {
  const importCode = `import {
  CardTA,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardLeftIcon,
  CardRightIcon
} from '@chaitanya123123/truearmor-ui-components';`;

  const usageCode = `<CardTA className="border rounded-lg shadow-sm bg-white">
  <CardTitle>Repository</CardTitle>
  <CardContent>
    <CardDescription>Manage your Git repositories easily.</CardDescription>
    <CardFooter repos={3} badgeColor="indigo" />
  </CardContent>
</CardTA>`;

  const withIconsCode = `<CardTA className="border rounded-lg shadow-sm bg-white flex items-center">
  <CardLeftIcon icon={FolderGit2} />
  <div className="flex-1">
    <CardTitle>Version Control</CardTitle>
    <CardContent>
      <CardDescription>
        Integrated tools for managing source control.
      </CardDescription>
    </CardContent>
  </div>
  <CardRightIcon icon={CheckCircle} isVisible />
</CardTA>`;

  const props = [
    { name: "children", type: "React.ReactNode", description: "Card content or subcomponents." },
    { name: "className", type: "string", description: "Optional custom styling classes." },
    { name: "onClick", type: "() => void", description: "Click handler for the entire card." },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-10 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-3">CardTA</h1>
          <p className="text-lg text-muted-foreground">
            A flexible container for displaying content such as titles, descriptions, icons,
            and badges — built with subcomponents for clean composition.
          </p>
        </div>

        {/* Usage */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <CodeBlock code={importCode} language="tsx" />
          <CodeBlock code={usageCode} language="tsx" />

          <div className="p-6 border rounded-lg bg-card mt-6 shadow-soft">
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <CardTA className="border rounded-lg shadow-sm bg-white">
              <CardTitle>Repository</CardTitle>
              <CardContent>
                <CardDescription>
                  Manage your Git repositories easily.
                </CardDescription>
                <CardFooter repos={3} badgeColor="indigo" />
              </CardContent>
            </CardTA>
          </div>
        </section>

        {/* With Icons */}
        <section>
          <h2 className="text-2xl font-bold mb-4">With Icons</h2>
          <CodeBlock code={withIconsCode} language="tsx" />

          <div className="p-6 border rounded-lg bg-card mt-6 shadow-soft">
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <CardTA className="border rounded-lg shadow-sm bg-white flex items-center">
              <CardLeftIcon icon={FolderGit2} />
              <div className="flex-1">
                <CardTitle>Version Control</CardTitle>
                <CardContent>
                  <CardDescription>
                    Integrated tools for managing source control.
                  </CardDescription>
                </CardContent>
              </div>
              <CardRightIcon icon={CheckCircle} isVisible />
            </CardTA>
          </div>
        </section>

        {/* Props */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          <PropsTable props={props} />
        </section>

        {/* Best Practices */}
        <section className="rounded-xl border bg-muted/50 p-6">
          <h3 className="text-lg font-semibold mb-2">💡 Best Practices</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Use <code>CardTitle</code> for concise, descriptive titles</li>
            <li>• Combine <code>CardDescription</code> and <code>CardFooter</code> for context and metadata</li>
            <li>• Include icons for visually rich cards</li>
            <li>• Maintain consistent spacing inside <code>CardContent</code></li>
            <li>• Keep card actions (click or link) clear and intentional</li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Cards;
