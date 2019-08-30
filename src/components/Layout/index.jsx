import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

export default ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <div>
      <Link to="/">
        <h3>{title}</h3>
      </Link>
      <Link to="/about/">About</Link>
      {children}
    </div>
  )
}
