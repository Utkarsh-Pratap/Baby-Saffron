import TopHeader from '@/components/organisms/TopHeader';
import Cart from '@/components/organisms/Cart';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import React, { PropsWithChildren } from 'react';
import Auth from '@/components/organisms/Auth';

type Props = {} & PropsWithChildren;

const RootTemplate = ({ children }: Props) => {
  return (
    <>

      <Cart />
      <Auth />
      <TopHeader />
      <Navbar />
      {children}
      <Footer />
    
    </>
  );
};

export default RootTemplate;
