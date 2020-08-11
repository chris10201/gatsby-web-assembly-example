import React from "react"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </>
  )
}

export default Layout
