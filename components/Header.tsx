import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className='text-center px-10 py-20'>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl text-emerald-400 font-extrabold p-12'>Crystalbase</h1>
      </div>
      <section>
        <div className='flex flex-col items-center font-bold text-white bg-gradient-to-b from-emerald-400 via-green-400 to-cyan-500 px-10 py-24'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center p-10'>Best Virtual Crystals Marketplace</h2>
          <p className='text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, necessitatibus.</p>
          <div className='p-14'>
            <Link href='/crystals'>
              <a className='inline-block bg-white text-emerald-400 text-xl font-bold rounded-lg p-3 transition ease-in-out duration-300 hover:scale-105 hover:bg-indigo-400 hover:text-white'>
                Show me more
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

