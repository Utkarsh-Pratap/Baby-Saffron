import {
  CartButton,
  MenuButton,
  SearchButton,
  UserProfileButton,
} from '@/components/atoms/Buttons';
import Image from 'next/image';
import Logo from '@/assets/icons/logo.svg';
import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import CustomLink from '@/components/atoms/CustomLink';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 flex bg-white justify-center shadow-md z-[100] py-3 lg:py-4">
      <ResponsiveDivWrapper>
        <section className="w-full flex items-center justify-between">
          <MenuButton />
          <Link href="/">
            <figure className="h-[42px] w-max xs:h-14">
              <Image
                src={Logo}
                alt="logo"
                className="h-full w-auto"
              />
            </figure>
          </Link>

          {/* Routes */}
          <ul className="items-center gap-8 hidden lg:flex">
            <li>
              <CustomLink
                type="link"
                section="nav"
              >
                shop
              </CustomLink>
            </li>
            <li>
              <CustomLink
                type="link"
                section="nav"
                href="/recipes"
              >
                recipes
              </CustomLink>
            </li>
            <li>
              <CustomLink
                type="link"
                section="nav"
                href="/about"
              >
                about
              </CustomLink>
            </li>
            <li>
              <CustomLink
                type="link"
                section="nav"
                href="/contact"
              >
                contact us
              </CustomLink>
            </li>
          </ul>

          {/* Icons */}
          <ul className="flex items-center gap-5 xs:gap-8 text-primary-red text-opacity-45 text-3xl">
            <li>
              <SearchButton />
            </li>
            <li>
              <CartButton />
            </li>
            <li>
              <UserProfileButton />
            </li>
          </ul>
        </section>
      </ResponsiveDivWrapper>
    </nav>
  );
};

export default Navbar;
