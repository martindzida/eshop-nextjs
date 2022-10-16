import type {NextPage} from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import {useSession} from 'next-auth/react';
import Image from 'next/image';
import TransactionItem from '../components/TransactionItem';

const Orders: NextPage = () => {
  const {data: session, status} = useSession();

  return (
    <div>
      <Head>
        <title>My Profile</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <section>
        <div className='flex justify-around items-around p-32'>
          <h1 className='text-emerald-400 text-4xl font-extrabold p-4'>Profile Info</h1>
          <div className='basis-1/3 bg-emerald-400 p-16 rounded-xl'>
            {session?.user?.image && <Image src={session?.user?.image} width={80} height={80} className='rounded-full' />}
            <h2 className='font-bold text-xl text-white py-4'>{session?.user?.name}</h2>
            <span className='font-semibold text-white py-4'>{session?.user?.email}</span>
          </div>
          <div className='basis-2/3 flex flex-col items-center'>
            <h2 className='text-emerald-400 text-4xl font-extrabold p-4'>My Transactions</h2>
            <TransactionItem />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orders;
