import React from 'react';

interface Props {
  name: string;
  price: number;
}

const CrystalCategoryItem = ({name, price}: Props) => {
  return (
    <div className='bg-white text-emerald-400 border border-emerald-400 p-4 m-2'>
      {name}
      {price}
    </div>
  );
};

export default CrystalCategoryItem;
