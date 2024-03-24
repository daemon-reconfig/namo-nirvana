// floating navbar
import React from 'react'
import { FloatingNav } from './ui/floating-nav'

function Navbar() {
  return (
    <FloatingNav
      navItems={[
        {
          name: 'Home',
          link: '/',
        },
        {
          name: 'About',
          link: '/about',
        },
        {
          name: 'Services',
          link: '/services',
        },
        {
          name: 'Contact',
          link: '/contact',
        },
      ]}
      
    />

  )
}

export default Navbar