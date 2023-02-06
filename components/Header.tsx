import Link from 'next/link';
import { useState } from 'react';
import { FaLongArrowAltLeft, FaStream } from 'react-icons/fa';

const Logo = () => {
  return (
    <Link href="/">
      <img src="/reclaim-land-solutions-logo.png" alt="Reclaim Land Solutions LTD" className="mx-auto w-52" />
    </Link>
  );
};

const MenuItem = ({ href, children }: { href: string; children: string }) => {
  return (
    <li className="p-10">
      <Link className="transition duration-100 block text-white hover:text-gray-400 font-bold text-5xl" href={href}>
        {children}
      </Link>
    </li>
  );
};

export const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const NavButton = () => {
    return (
      <button
        className={`ml-auto mr-6 text-2xl ${isMenuVisible && 'text-white text-3xl'}`}
        onClick={() => setMenuVisible(!isMenuVisible)}
      >
        {isMenuVisible ? <FaLongArrowAltLeft /> : <FaStream />}
      </button>
    );
  };

  return (
    <header className="py-4 relative">
      <div className="flex items-center justify-center">
        <Logo />
        {!isMenuVisible && <NavButton />}
      </div>

      <nav
        className={`transition duration-200 fixed h-full w-full inset-0  ${
          isMenuVisible ? 'visible z-50' : 'invisible'
        }`}
      >
        <div
          className="bg-primary-900 opacity-90 absolute inset-0 w-full h-full"
          onClick={() => setMenuVisible(false)}
        />
        {isMenuVisible && (
          <div className="absolute top-6 right-0 z-[70]">
            <NavButton />
          </div>
        )}
        <ul className="relative z-[60] mt-10">
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/services">Services</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
        </ul>
      </nav>
    </header>
  );
};
