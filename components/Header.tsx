import Link from 'next/link'
import { useRouter } from 'next/router'
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

const MenuItem = ({ href, children, onClick }: { href: string; children: string; onClick: () => void }) => {
  const router = useRouter()
  // if active menu item, we want a nice branded color
  const textColor = router.asPath === href ? 'text-gray-400 lg:text-primary-500' : 'text-white lg:text-black'
  return (
    <li className="p-10 lg:p-0 lg:px-6">
      <Link
        className={`transition duration-100 block ${textColor} hover:text-gray-400 font-bold text-5xl lg:text-lg`}
        href={href}
        onClick={onClick}
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

  const closeMenu = () => {
    setMenuVisible(false)
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
              <MenuItem onClick={closeMenu} href="/">
                Home
              </MenuItem>
              <MenuItem onClick={closeMenu} href="/about">
                About
              </MenuItem>
              <MenuItem onClick={closeMenu} href="/services">
                Services
              </MenuItem>
              <MenuItem onClick={closeMenu} href="/contact">
                Contact
              </MenuItem>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}
