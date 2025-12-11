import React from "react";
import DocsLayout from "@/components/DocsLayout";
// import {
//   CardTA,
//   CardTitle,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardLeftIcon,
//   CardRightIcon,
// } from "@true-armor/ta-atoms2-public";
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
} from '@true-armor/ta-atoms2-public';`;

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

  // CardTA props
  const cardProps = [
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Card content or subcomponents (CardTitle, CardContent, etc.).",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description: "Additional custom CSS classes to apply to the card container.",
    },
    {
      name: "onClick",
      type: "() => void",
      default: "undefined",
      description: "Callback function triggered when the card is clicked.",
    },
  ];

  // CardTitle props
  const cardTitleProps = [
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Title text or content to display in the card header.",
    },
  ];

  // CardContent props
  const cardContentProps = [
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Main content of the card (CardDescription, CardFooter, etc.).",
    },
  ];

  // CardDescription props
  const cardDescriptionProps = [
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Description text or content displayed in the card.",
    },
  ];

  // CardFooter props
  const cardFooterProps = [
    {
      name: "repos",
      type: "number",
      default: "undefined",
      description: "Number of repositories to display (used for badge display).",
    },
    {
      name: "badgeColor",
      type: "string",
      default: "undefined",
      description: "Color theme for the badge (e.g., 'indigo', 'blue', 'green').",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Footer content or custom footer elements.",
    },
  ];

  // CardLeftIcon props
  const cardLeftIconProps = [
    {
      name: "icon",
      type: "React.ComponentType",
      default: "undefined",
      description: "Icon component to display on the left side of the card.",
    },
  ];

  // CardRightIcon props
  const cardRightIconProps = [
    {
      name: "icon",
      type: "React.ComponentType",
      default: "undefined",
      description: "Icon component to display on the right side of the card.",
    },
    {
      name: "isVisible",
      type: "boolean",
      default: "false",
      description: "Controls the visibility of the right icon.",
    },
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
        {/* <section> */}
          {/* <h2 className="text-2xl font-bold mb-4">Usage</h2>
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
        {/* <section>
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
        </section> */}


        {/* Props */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CardTA</h3>
            <PropsTable props={cardProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CardTitle</h3>
            <PropsTable props={cardTitleProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CardContent</h3>
            <PropsTable props={cardContentProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CardDescription</h3>
            <PropsTable props={cardDescriptionProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CardFooter</h3>
            <PropsTable props={cardFooterProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CardLeftIcon</h3>
            <PropsTable props={cardLeftIconProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">CardRightIcon</h3>
            <PropsTable props={cardRightIconProps} />
          </div>
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
