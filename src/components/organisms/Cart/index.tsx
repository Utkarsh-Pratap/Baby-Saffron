'use client';
import { useAppSelector } from '@/lib/hooks/redux.hook';
import { AnimatePresence } from 'framer-motion';
import CartModal from '../../molecules/models/CartModal';

const Cart = () => {
  const { showCart } = useAppSelector((state) => state.cart);

  return <AnimatePresence>{showCart && <CartModal />}</AnimatePresence>;
};

export default Cart;
