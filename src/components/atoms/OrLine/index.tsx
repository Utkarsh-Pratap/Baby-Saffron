import React, { PropsWithChildren } from 'react';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const ORLine = ({}: Props) => {
  return (
    <div className="w-full relative">
      <div className="w-full h-[1px] bg-slate-300"></div>
      <p className="absolute top-1/2 translate-x-[-50%] left-1/2 translate-y-[-50%] uppercase bg-white text-slate-700 px-2">
        or
      </p>
    </div>
  );
};

export default ORLine;
