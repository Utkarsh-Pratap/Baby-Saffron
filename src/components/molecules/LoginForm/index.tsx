'use client';
import Button from '@/components/atoms/Button';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import AuthCheckbox from '@/components/atoms/AuthCheckbox';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RCC (React Client Component)
 */
const LoginForm = ({}: Props) => {
  return (
    <form
      action=""
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="text-[#4c4c4c] text-xl"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full bg-[#f4f4f6] rounded py-2 px-3 text-lg outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="password"
          className="text-[#4c4c4c] text-xl"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full bg-[#f4f4f6] rounded py-2 px-3 text-lg outline-none"
        />
      </div>

      <div className="flex justify-between flex-wrap gap-5 xs:gap-2">
        <AuthCheckbox
          id="keepLoggedIn"
          onChecked={() => {}}
        >
          Keep me sign In
        </AuthCheckbox>

        <Link
          href={'/'}
          className="underline ml-auto"
        >
          Forget Password
        </Link>
      </div>

      <Button type="button">Login</Button>
    </form>
  );
};

export default LoginForm;
