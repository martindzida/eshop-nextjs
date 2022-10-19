import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SessionProvider} from 'next-auth/react';
import type {Session} from 'next-auth';
import {CartContext} from '../utils/CartContext';
import {useState} from 'react';

const queryClient = new QueryClient();

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <CartContext.Provider value={{cartItems, setCartItems}}>
          <Component {...pageProps} />
        </CartContext.Provider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;

