import React from "react";
import StyledWrapper from './StyledWrapper';
import Link from 'next/link';

const Navbar = () => {
  return (
    <StyledWrapper className="w-full site-navbar">
      <div>
        <header className="flex items-center py-4 px-4">
          <Link href="/">
            <a className="font-bold anoop pr-4">anoop</a>
          </Link>
          <nav className='flex'>
            <Link href="/projects">
              <a className="">projects</a>
            </Link>
            <Link href="/work">
              <a className="">work</a>
            </Link>
            <Link href="/contact">
              <a className="">contact</a>
            </Link>
          </nav>
        </header>
      </div>
    </StyledWrapper>
  )
};

export default Navbar;
