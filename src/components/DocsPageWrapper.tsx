import React from 'react';
import DocsLayout from '@/components/DocsLayout';

interface DocsPageWrapperProps {
  children: React.ReactNode;
}

const DocsPageWrapper = ({ children }: DocsPageWrapperProps) => {
  return <DocsLayout>{children}</DocsLayout>;
};

export default DocsPageWrapper;