import { PropsWithChildren } from 'react';

type Props = {} & PropsWithChildren;

const ResponsiveDivWrapper = ({ children }: Props) => {
  return (
    <div className="w-[90%] mx-auto md:w-[85%] 2xl:w-[75%]">{children}</div>
  );
};

export default ResponsiveDivWrapper;
