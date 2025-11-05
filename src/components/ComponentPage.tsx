import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/CodeBlock";
import DocsLayout from "@/components/DocsLayout";
import PropsTable from "@/components/PropsTable";

interface ComponentPageProps {
  title: string;
  description: string;
  sourceFile: string;
  features: string[];
  props: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
  }>;
  examples: Array<{
    title: string;
    description: string;
    code: string;
    preview?: React.ReactNode;
  }>;
  previousPath?: string;
  nextPath?: string;
}

export function ComponentPage({
  title,
  description,
  sourceFile,
  features,
  props,
  examples,
  previousPath,
  nextPath,
}: ComponentPageProps) {
  return (
    <DocsLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, i) => (
            <div key={i} className="rounded-lg border bg-card p-4">
              <p className="text-sm">{feature}</p>
            </div>
          ))}
        </div>

        {/* Installation */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Installation
          </h2>
          <p className="text-muted-foreground mb-4">
            Import the component from our package:
          </p>
          <CodeBlock code={`import { ${title} } from "@chaitanya123123/truearmor-ui-components";`} language="typescript" />
        </div>

        {/* Props */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Props
          </h2>
          <PropsTable props={props} />
        </div>

        {/* Examples */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Examples
          </h2>
          <div className="space-y-8">
            {examples.map((example, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-lg font-semibold">{example.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {example.description}
                </p>
                {example.preview && (
                  <div className="rounded-md border p-6 flex items-center justify-center bg-card">
                    {example.preview}
                  </div>
                )}
                <CodeBlock code={example.code} language="tsx" />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4 border-t">
          {previousPath ? (
            <Link to={previousPath}>
              <Button variant="outline">← Previous</Button>
            </Link>
          ) : <div />}
          {nextPath ? (
            <Link to={nextPath}>
              <Button variant="outline">Next →</Button>
            </Link>
          ) : <div />}
        </div>
      </div>
    </DocsLayout>
  );
}