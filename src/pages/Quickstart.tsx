"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import {
  ButtonTA,
  AlertTA,
  CardTA,
  CardContent,
  CardTitle,
  CardDescription,
} from "atoms-ta";

const Quickstart = () => {
  const [count, setCount] = useState(0);

  const quickExample = `import React, { useState } from "react";
import { ButtonTA } from "atoms-ta";

function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <ButtonTA 
        label="Increment"
        onClick={() => setCount(count + 1)}
      />
    </div>
  );
}`;

  const alertExample = `import { AlertTA } from "atoms-ta";

function AlertExample() {
  return (
    <AlertTA 
      type="success" 
      title="Success!"
      message="Your changes have been saved successfully."
    />
  );
}`;

  const cardExample = `import { CardTA, CardTitle, CardContent, CardDescription, ButtonTA } 
from "atoms-ta";

function ProductCard() {
  return (
    <CardTA className="p-4 w-80">
      <CardTitle>Product Name</CardTitle>
      <CardDescription>Product description goes here.</CardDescription>
      <CardContent>
        <ButtonTA label="Buy Now" />
      </CardContent>
    </CardTA>
  );
}`;

  return (
    <DocsLayout>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-[Montserrat] overflow-x-hidden overflow-y-hidden">
        {/* ✅ Header Section */}
        <section>
          <h1 className="text-4xl font-bold mb-3 text-[#173B4E]">
            Quickstart Guide
          </h1>
          <p className="text-gray-600">
            Start building with <strong>TrueArmor UI</strong> in minutes. Follow
            this guide to create your first component.
          </p>
        </section>

        {/* ✅ Counter Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Your First Component</h2>
          <p className="text-gray-500 mb-4">
            Let’s create a simple counter using the ButtonTA component:
          </p>

          {/* Code Block */}
          <div className="overflow-x-auto rounded-md border bg-gray-50">
            <CodeBlock code={quickExample} language="tsx" />
          </div>

          {/* Live Demo */}
          <div className="mt-6 p-6 border rounded-lg bg-white shadow-sm text-center">
            <h3 className="text-lg font-semibold mb-4">Live Demo</h3>
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-2xl font-bold text-[#173B4E]">
                Count: {count}
              </h2>
              <ButtonTA label="Increment" onClick={() => setCount(count + 1)} />
              <ButtonTA
                label="Reset"
                buttonType="secondary"
                onClick={() => setCount(0)}
              />
            </div>
          </div>
        </section>

        {/* ✅ Common Use Cases */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Common Use Cases</h2>

          <div className="space-y-8">
            {/* Alert Example */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Alerts</h3>
              <p className="text-gray-500 mb-3">
                Display important messages to your users:
              </p>
              <div className="overflow-x-auto rounded-md border bg-gray-50">
                <CodeBlock code={alertExample} language="tsx" />
              </div>

              <div className="mt-4">
                <AlertTA
                  type="success"
                  title="Success!"
                  message="Your changes have been saved successfully."
                />
              </div>
            </div>

           
          </div>
        </section>

       

        {/* ✅ Navigation Footer */}
        <footer className="flex items-center justify-between border-t pt-4">
          <Link to="/docs/installation">
            <ButtonTA label="← Installation" buttonType="secondary" />
          </Link>
          <Link to="/docs/components/buttons">
            <ButtonTA label="Components →" buttonType="secondary" />
          </Link>
        </footer>
      </div>
    </DocsLayout>
  );
};

export default Quickstart;
