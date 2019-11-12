import React from 'react'
import { Route, Link } from 'react-router-dom'
import SubNavItem from './subNavItem/SubNavItem'

const NavItem = props => {
  const subMenuName = props.menuItems.find(
    ({ id }) => id === props.match.params.id
  )
  const subMenu = subMenuName.subMenu
  return (
    <div>
      {!subMenu
        ? <div><h1>This is the {subMenuName.name} page!</h1></div>
        : subMenu.map(({ name, id }) => {
            return (
              <Link to={`${props.match.url}/${id}`} key={id}>
                {name}
              </Link>
            )
          })}

      <Route 
        path={`${props.match.path}/:id`}
        render={props => (
          <SubNavItem {...props} menuItems={subMenu} />
        )}
      />
    </div>
  )
}

export default NavItem
