import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import CrystalInfoPanel from '../../components/CrystalInfoPanel'
import CrystalCategoryItem from '../../components/CrystalCategoryItem'
import useGetCrystal from '../../utils/useGetCrystal'
import LoadingPage from '../../components/LoadingPage'

const Product: NextPage = () => {
  const crystal = useGetCrystal('3')

  if (crystal.isLoading) {
    return <LoadingPage />
  }

  if (crystal.isError) {
    return <div>Error</div>
  }

  const {name, description, price, image, quantity} = crystal.data


  return (
    <div>
      <Head>
        <title>Crystals</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='px-12 py-16'>
          <Image src={image} alt={name} width={100} height={100} layout='responsive' />
          <CrystalInfoPanel name={name} description={description} price={price} quantity={quantity}/>
          <div className='text-center p-4 m-2'>
            <button className='bg-white hover:bg-emerald-400 text-emerald-400 hover:text-white border border-emerald-400 uppercase font-semibold p-2'>Add to cart</button>
          </div>
          <div className='bg-white text-emerald-400 text-xl text-center font-bold pt-8 p-4'>
            <h3>You may also like:</h3>
            <CrystalCategoryItem name="Ruby" price={99}/>
          </div>
      </div>
    </div>
  )
}

export default Product