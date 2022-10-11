import React from 'react';

interface Props {
  name: string;
  description?: string;
  price: number;
  quantity: number;
}

const CrystalInfoPanel = ({name, description, price, quantity}: Props) => {
  return (
    <div className='text-center p-4'>
      <div className='bg-white text-emerald-400 p-8'>
        <h1 className='text-4xl font-bold'>{name}</h1>
      </div>
      <div>
        <p className='font-mono text-emerald-400'>{description}</p>
      </div>
      <div className='p-4'>
        <div className='text-emerald-400 text-lg font-semibold p-2'>
          <span>{price} €</span>
        </div>
        <div className='text-emerald-400 text-lg font-semibold p-2'>
          <span>{quantity} left</span>
        </div>
      </div>
    </div>
  );
};

export default CrystalInfoPanel;
