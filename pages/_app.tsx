import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SessionProvider} from 'next-auth/react';
import type {Session} from 'next-auth';
import {CartContext} from '../utils/CartContext';
import {UserContext} from '../utils/UserContext';
import {useState} from 'react';

const queryClient = new QueryClient();

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({});
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{user, setUser}}>
          <CartContext.Provider value={{cartItems, setCartItems}}>
            <Component {...pageProps} />
          </CartContext.Provider>
        </UserContext.Provider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;

