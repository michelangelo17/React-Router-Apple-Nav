import React from 'react'

const SubNavItem = props => {
  console.log(props);
  const subMenuName = props.menuItems.find(
    ({ id }) => id === props.match.params.id
  )
  console.log(subMenuName)
  return (
    <div>
      <h1>This is the {subMenuName.name} page!</h1>
    </div>
  )
}

export default SubNavItem;