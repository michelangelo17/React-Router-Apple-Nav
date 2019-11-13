import React from 'react'
import { Route, Link } from 'react-router-dom'
import NavItem from './navItem/NavItem'

const NavBar = props => {
  const menuItems = props.menuItems
  return (
    <div className='top-menu'>
      {menuItems.map(({ name, id }) => (
        <Link to={`/${id}`} key={id}>
          {name}
        </Link>
      ))}
      <Route
        path='/:id'
        render={props => <NavItem {...props} menuItems={menuItems} />}
      />
    </div>
  )
}

export default NavBar
