import React from 'react';
import { CONTAINER_HORIZONTAL_PADDING, CONTAINER_VERTICAL_PADDING } from '../theme/spacing';

type SectionType = 'primary' | 'secondary';

const sectionType = {
  primary: 'bg-primary-300',
  secondary: 'bg-secondary-900 text-white',
};

export const Section = ({ children, type }: { children: React.ReactNode; type?: SectionType }) => {
  return (
    <section
      className={`container mx-auto ${CONTAINER_HORIZONTAL_PADDING} ${CONTAINER_VERTICAL_PADDING} ${
        type ? sectionType[type] : null
      }`}
    >
      {children}
    </section>
  );
};
