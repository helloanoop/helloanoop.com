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
          <Link href="/" className="font-medium anoop">anoop</Link>
          <nav className='flex flex-grow justify-end'>
            <Link href="/blog" className={getClassName('blog')}>blog</Link>
            <Link href="/reviews" className={getClassName('reviews')}>reviews</Link>
            <Link href="/opensource" className={getClassName('opensource')}>opensource</Link>
            <Link href="/extras" className={getClassName('extras')}>extras</Link>
            <Link href="/resume" className={getClassName('resume')}>resume</Link>
          </nav>
        </header>
      </div>
    </StyledWrapper>
  )
};

export default Header;
