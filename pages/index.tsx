import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../components/Navbar'


const Home: NextPage = () => {

  //fColor palette: !emerald-400, green-400, sky-400

  return (
    <div>
      <Head>
        <title>Crystalbase</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='text-center px-10 py-12'>
        <h1 className='text-5xl sm:text-6xl font-extrabold text-emerald-400'>Crystalbase</h1>
      </div>
      <section>
        <div className='flex flex-col text-white items-center bg-gradient-to-b from-emerald-400 via-green-400 to-sky-400 px-10 py-20'>
          <p className='text-xl font-bold text-center p-4'>Best virtual crystals marketplace!</p>
          <Link href='/crystals'>
            <a className='bg-white text-emerald-400 font-semibold p-2'>Show me more</a>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
