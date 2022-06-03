import React from 'react';
import classnames from 'classnames';
import StyledWrapper from './StyledWrapper';
import { useRouter } from 'next/router'
import Link from 'next/link';

const Header = () => {
  const {
    route
  } = useRouter();

  console.log(route);

  const getClassName = (menu) => {
    return classnames({
      'active': route === `/${menu}`
    });
  };

  return (
    <StyledWrapper className="w-full site-navbar">
      <div>
        <header className="flex items-center py-3">
          <Link href="/">
            <a className="font-bold anoop">anoop</a>
          </Link>
          <nav className='flex flex-grow justify-end'>
            <Link href="/">
              <a className={getClassName('')}>blog</a>
            </Link>
            {/* <Link href="/projects">
              <a className={getClassName('projects')}>projects</a>
            </Link> */}
            <Link href="/extras">
              <a className={getClassName('extras')}>extras</a>
            </Link>
            <Link href="/resume">
              <a className={getClassName('resume')}>resume</a>
            </Link>
            <Link href="/about">
              <a className={getClassName('about')}>about</a>
            </Link>
          </nav>
        </header>
      </div>
    </StyledWrapper>
  )
};

export default Header;
