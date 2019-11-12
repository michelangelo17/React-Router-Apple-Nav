import React from 'react'

const SubNavItem = props => {
  const subMenuName = props.menuItems.find(
    ({ id }) => id === props.match.params.id
  )
  return (
    <div>
      <h1>This is the {subMenuName.name} page!</h1>
    </div>
  )
}

export default SubNavItem
