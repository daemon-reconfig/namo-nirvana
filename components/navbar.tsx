// floating navbar
import React from 'react'
import { FloatingNav } from './ui/floating-nav'

function Navbar() {
  return (
    <div className='md:hidden'>
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
    </div>

  )
}

export default Navbar