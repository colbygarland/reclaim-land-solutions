export const P = ({ children, styles }: { children: React.ReactNode; styles?: string }) => {
  return <p className={`text-lg leading-7 mb-4 ${styles}`}>{children}</p>
}

export const Ul = ({ items }: { items: string[] }) => {
  return (
    <ul className="text-lg list-disc pl-8">
      {items.map((item) => (
        <li className="mb-2">{item}</li>
      ))}
    </ul>
  )
}
