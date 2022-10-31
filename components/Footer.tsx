import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <section>
      <div className='flex justify-center font-mono border border-t-1 p-20'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <a className='text-emerald-400'>Home</a>
          </Link>
          <span>Created by: Martin Dzida</span>
          <a href='https://github.com/martindzida' className='hover:text-emerald-400'>
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

