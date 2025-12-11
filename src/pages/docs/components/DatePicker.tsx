import React, { useState } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { DatePickerTA, DatePickerTAInput, DatePickerTACalendar } from '@true-armor/ta-atoms2-public';
import CodeBlock from '@/components/CodeBlock';
import PropsTable from '@/components/PropsTable';

const DatePickerDoc = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const importCode = `import { DatePickerTA, DatePickerTAInput, DatePickerTACalendar } from '@true-armor/ta-atoms2-public';`;
  const usageCode = `const [selectedDate, setSelectedDate] = useState<Date | null>(null);

<DatePickerTA initialDate={selectedDate || new Date()} onDateChange={(date) => setSelectedDate(date)}>
  <DatePickerTAInput placeholder="Select date" />
  <DatePickerTACalendar />
</DatePickerTA>`;

  // DatePickerTA props
  const datePickerTAProps = [
    {
      name: 'initialDate',
      type: 'Date',
      default: 'new Date()',
      description: 'Initial date value for the date picker.',
    },
    {
      name: 'onDateChange',
      type: '(date: Date | null) => void',
      default: 'undefined',
      description: 'Callback function triggered when the date selection changes.',
    },
    {
      name: 'children',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'DatePickerTAInput and DatePickerTACalendar components as children.',
    },
  ];

  // DatePickerTAInput props
  const datePickerTAInputProps = [
    {
      name: 'placeholder',
      type: 'string',
      default: '"Select date"',
      description: 'Placeholder text displayed in the input field.',
    },
    {
      name: 'value',
      type: 'string',
      default: 'undefined',
      description: 'Controlled value of the input field (formatted date string).',
    },
    {
      name: 'onChange',
      type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
      default: 'undefined',
      description: 'Callback function triggered when the input value changes.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the input field is disabled.',
    },
  ];

  // DatePickerTACalendar props
  const datePickerTACalendarProps = [
    {
      name: 'selectedDate',
      type: 'Date | null',
      default: 'undefined',
      description: 'Currently selected date in the calendar.',
    },
    {
      name: 'onDateSelect',
      type: '(date: Date) => void',
      default: 'undefined',
      description: 'Callback function triggered when a date is selected in the calendar.',
    },
    {
      name: 'minDate',
      type: 'Date',
      default: 'undefined',
      description: 'Minimum selectable date.',
    },
    {
      name: 'maxDate',
      type: 'Date',
      default: 'undefined',
      description: 'Maximum selectable date.',
    },
  ];

  return (
    <DocsLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">DatePickerTA / CalendarTA</h1>
          <p className="text-gray-600 mb-4">Date picker and calendar components.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <div className="mb-4"><CodeBlock code={importCode} language="typescript" /></div>
          <div className="mb-4"><CodeBlock code={usageCode} language="tsx" /></div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="p-4 border rounded-lg bg-white">
            <DatePickerTA initialDate={selectedDate || new Date()} onDateChange={(date) => setSelectedDate(date)}>
              <DatePickerTAInput placeholder="Select date" />
              <DatePickerTACalendar />
            </DatePickerTA>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DatePickerTA</h3>
            <PropsTable props={datePickerTAProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DatePickerTAInput</h3>
            <PropsTable props={datePickerTAInputProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">DatePickerTACalendar</h3>
            <PropsTable props={datePickerTACalendarProps} />
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default DatePickerDoc;
