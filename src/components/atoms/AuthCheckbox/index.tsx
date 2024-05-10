'use client';
import React, { PropsWithChildren } from 'react';
import styles from './style.module.scss';
import { FaCheck } from 'react-icons/fa';

type Props = {
  id: string;
  onChecked?: (val: boolean) => void;
  align?: 'center' | 'start';
} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RCC (React Client Component)
 */
const AuthCheckbox = ({ id, onChecked, children, align }: Props) => {
  return (
    <div className={`flex gap-2 items-${align || 'center'}`}>
      <input
        type="checkbox"
        name={id}
        id={id}
        hidden
        // onChange={(e) => onChecked(e.target.checked)}
        className={styles.checkbox}
      />
      <button
        type="button"
        className="h-6 transition-all text-xs aspect-square rounded-full flex justify-center items-center border-2 border-[#c2c2c2] text-transparent"
      >
        <FaCheck />
      </button>
      <label
        htmlFor={id}
        className="text-[#a7a7a7a7]"
      >
        {children}
      </label>
    </div>
  );
};

export default AuthCheckbox;
