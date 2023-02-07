import React from 'react';

export const H1 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-5xl lg:text-7xl mb-5 font-bold uppercase">{children}</h1>;
};

export const H2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-2xl lg:text-4xl mb-3 font-bold">
      {children}
      <span className="block mt-2 mb-8 w-24 h-1 bg-primary-600" />
    </h2>
  );
};

export const H3 = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-xl mb-3 font-bold">{children}</h3>;
};

export const H4 = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg mb-3 font-bold">{children}</h3>;
};
