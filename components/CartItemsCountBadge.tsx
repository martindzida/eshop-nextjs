import React from 'react'

interface Props {
    count: number
}


const CartItemsCountBadge = (props: Props) => {
  return (
    <span className='bg-sky-400 text-white'>
        {props.count}
    </span>
  )
}

export default CartItemsCountBadge