import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaLongArrowAltLeft } from 'react-icons/fa'
import { CONTAINER_HORIZONTAL_PADDING } from '../theme/spacing'

const Logo = () => {
  return (
    <Link href="/">
      <img src="/reclaim-land-solutions-logo.png" alt="Reclaim Land Solutions LTD" className="mx-auto w-52" />
    </Link>
  )
}

const MenuItem = ({ href, children }: { href: string; children: string }) => {
  return (
    <li className="p-10 lg:p-0 lg:px-6">
      <Link
        className="transition duration-100 block text-white lg:text-black hover:text-gray-400 font-bold text-5xl lg:text-lg"
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false)

  const NavButton = () => {
    return (
      <button
        className={`lg:hidden ml-auto mr-6 text-2xl ${isMenuVisible && 'text-white text-3xl'}`}
        onClick={() => setMenuVisible(!isMenuVisible)}
      >
        {isMenuVisible ? <FaLongArrowAltLeft /> : <FaBars />}
      </button>
    )
  }

  return (
    <div className="lg:flex lg:justify-center">
      <header
        className={`shadow p-4 relative lg:fixed lg:z-[100] lg:w-full lg:bg-white/90 ${CONTAINER_HORIZONTAL_PADDING}`}
      >
        <div className="lg:mx-auto lg:container lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-center lg:justify-between">
            <Logo />
            {!isMenuVisible && <NavButton />}
          </div>

          <nav
            className={`transition duration-200 fixed h-full w-full inset-0 ${
              isMenuVisible ? 'visible z-50' : 'invisible'
            } lg:visible lg:z-auto lg:relative lg:flex lg:items-center lg:h-auto lg:w-auto lg:mr-12`}
          >
            <div
              className="lg:hidden bg-primary-900 opacity-90 absolute inset-0 w-full h-full"
              onClick={() => setMenuVisible(false)}
            />
            {isMenuVisible && (
              <div className="absolute top-6 right-0 z-[70] lg:hidden">
                <NavButton />
              </div>
            )}
            <ul className="relative z-[60] mt-10 lg:flex lg:ml-auto lg:mt-0">
              <MenuItem href="/">Home</MenuItem>
              <MenuItem href="/about">About</MenuItem>
              <MenuItem href="/services">Services</MenuItem>
              <MenuItem href="/contact">Contact</MenuItem>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}
