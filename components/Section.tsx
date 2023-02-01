import React from 'react';

type SectionType = 'primary' | 'secondary';

const sectionType = {
  primary: 'bg-primary-300',
  secondary: 'bg-secondary-900 text-white',
};

export const Section = ({ children, type }: { children: React.ReactNode; type?: SectionType }) => {
  return <section className={`container mx-auto px-4 py-8 ${type ? sectionType[type] : null}`}>{children}</section>;
};
