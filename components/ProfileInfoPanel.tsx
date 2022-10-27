import React from 'react';
import Image from 'next/image';
import {User} from '@prisma/client';

const ProfileInfoPanel = ({name, email, image, balance}: User) => {
  return (
    <div className='p-10 text-white bg-emerald-300 rounded-lg'>
      {image ? <Image src={image} width={80} height={80} className='rounded-full' /> : null}
      <div className='flex flex-col'>
        <h2 className='font-bold text-xl py-4'>{name}</h2>
        <span className='font-semibold py-4'>{email}</span>
        <span className='font-semibold py-4'>Balance: {balance} €</span>
      </div>
    </div>
  );
};

export default ProfileInfoPanel;

