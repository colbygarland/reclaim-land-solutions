import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <img src="/reclaim-land-solutions-logo.png" alt="Reclaim Land Solutions LTD" className="mx-auto w-52" />
    </Link>
  );
};

export const Header = () => {
  return (
    <header className="py-4">
      <Logo />
    </header>
  );
};
