import Link from 'next/link'
import React from 'react'

type ButtonType = 'primary' | 'secondary'

export const defaultButtonStyles = 'inline-block mt-4 mb-4 px-7 py-3 transition duration-150 text-white rounded'
export const buttonType = {
  primary: 'bg-primary-500 hover:bg-primary-700',
  secondary: 'bg-secondary-500 hover:bg-secondary-700',
}

export const Button = ({
  children,
  href,
  type = 'primary',
  ...props
}: {
  children: React.ReactNode
  type?: ButtonType
  href: string
  target?: string
}) => {
  return (
    <Link {...props} href={href} className={`${defaultButtonStyles} ${buttonType[type]}`}>
      {children}
    </Link>
  )
}
