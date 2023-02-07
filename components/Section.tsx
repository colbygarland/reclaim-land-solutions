import React from 'react';
import { CONTAINER_HORIZONTAL_PADDING } from '../theme/spacing';

type SectionType = 'primary' | 'secondary';
type SectionPadding = 'none' | 'top' | 'bottom' | 'default';

const sectionType = {
  primary: 'bg-primary-300',
  secondary: 'bg-secondary-900 text-white',
};

function getVerticalPadding(padding: SectionPadding) {
  switch (padding) {
    case 'none':
      return '';
    case 'top':
      return 'pt-8 lg:pt-32';
    case 'bottom':
      return 'pb-8 lg:pb-32';
    default:
      return 'py-8 lg:py-32';
  }
}

export const Section = ({
  children,
  type,
  padding = 'default',
}: {
  children: React.ReactNode;
  type?: SectionType;
  padding?: SectionPadding;
}) => {
  return (
    <section
      className={`container mx-auto ${CONTAINER_HORIZONTAL_PADDING} ${getVerticalPadding(padding)} ${
        type ? sectionType[type] : null
      }`}
    >
      {children}
    </section>
  );
};
