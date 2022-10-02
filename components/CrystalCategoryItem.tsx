import React from 'react'

interface Props {
    name: string,
    price: number
}

const CrystalCategoryItem = (props: Props) => {
  return (
    <div className='bg-white text-emerald-400 border border-emerald-400 p-4 m-2'>
        {props.name}
        {props.price}
    </div>
  )
}

export default CrystalCategoryItem