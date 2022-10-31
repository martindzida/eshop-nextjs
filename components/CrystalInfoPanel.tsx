import React from 'react';
import Image from 'next/image';

interface Props {
  name: string;
  image: string;
  description: string;
  price: number;
}

const CrystalInfoPanel = ({name, image, description, price}: Props) => {
  return (
    <div className='flex items-center gap-16 p-20'>
      <div className='flex flex-col items-center p-10'>
        <h1 className='font-extrabold text-5xl p-8 text-emerald-400'>{name}</h1>
        <Image src={image} alt={name} width={200} height={200} />
      </div>
      <div className='p-8 bg-emerald-400 text-white rounded-xl font-semibold text-lg'>
        <p className='text-left font-inter'>
          <span className='font-bold text-xl'>About:</span>
          <br /> {description}
        </p>
        <div className='p-4'>
          <div className='flex items-center gap-8 p-2'>
            <span>Price: {price} €</span>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrystalInfoPanel;

