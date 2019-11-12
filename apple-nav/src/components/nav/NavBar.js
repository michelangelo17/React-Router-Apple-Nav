import React from 'react'
import { Route, Link } from 'react-router-dom'
import NavItem from './navItem/NavItem'

const NavBar = props => {
  const menuItems = props.menuItems
  return (
    <>
      {menuItems.map(({ name, id }) => (
        <Link to={`/${id}`} key={id}>
          {name}
        </Link>
      ))}
      <Route
        path='/:id'
        render={props => <NavItem {...props} menuItems={menuItems} />}
      />
    </>
  )
}

export default NavBar
