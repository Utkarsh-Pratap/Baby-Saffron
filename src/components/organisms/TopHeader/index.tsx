import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import React, { PropsWithChildren } from 'react';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const TopHeader = ({}: Props) => {
  return (
    <div className="bg-primary-red py-3 sm:py-4 text-white">
      <ResponsiveDivWrapper>
        <div className="flex items-center gap-4 justify-end">
          <p>INR</p>
        </div>
      </ResponsiveDivWrapper>
    </div>
  );
};

export default TopHeader;
