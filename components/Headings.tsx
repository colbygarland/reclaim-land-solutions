import React from 'react';

export const H1 = ({ children, styles }: { children: React.ReactNode; styles?: string }) => {
  return <h1 className={`text-5xl lg:text-7xl mb-5 font-bold uppercase ${styles}`}>{children}</h1>;
};

export const H2 = ({ children, styles }: { children: React.ReactNode; styles?: string }) => {
  return <h2 className={`text-2xl mb-3 font-bold ${styles}`}>{children}</h2>;
};

export const H3 = ({ children, styles }: { children: React.ReactNode; styles?: string }) => {
  return <h3 className={`text-xl mb-3 font-bold text-primary-500 ${styles}`}>{children}</h3>;
};
