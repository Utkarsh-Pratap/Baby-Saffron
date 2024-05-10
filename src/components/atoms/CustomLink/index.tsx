'use client';
import { MouseEvent, PropsWithChildren } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  type: 'link' | 'button';
  section: 'nav' | 'footer';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  href?: string;
} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const CustomLink = ({ type, children, href, section, onClick }: Props) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  const CP = {
    link: (
      <Link
        href={href || '/'}
        className={`${styles.cus_link} ${styles[section]} ${
          isActive && styles.active
        }`}
      >
        {children}
      </Link>
    ),
    button: (
      <button
        onClick={onClick}
        className={`${styles.cus_link} ${styles[section]}`}
      >
        {children}
      </button>
    ),
  };
  return CP[type];
};

export default CustomLink;
