export const List = ({ items }: { items: React.ReactNode[] }) => {
  return (
    <ul className="list-disc pl-4 mb-4 lg:mb-8">
      {items.map((item, index) => (
        <li key={index} className="text-lg">
          {item}
        </li>
      ))}
    </ul>
  )
}
