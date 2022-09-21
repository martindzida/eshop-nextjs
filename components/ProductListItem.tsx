import React from 'react'

interface Props {
    name: string,
    description?: string,
    quantity: number,
    price: number,
}


const ProductListItem = (props: Props) => {
  return (
    <div className='flex flex-col border border-emerald-400 p-8 mx-4'>
        <div>
            <h3 className='text-emerald-400 text-lg'>{props.name}</h3>
        </div>
        <div>
            <p className='text-sm'>{props.description}</p>
        </div>
        <button className='bg-white text-emerald-400 hover:bg-emerald-400 hover:text-white font-medium border border-emerald-400 p-2 uppercase'>Purchase</button>
    </div>
  )
}

export default ProductListItem