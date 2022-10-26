import React from 'react';
import CrystalListItem from './CrystalListItem';
import {Crystal} from '@prisma/client';

interface Props {
  crystals: Crystal[];
}

const CrystalsList = ({crystals}: Props) => {
  return (
    <div className='md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col justify-around gap-8 p-12 my-8'>
      {crystals.map((crystal: Crystal) => (
        <CrystalListItem key={crystal.id} id={crystal.id} name={crystal.name} image={crystal.image} />
      ))}
    </div>
  );
};

export default CrystalsList;

