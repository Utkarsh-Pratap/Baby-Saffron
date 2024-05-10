import Link from 'next/link';
import { MouseEvent, PropsWithChildren } from 'react';

type Props = {
  type: 'button' | 'link';
  size?: 'default' | 'small';
  style?: 'filled' | 'outline';
  href?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
} & PropsWithChildren;

const Button = ({ type, children, href, onClick, style, size }: Props) => {
  const styles = {
    filled: 'bg-primary-red text-white hover:brightness-125',
    outline:
      'border border-primary-red text-primary-red hover:bg-primary-red hover:text-white w-full',
  };

  const sizes = {
    small: 'text-base py-[12px]',
    default: 'text-base py-[15px] lg:text-[20px]',
  };

  const commonStyles =
    'px-[70px] transition-all text-center inline-block font-medium rounded-[18px]';

  const className = `${commonStyles} ${styles[style || 'filled']} ${
    sizes[size || 'default']
  }`;

  const CP = {
    link: (
      <Link
        href={href || ''}
        onClick={onClick}
        className={className}
      >
        {children}
      </Link>
    ),
    button: (
      <button
        onClick={onClick}
        className={className}
      >
        {children}
      </button>
    ),
  };
  return CP[type];
};

export default Button;
