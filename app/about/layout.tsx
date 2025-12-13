const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Custom Layout</h1>
      {children}
    </div>
  )
}

export default Layout