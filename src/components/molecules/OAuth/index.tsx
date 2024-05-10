import React, { PropsWithChildren } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const OAuth = ({}: Props) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        className="rounded-md py-3 px-4 flex items-center gap-2 justify-center flex-1 transition-all bg-slate-200 hover:bg-slate-300"
      >
        Continue with Facebook
        <FaFacebook className="text-[#0866ff] text-[22px]" />
      </button>
      <button
        type="button"
        className="rounded-md py-3 px-4 flex items-center gap-2 justify-center flex-1 transition-all bg-slate-200 hover:bg-slate-300"
      >
        Continue with Google <FcGoogle className="text-[22px]" />{' '}
      </button>
    </div>
  );
};

export default OAuth;
