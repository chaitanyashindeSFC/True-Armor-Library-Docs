"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import DocsLayout from "@/components/DocsLayout";
import CodeBlock from "@/components/CodeBlock";
import { ButtonTA, AlertTA, CardTA, CardContent, CardTitle, CardDescription } from "@chaitanya123123/truearmor-ui-components";

const Quickstart = () => {
  const [count, setCount] = useState(0);

  const quickExample = `import React, { useState } from "react";
import { ButtonTA } from "@chaitanya123123/truearmor-ui-components";

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

  const alertExample = `import { AlertTA } from "@chaitanya123123/truearmor-ui-components";

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
from "@chaitanya123123/truearmor-ui-components";

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
      <div className="space-y-10 font-[Montserrat]">
        {/* ✅ Header Section */}
        <section>
          <h1 className="text-4xl font-bold mb-3 text-[#173B4E]">Quickstart Guide</h1>
          <p className="text-gray-600">
            Start building with <strong>TrueArmor UI</strong> in minutes. Follow this guide to create your first component.
          </p>
        </section>

        {/* ✅ Counter Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Your First Component</h2>
          <p className="text-gray-500 mb-4">Let’s create a simple counter using the ButtonTA component:</p>

          <CodeBlock code={quickExample} language="tsx" />

          <div className="mt-6 p-6 border rounded-lg bg-white shadow-sm text-center">
            <h3 className="text-lg font-semibold mb-4">Live Demo</h3>
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-2xl font-bold text-[#173B4E]">Count: {count}</h2>
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
              <p className="text-gray-500 mb-3">Display important messages to your users:</p>
              <CodeBlock code={alertExample} language="tsx" />
              <div className="mt-4">
                <AlertTA 
                  type="success" 
                  title="Success!"
                  message="Your changes have been saved successfully."
                />
              </div>
            </div>

            {/* Card Example */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Cards</h3>
              <p className="text-gray-500 mb-3">Organize content in beautiful card layouts:</p>
              <CodeBlock code={cardExample} language="tsx" />
              <div className="mt-4 flex justify-center">
                <CardTA className="w-80 border shadow-sm">
                  <CardTitle>Product Name</CardTitle>
                  <CardDescription>Product description goes here.</CardDescription>
                  <CardContent>
                    <ButtonTA label="Buy Now" />
                  </CardContent>
                </CardTA>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ What's Next Section */}
        <section className="p-8 bg-[#173B4E] text-white rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-3">What's Next?</h2>
          <p className="mb-5 text-gray-100">
            Now that you know the basics, explore the complete component library and learn how to theme your app.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/docs/components/buttons">
              <ButtonTA 
                label="Browse Components"
                buttonType="secondary"
                className="bg-white text-[#173B4E] hover:bg-gray-100"
              />
            </Link>
            <Link to="/docs/theming">
              <ButtonTA 
                label="Customize Theme"
                buttonType="tertiary"
                className="text-white border-white hover:bg-white/10"
              />
            </Link>
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
