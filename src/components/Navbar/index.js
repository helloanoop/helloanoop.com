import React from "react";
import StyledWrapper from './StyledWrapper';
import Link from 'next/link';

const Navbar = () => {
  return (
    <StyledWrapper className="w-full site-navbar">
      <div>
        <header className="flex items-center py-3">
          <Link href="/">
            <a className="font-bold anoop pr-4">anoop</a>
          </Link>
          <nav className='flex flex-grow justify-end'>
            <Link href="/projects">
              <a>projects</a>
            </Link>
            <Link href="/work">
              <a>work</a>
            </Link>
            <Link href="/about">
              <a>about</a>
            </Link>
          </nav>
        </header>
      </div>
    </StyledWrapper>
  )
};

export default Navbar;
