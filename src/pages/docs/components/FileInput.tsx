import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { FileInputTA, FileInputTADropzone, FileInputTAIcon, FileInputTAText, FileInputTAButton } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const FileInput = () => {
  const importCode = `import { FileInputTA, FileInputTADropzone, FileInputTAIcon, FileInputTAText, FileInputTAButton } from '@true-armor/ta-atoms2-public';`;
  const usageCode = `<FileInputTA accept="image/*">
  <FileInputTADropzone>
    <FileInputTAIcon />
    <FileInputTAText 
      mainText="Click to upload" 
      subText="SVG, PNG, JPG or GIF (MAX. 800x400px)" 
    />
    <FileInputTAButton label="Browse File" />
  </FileInputTADropzone>
</FileInputTA>`;

  // FileInputTA props
  const fileInputTAProps = [
    {
      name: 'accept',
      type: 'string',
      default: 'undefined',
      description: 'File types accepted (e.g., "image/*", ".pdf,.doc").',
    },
    {
      name: 'multiple',
      type: 'boolean',
      default: 'false',
      description: 'Whether multiple files can be selected.',
    },
    {
      name: 'onChange',
      type: '(files: FileList | null) => void',
      default: 'undefined',
      description: 'Callback function triggered when files are selected.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the file input is disabled.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'FileInputTADropzone component as child.',
    },
  ];

  // FileInputTADropzone props
  const fileInputTADropzoneProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'FileInputTAIcon, FileInputTAText, and FileInputTAButton components as children.',
    },
  ];

  // FileInputTAIcon props
  const fileInputTAIconProps = [
    {
      name: 'icon',
      type: 'React.ComponentType',
      default: 'undefined',
      description: 'Optional custom icon component (defaults to upload icon if not provided).',
    },
  ];

  // FileInputTAText props
  const fileInputTATextProps = [
    {
      name: 'mainText',
      type: 'string',
      default: '"Click to upload"',
      description: 'Main text displayed in the dropzone.',
    },
    {
      name: 'subText',
      type: 'string',
      default: 'undefined',
      description: 'Subtitle or helper text displayed below the main text.',
    },
  ];

  // FileInputTAButton props
  const fileInputTAButtonProps = [
    {
      name: 'label',
      type: 'string',
      default: '"Browse"',
      description: 'Label text for the browse button.',
    },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">FileInputTA</h1>
          <p className="text-gray-600 mb-4">Simple file input control.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <FileInputTA accept="image/*">
              <FileInputTADropzone>
                <FileInputTAIcon />
                <FileInputTAText 
                  mainText="Click to upload" 
                  subText="SVG, PNG, JPG or GIF (MAX. 800x400px)" 
                />
                <FileInputTAButton label="Browse File" />
              </FileInputTADropzone>
            </FileInputTA>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">FileInputTA</h3>
            <PropsTable props={fileInputTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">FileInputTADropzone</h3>
            <PropsTable props={fileInputTADropzoneProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">FileInputTAIcon</h3>
            <PropsTable props={fileInputTAIconProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">FileInputTAText</h3>
            <PropsTable props={fileInputTATextProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">FileInputTAButton</h3>
            <PropsTable props={fileInputTAButtonProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default FileInput;
