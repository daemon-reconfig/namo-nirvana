"use client"
import { HoveredLink, Menu, MenuItem } from '@/components/ui/nav';
import { cn } from '@/lib/utils';
import React, { useState } from 'react'

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
            <HoveredLink setActive={setActive} href="#about" >About</HoveredLink>
            <HoveredLink setActive={setActive} href="#rover" >Rover</HoveredLink>
            <HoveredLink setActive={setActive} href="#achievements" >Achievements</HoveredLink>
            <HoveredLink setActive={setActive} href="#team" >Our Team</HoveredLink>
          </Menu>
      </div>
    );
  }

  export default Navbar;