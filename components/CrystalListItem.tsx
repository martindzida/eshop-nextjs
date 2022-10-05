import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cat from '../../../Downloads/poly-cat.png'

//TODO: product image
interface Props {
    id: number,
    name: string,
    image: string
}


const CrystalListItem = (props: Props) => {
  return (
    <div className='flex flex-col items-center text-center border border-emerald-400 p-8 mx-4 my-4'>
        <div className='p-4'>
            <h3 className='text-emerald-400 text-xl font-bold'>{props.name}</h3>
        </div>
        <div className='p-4 pb-6'>
          <Image src={props.image} alt="Product image" width={50} height={50} />
        </div>
        <Link href={`/crystals/${props.id}`}>
          <a className='bg-white text-emerald-400 hover:bg-emerald-400 hover:text-white hover:shadow-lg hover:shadow-emerald-400/50 font-medium border border-emerald-400 p-2 uppercase'>Purchase</a>
        </Link>
    </div>
  )
}

export default CrystalListItem