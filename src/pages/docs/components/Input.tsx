import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { InputTA, InputTALabel, InputTAField } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const InputDoc = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const importCode = `import { InputTA, InputTALabel, InputTAField } from '@true-armor/ta-atoms2-public';`;
  const usageCode = `const [email, setEmail] = useState('');

<InputTA id="email" multiline={false}>
  <InputTALabel>Email Address</InputTALabel>
  <InputTAField 
    type="email" 
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</InputTA>

<InputTA id="message" multiline={true} rows={5}>
  <InputTALabel>Message</InputTALabel>
  <InputTAField 
    placeholder="Enter your message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />
</InputTA>`;

  // InputTA props
  const inputTAProps = [
    {
      name: 'id',
      type: 'string',
      default: 'undefined',
      description: 'Unique identifier for the input field (used for accessibility and form association).',
    },
    {
      name: 'multiline',
      type: 'boolean',
      default: 'false',
      description: 'Whether the input is a multiline textarea.',
    },
    {
      name: 'rows',
      type: 'number',
      default: 'undefined',
      description: 'Number of rows for multiline input (only applies when multiline is true).',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'InputTALabel and InputTAField components as children.',
    },
  ];

  // InputTALabel props
  const inputTALabelProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Label text or content to display above the input field.',
    },
  ];

  // InputTAField props
  const inputTAFieldProps = [
    {
      name: 'type',
      type: 'string',
      default: '"text"',
      description: 'Input type (text, email, password, number, etc.).',
    },
    {
      name: 'value',
      type: 'string',
      default: 'undefined',
      description: 'Controlled value of the input field.',
    },
    {
      name: 'defaultValue',
      type: 'string',
      default: 'undefined',
      description: 'Default value for uncontrolled input field.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: 'undefined',
      description: 'Placeholder text displayed when the input is empty.',
    },
    {
      name: 'onChange',
      type: '(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void',
      default: 'undefined',
      description: 'Callback function triggered when the input value changes.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the input field is disabled.',
    },
    {
      name: 'required',
      type: 'boolean',
      default: 'false',
      description: 'Whether the input field is required.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional custom CSS classes to apply to the input field.',
    },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">InputTA</h1>
          <p className="text-gray-600 mb-4">Text input primitive.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white space-y-4">
            <InputTA id="email" multiline={false}>
              <InputTALabel>Email Address</InputTALabel>
              <InputTAField 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputTA>
            <InputTA id="message" multiline={true} rows={5}>
              <InputTALabel>Message</InputTALabel>
              <InputTAField 
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </InputTA>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">InputTA</h3>
            <PropsTable props={inputTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">InputTALabel</h3>
            <PropsTable props={inputTALabelProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">InputTAField</h3>
            <PropsTable props={inputTAFieldProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default InputDoc;
