export const Row = ({ children, columns = 3 }) => {
  const styles = `grid grid-cols-1 lg:grid-cols-${columns} gap-4 lg:gap-10`
  return <div className={styles}>{children}</div>
}
