import { PropsWithChildren } from 'react';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const UserAccountLayout = ({ children }: Props) => {
  return children;
};

export default UserAccountLayout;
