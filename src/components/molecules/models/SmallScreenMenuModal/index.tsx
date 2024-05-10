'use client';
import React, { PropsWithChildren } from 'react';
import Logo from '@/assets/icons/logo.svg';
import { CartButton } from '@/components/atoms/Buttons';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';
import ModalWrapper from '@/components/wrappers/ModalWrapper';
import { useAppDispatch } from '@/lib/hooks/redux.hook';
import { authActions } from '@/lib/store/features/authSlice';

type Props = { closeModalFn: () => void } & PropsWithChildren;

/**
 * @param {Props} props
 * @return RCC (React Client Component)
 */
const SmallScreenMenuModal = ({ closeModalFn }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <ModalWrapper
      closeModalFn={closeModalFn}
      id="menuModal"
      openDirection="left"
    >
      <div className="w-full h-full flex flex-col">
        <header className="flex items-center justify-between px-10 py-4 border-b border-slate-300">
          <button
            type="button"
            onClick={closeModalFn}
            className="outline-none text-3xl text-primary-red"
          >
            X
          </button>
          <figure className="h-[42px] w-max">
            <Image
              src={Logo}
              alt="logo"
              className="h-full w-auto"
            />
          </figure>

          {/* Closing the menu modal when user click on cart (because when user click on cart then cart popup will open) */}
          <div
            role="button"
            onClick={closeModalFn}
          >
            <CartButton />
          </div>
        </header>

        <section className="flex-1 overflow-y-auto px-10">
          <ul className="flex flex-col">
            <li className={styles.last_menu_row + ' mt-5'}>
              <div className="flex justify-between mb-2">
                <h2 className={styles.headings}>shop</h2>

                <Link
                  href="/products"
                  className="text-lg font-medium underline text-primary-red"
                >
                  View all products
                </Link>
              </div>

              <ul className="flex flex-col">
                <li className="py-3 text-lg text-black font-medium">
                  Single Use Pack (50mg)
                </li>
                <li className="py-3 text-lg text-black font-medium">
                  1 Gram Saffron Pack
                </li>
                <li className="py-3 text-lg text-black font-medium">
                  1 Gram Powdered Saffron
                </li>
                <li className="py-3 text-lg text-black font-medium">
                  1 Gram Premium Pack
                </li>
              </ul>
            </li>
            <li className={styles.last_menu_row}>
              <Link
                href="/recipes"
                onClick={closeModalFn}
                className={styles.headings}
              >
                Recipes
              </Link>
            </li>
            <li className={styles.last_menu_row}>
              <Link
                href="/about"
                onClick={closeModalFn}
                className={styles.headings}
              >
                about
              </Link>
            </li>
            <li className={styles.last_menu_row}>
              <Link
                href="/contact"
                onClick={closeModalFn}
                className={styles.headings}
              >
                contact us
              </Link>
            </li>
          </ul>

          <div className="flex justify-between text-black my-10">
            <button
              type="button"
              onClick={() => {
                closeModalFn();
                dispatch(authActions.openLoginModal());
              }}
            >
              Log in
            </button>
            <Link
              href={'/register'}
              onClick={closeModalFn}
            >
              Sign up
            </Link>
          </div>
        </section>
      </div>
    </ModalWrapper>
  );
};

export default SmallScreenMenuModal;
