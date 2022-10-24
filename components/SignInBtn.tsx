import React from 'react';
import {signIn} from 'next-auth/react';

const SignInBtn = () => {
  return (
    <div className='px-2 hidden sm:block'>
      <button
        onClick={() => signIn()}
        className='transition ease-in-out duration-200 hover:bg-emerald-400 hover:text-white border border-emerald-400 rounded-lg px-4 py-2'
      >
        Sign in
      </button>
    </div>
  );
};

export default SignInBtn;

