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
            <a className="font-medium anoop">anoop</a>
          </Link>
          <nav className='flex flex-grow justify-end'>
            <Link href="/blog">
              <a className={getClassName('blog')}>blog</a>
            </Link>
            <Link href="/reviews">
              <a className={getClassName('reviews')}>reviews</a>
            </Link>
            <Link href="/opensource">
              <a className={getClassName('opensource')}>opensource</a>
            </Link>
            <Link href="/extras">
              <a className={getClassName('extras')}>extras</a>
            </Link>
            <Link href="/resume">
              <a className={getClassName('resume')}>resume</a>
            </Link>
          </nav>
        </header>
      </div>
    </StyledWrapper>
  )
};

export default Header;
