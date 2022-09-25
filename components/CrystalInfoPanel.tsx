import React from 'react'

interface Props {
    name: string,
    description?: string,
    price: number,
    quantity: number
}


const CrystalInfoPanel = (props: Props) => {
  return (
    <div className='text-left p-4'>
      <div className='bg-white text-emerald-400'>
        <h2 className='text-xl font-bold'>{props.name}</h2>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
      <div>
        <span>{props.price}</span>
      </div>
      <div>
        <span>{props.quantity}</span>
      </div>
    </div>
  )
}

export default CrystalInfoPanel