import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import ProductListItem from '../components/ProductListItem'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eshop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
    <div className='text-emerald-400 text-center px-8 pt-12'>
      <h2 className='text-4xl font-bold'>Product Items List</h2>
    </div>
    <div className='flex justify-around p-12'>
      <ProductListItem id={0} name='Cat' />
      <ProductListItem id={1} name='Cat' />
    </div>
    </div>
  )
}

export default Home
