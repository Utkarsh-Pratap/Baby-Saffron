'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux.hook';
import { cartActions } from '@/lib/store/features/cartSlice';
import { IoIosArrowBack } from 'react-icons/io';
import EmptyCartIcon from '@/assets/icons/flowercart.svg';
import Image from 'next/image';
import ModalWrapper from '@/components/wrappers/ModalWrapper';

const EmptyCartBox = () => {
  return (
    <section className="flex-1 flex flex-col justify-center items-center gap-2">
      <Image
        src={EmptyCartIcon}
        alt="Flower cart"
        className="h-28 w-auto"
      />
      <p className="font-medium">Your cart is empty</p>
      <button
        type="button"
        className="border rounded-xl font-medium px-10 py-4 text-primary-red border-primary-red transition-all hover:bg-primary-red hover:text-white"
      >
        Shop Here
      </button>
    </section>
  );
};

const CartModal = () => {
  const dispatch = useAppDispatch();
  const { totalQuantity } = useAppSelector((state) => state.cart);
  const closeCart = () => dispatch(cartActions.closeCart());

  return (
    <ModalWrapper
      closeModalFn={closeCart}
      id="cartModal"
      openDirection="right"
    >
      <section className="relative p-6 flex flex-col w-full h-full">
        <button
          type="button"
          onClick={closeCart}
          className="outline-none uppercase self-start text-[#a5a5a9] flex items-center gap-2 font-medium"
        >
          Close <IoIosArrowBack className="rotate-180" />
        </button>

        {totalQuantity === 0 && <EmptyCartBox />}
      </section>
    </ModalWrapper>
  );
};

export default CartModal;
