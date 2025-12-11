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

  const props = [
    { name: 'value', type: 'Date', description: 'Selected date' },
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
          <PropsTable props={props} />
        </div>
      </div>
    </DocsLayout>
  );
};

export default DatePickerDoc;
