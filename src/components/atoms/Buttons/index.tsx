'use client';
import { HiMenuAlt1 } from 'react-icons/hi';
import SearchIcon from '@/assets/icons/search-icon.svg';
import CartIcon from '@/assets/icons/basket-icon.svg';
import Image from 'next/image';
import UserIcon from '@/assets/icons/profile-Icon.svg';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux.hook';
import { cartActions } from '@/lib/store/features/cartSlice';
import { AnimatePresence } from 'framer-motion';
import { MouseEvent, PropsWithChildren, useState } from 'react';
import SmallScreenMenuModal from '@/components/molecules/models/SmallScreenMenuModal';
import Link from 'next/link';
import { authActions } from '@/lib/store/features/authSlice';
import { useRouter } from 'next/navigation';
import { log } from '@/lib/utils/log';

export const CartButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(cartActions.openCart())}
      className="relative outline-none"
    >
      <Image
        src={CartIcon}
        alt="search button"
        className="w-7 h-auto"
      />

      <span className="flex absolute right-[-10px] top-[1px] text-xs w-4 items-center justify-center bg-primary-red text-white font-bold aspect-square rounded-full">
        0
      </span>
    </button>
  );
};

export const MenuButton = () => {
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setShowMenuPopup(true)}
        className="text-4xl text-primary-red outline-none lg:hidden"
      >
        <HiMenuAlt1 />
      </button>

      <AnimatePresence mode="wait">
        {showMenuPopup && (
          <SmallScreenMenuModal closeModalFn={() => setShowMenuPopup(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export const SearchButton = () => {
  return (
    <button
      type="button"
      className="text-primary-red outline-none"
    >
      <Image
        src={SearchIcon}
        alt="search button"
        className="w-7 h-auto"
      />
    </button>
  );
};

export const UserProfileButton = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const clickHandler = () =>
    isLoggedIn ? router.push('/') : dispatch(authActions.openLoginModal());

  return (
    <button
      type="button"
      onClick={clickHandler}
      className="text-primary-red outline-none hidden lg:inline-block"
    >
      <Image
        src={UserIcon}
        alt="search button"
        className="w-7 h-auto"
      />
    </button>
  );
};
