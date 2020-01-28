import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { images } from 'Utilities/common'
import { Link } from 'react-router-dom'

export default () => {
  const [activeItem, setActiveItem] = useState('')

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <Menu stackable size="huge" fluid>
      <Menu.Item style={{ fontSize: 'xx-large', padding: '0.5em' }}>
        <img
          src={images.toska_color}
          style={{ marginRight: '1em' }}
          alt="tosca"
        />{' '}
        Course Data Analysis
      </Menu.Item>

      <Menu.Item
        position="right"
        as={Link}
        to={'/'}
        name="correlations"
        active={activeItem === 'correlations'}
        onClick={handleItemClick}
      >
        Course correlations
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={'/grades'}
        name="grades"
        active={activeItem === 'grades'}
        onClick={handleItemClick}
      >
        Grade estimates
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={'/info'}
        name="info"
        active={activeItem === 'info'}
        onClick={handleItemClick}
      >
        Project info
      </Menu.Item>
    </Menu>
  )
}
