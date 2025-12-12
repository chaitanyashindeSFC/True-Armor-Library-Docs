import React, { useState } from "react";
import DocsLayout from "@/components/DocsLayout";
import {
  InputTA,
InputTALabel, InputTAField,InputTAError
} from "@true-armor/ta-atoms2-public";
import CodeBlock from "@/components/CodeBlock";
import PropsTable from "@/components/PropsTable";
import { Mail } from "lucide-react";
const InputDoc = () => {
  const importCode = `import {
  InputTA,
InputTALabel, InputTAField,InputTAError
} from "@true-armor/atoms";`;
  const usageCode = `  const [email, setEmail] = useState("");
  const [emailWithIcon, setEmailWithIcon] = useState("");
  const [emailWithError, setEmailWithError] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [remember, setRemember] = useState(false);;

      <section className="space-y-6 max-w-md p-6">
              {/* 1️⃣ Basic Email Input */}
              <InputTA id="email-basic">
                <InputTALabel>Your email</InputTALabel>
                <InputTAField
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputTA>

              {/* 2️⃣ Email with Right Icon */}
              <InputTA id="email-icon">
                <InputTALabel infoText="Enter your company email only">
                  Your email
                </InputTALabel>
                <InputTAField
                  type="email"
                  placeholder="name@example.com"
                  value={emailWithIcon}
                  onChange={(e) => setEmailWithIcon(e.target.value)}
                />
              </InputTA>

              {/* 3️⃣ Email With Error State */}
              <InputTA id="email-error">
                <InputTALabel>Your email</InputTALabel>
                <InputTAField
                  type="email"
                  placeholder="name@example.com"
                  rightIcon={<Mail size={18} />}
                  value={emailWithError}
                  onChange={(e) => setEmailWithError(e.target.value)}
                  error="Oh snapp! There was an error."
                />
                <InputTAError>Oh snapp! There was an error.</InputTAError>
              </InputTA>

              {/* 4️⃣ Password with Toggle & Remember Me */}
              <InputTA id="password">
                <InputTALabel>Your password</InputTALabel>
                <InputTAField
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  showPasswordToggle
                />
                <div className="flex justify-between text-sm items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={() => setRemember(!remember)}
                    />
                    Remember me
                  </label>
                  <button className="text-blue-600 hover:underline">
                    Forgot password?
                  </button>
                </div>
              </InputTA>

              {/* 5️⃣ Date Input with Icon */}
              <InputTA id="date">
                <InputTALabel>Revision Date*</InputTALabel>
                <InputTAField
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  // rightIcon={<Calendar size={18} />}
                />
              </InputTA>

              {/* 6️⃣ BONUS: Disabled State Example */}
              <InputTA id="password-disabled" disabled>
                <InputTALabel>Your password</InputTALabel>
                <InputTAField
                  type="password"
                  placeholder="A@25mom*"
                  value="A@25mom*"
                  disabled
                  showPasswordToggle
                />
                <div className="flex justify-between text-sm items-center">
                  <label className="flex items-center gap-2 opacity-50">
                    <input type="checkbox" disabled />
                    Remember me
                  </label>
                  <span className="text-gray-400">Forgot password?</span>
                </div>
              </InputTA>
            </section>`;

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
  const [email, setEmail] = useState("");
  const [emailWithIcon, setEmailWithIcon] = useState("");
  const [emailWithError, setEmailWithError] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [remember, setRemember] = useState(false);
  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">InputTA</h1>
          <p className="text-gray-600 mb-4">Text input primitive.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4">
            <CodeBlock code={importCode} language="typescript" />
          </div>
          <div className="mb-4">
            <CodeBlock code={usageCode} language="tsx" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border  bg-white space-y-4">
            <section className="space-y-6 max-w-md p-6">
              {/* 1️⃣ Basic Email Input */}
              <InputTA id="email-basic">
                <InputTALabel>Your email</InputTALabel>
                <InputTAField
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputTA>

              {/* 2️⃣ Email with Right Icon */}
              <InputTA id="email-icon">
                <InputTALabel infoText="Enter your company email only">
                  Your email
                </InputTALabel>
                <InputTAField
                  type="email"
                  placeholder="name@example.com"
                  value={emailWithIcon}
                  onChange={(e) => setEmailWithIcon(e.target.value)}
                />
              </InputTA>

              {/* 3️⃣ Email With Error State */}
              <InputTA id="email-error">
                <InputTALabel>Your email</InputTALabel>
                <InputTAField
                  type="email"
                  placeholder="name@example.com"
                  rightIcon={<Mail size={18} />}
                  value={emailWithError}
                  onChange={(e) => setEmailWithError(e.target.value)}
                  error="Oh snapp! There was an error."
                />
                <InputTAError>Oh snapp! There was an error.</InputTAError>
              </InputTA>

              {/* 4️⃣ Password with Toggle & Remember Me */}
              <InputTA id="password">
                <InputTALabel>Your password</InputTALabel>
                <InputTAField
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  showPasswordToggle
                />
                <div className="flex justify-between text-sm items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={() => setRemember(!remember)}
                    />
                    Remember me
                  </label>
                  <button className="text-blue-600 hover:underline">
                    Forgot password?
                  </button>
                </div>
              </InputTA>

              {/* 5️⃣ Date Input with Icon */}
              <InputTA id="date">
                <InputTALabel>Revision Date*</InputTALabel>
                <InputTAField
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  // rightIcon={<Calendar size={18} />}
                />
              </InputTA>

              {/* 6️⃣ BONUS: Disabled State Example */}
              <InputTA id="password-disabled" disabled>
                <InputTALabel>Your password</InputTALabel>
                <InputTAField
                  type="password"
                  placeholder="A@25mom*"
                  value="A@25mom*"
                  disabled
                  showPasswordToggle
                />
                <div className="flex justify-between text-sm items-center">
                  <label className="flex items-center gap-2 opacity-50">
                    <input type="checkbox" disabled />
                    Remember me
                  </label>
                  <span className="text-gray-400">Forgot password?</span>
                </div>
              </InputTA>
            </section>
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
