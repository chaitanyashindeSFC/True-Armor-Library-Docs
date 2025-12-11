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

  const props = [
    { name: 'id', type: 'string', description: 'Input id' },
    { name: 'label', type: 'string', description: 'Label text' },
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
          <PropsTable props={props} />
        </div>
      </div>
    </DocsLayout>
  );
};

export default InputDoc;
