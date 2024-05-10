/* eslint-disable react/no-unescaped-entities */
'use client';
import ModalWrapper from '@/components/wrappers/ModalWrapper';
import { useAppDispatch } from '@/lib/hooks/redux.hook';
import { authActions } from '@/lib/store/features/authSlice';
import Image from 'next/image';
import { GrClose } from 'react-icons/gr';
import LoginForm from '../../LoginForm';
import Button from '@/components/atoms/Button';
import OAuth from '../../OAuth';
import ORLine from '@/components/atoms/OrLine';

const AuthModal = () => {
  const dispatch = useAppDispatch();
  const closeModal = () => dispatch(authActions.closeLoginModal());

  return (
    <ModalWrapper
      openDirection="right"
      id="authModal"
      closeModalFn={closeModal}
    >
      <div className="w-full h-full flex flex-col">
        <header className="w-full py-5 px-5 border-b border-slate-300 flex justify-between xs:px-8">
          <figure className="flex items-center gap-2 xs:gap-4">
            <Image
              src={''}
              alt="user pic"
              className="h-12 aspect-square rounded-full bg-slate-500 xs:h-14"
            />

            <figcaption className="text-primary-red text-xl xs:text-2xl">
              Guest User
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={closeModal}
            className="text-slate-400 outline-none text-xl xs:text-2xl"
          >
            <GrClose />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto hideScrollBar">
          <section className="border-b h-max border-slate-300 flex flex-col gap-6 px-5 py-8 xs:px-8">
            <LoginForm />

            <div className="my-4">
              <ORLine />
            </div>

            <OAuth />
          </section>

          <div className="flex flex-col py-10 gap-4 items-center px-5 xs:px-8">
            <h5 className="text-center text-lg xs:text-xl">
              Don't Have a Account Yet?
            </h5>
            <div className="">
              <Button
                type="link"
                href="/register"
                style="outline"
                onClick={closeModal}
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AuthModal;
