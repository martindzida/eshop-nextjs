import React from 'react'

interface Props {
    name: string,
    description?: string,
    price: number,
    quantity: number
}


const CrystalInfoPanel = (props: Props) => {
  return (
    <div className='text-center p-4'>
      <div className='bg-white text-emerald-400 p-8'>
        <h1 className='text-4xl font-bold'>{props.name}</h1>
      </div>
      <div>
        <p className='font-mono text-emerald-400'>{props.description}</p>
      </div>
      <div className='p-4'>
        <div className='text-emerald-400 text-lg font-semibold p-2'>
          <span>{props.price} €</span>
        </div>
        <div className='text-emerald-400 text-lg font-semibold p-2'>
          <span>{props.quantity} left</span>
        </div>
      </div>
    </div>
  )
}

export default CrystalInfoPanel