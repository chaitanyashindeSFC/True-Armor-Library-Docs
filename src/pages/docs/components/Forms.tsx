import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { 
  InputTA, InputTALabel, InputTAField,
  CheckboxTA, CheckboxTAInput, CheckboxTALabel,
  FileInputTA, FileInputTADropzone, FileInputTAIcon, FileInputTAText, FileInputTAButton,
  DatePickerTA, DatePickerTAInput, DatePickerTACalendar
} from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const Forms = () => {
  const [name, setName] = useState('');
  const [agree, setAgree] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const importCode = `import { 
  InputTA, InputTALabel, InputTAField,
  CheckboxTA, CheckboxTAInput, CheckboxTALabel,
  DatePickerTA, DatePickerTAInput, DatePickerTACalendar
} from '@true-armor/atoms';`;

  const usageCode = `export default function FormDemo(){
  const [name, setName] = useState('');
  const [agree, setAgree] = useState(false);
  
  return (
    <div>
      <InputTA id="name" multiline={false}>
        <InputTALabel>Name</InputTALabel>
        <InputTAField 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </InputTA>
      <CheckboxTA checked={agree} onChange={setAgree}>
        <CheckboxTAInput />
        <CheckboxTALabel>Agree to terms</CheckboxTALabel>
      </CheckboxTA>
    </div>
  );
}`;

  const props = [
    { name: 'InputTA', type: 'id,label,value,onChange', description: 'Basic input field' },
    { name: 'CheckboxTA', type: 'label,checked,onChange', description: 'Checkbox control' },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Forms</h1>
           <p className="text-green-500 mb-4 text-sm bg-green-100 p-2 rounded-md">Please Refer <a href="https://formik.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://formik.org/</a> for more information on how to use forms with Formik. to use the forms with Formik, you can use the Formik component and pass the formik props to the formik component.</p>
          <p className="text-red-600 mb-4 text-sm bg-red-100 p-2 rounded-md">The package provides input primitives (InputTA, CheckboxTA, FileInputTA, DatePickerTA). There is no single `FormTA` composite — compose primitives to build forms.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white space-y-4">
            <InputTA id="name" multiline={false}>
              <InputTALabel>Name</InputTALabel>
              <InputTAField 
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
              />
            </InputTA>
            <CheckboxTA checked={agree} onChange={setAgree}>
              <CheckboxTAInput />
              <CheckboxTALabel>Agree to terms</CheckboxTALabel>
            </CheckboxTA>
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
            <DatePickerTA initialDate={selectedDate || new Date()} onDateChange={(date) => setSelectedDate(date)}>
              <DatePickerTAInput placeholder="Select date" />
              <DatePickerTACalendar />
            </DatePickerTA>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Notes</h2>
          <p className="text-muted-foreground">If you need a higher-level Form component, compose these primitives or use a form library (react-hook-form) with the provided inputs.</p>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Forms;
