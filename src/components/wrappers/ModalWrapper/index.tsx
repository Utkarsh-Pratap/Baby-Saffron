'use client';
import React, { PropsWithChildren, useEffect } from 'react';
import { motion as m } from 'framer-motion';

type Props = {
  openDirection: 'left' | 'right';
  closeModalFn: () => void;
  id: string;
} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RCC (React Client Component)
 */
const ModalWrapper = ({ children, openDirection, closeModalFn, id }: Props) => {
  const animate =
    openDirection === 'left'
      ? { direction: '-100%', origin: 'left' }
      : { direction: '100%', origin: 'right' };

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <m.div
      onClick={(e) =>
        !(e.target as HTMLElement).closest(`#${id}`) && closeModalFn()
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full h-full z-[9999] bg-black bg-opacity-30"
    >
      <m.div
        initial={{ x: animate.direction }}
        animate={{ x: 0 }}
        exit={{ x: animate.direction }}
        transition={{ ease: 'easeInOut' }}
        style={{
          transformOrigin: animate.origin,
        }}
        className={`w-[550px] ${
          openDirection === 'left' ? 'mr-auto' : 'ml-auto'
        } max-[560px]:w-full h-full bg-white overflow-hidden max-[560px]:transition-all`}
        id={id}
      >
        {children}
      </m.div>
    </m.div>
  );
};

export default ModalWrapper;
