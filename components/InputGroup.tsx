import { Input } from '@chakra-ui/react'
import { HTMLInputTypeAttribute } from 'react'

export const InputGroup = ({
  label,
  name,
  type = 'text',
  required = false,
  defaultValue = '',
}: {
  label: string
  name: string
  type?: HTMLInputTypeAttribute
  required?: boolean
  defaultValue?: string
}) => {
  return (
    <div className="mb-6">
      <label className="block font-bold mb-2">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <Input defaultValue={defaultValue} type={type} name={name} required={required} className="px-4 py-3 w-full" />
    </div>
  )
}
