import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/icons/logo.svg';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { CiMail, CiMobile1 } from 'react-icons/ci';
import Link from 'next/link';
import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import CustomLink from '@/components/atoms/CustomLink';

const LINKS = [
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Terms & Conditions',
    link: '/terms-and-conditions',
  },
  {
    name: 'Usage & Benefits',
    link: '/usage-and-benefits',
  },
  {
    name: 'Contact Us',
    link: '/contact',
  },
  {
    name: 'Privacy Policy',
    link: '/privacy',
  },
  {
    name: 'Shipping Policy',
    link: '/shipping-policy',
  },
  {
    name: 'Cancellation Policy',
    link: '/cancellation-policy',
  },
];

const Footer = () => {
  return (
    <footer className="">
      <ResponsiveDivWrapper>
        <section className="pt-20 flex flex-col gap-10 lg:gap-0 lg:flex-row xs:pb-10 lg:pb-20">
          <div className="flex flex-col gap-10 w-full lg:w-1/3 lg:mr-14">
            <Image
              src={Logo}
              alt="logo"
              className="h-20 self-center w-auto lg:self-start"
            />

            <p className="text-sm text-footer-desc-black md:text-footer-desc-grey md:text-base">
              A taste that transcends time, cultures and history itself; a
              flavor that binds together our promises with worldwide admiration
              and gratitude, weaved through threads of saffron that are genuine,
              exotic and rich in every part of life.
              <br />
              <br />
              Built over 6 generations while providing the best quality of kesar
              to connoisseurs worldwide, we take immense pride in being the
              largest and oldest wholesaler of saffron in India.
            </p>
          </div>

          <ul className="flex-1 grid grid-cols-2 gap-5 xs:gap-14 lg:gap-0">
            {LINKS.map((link) => (
              <li key={link.name}>
                <CustomLink
                  type="link"
                  section="footer"
                  href={link.link}
                >
                  {link.name}
                </CustomLink>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-4 -mt-6 xs:mt-0 xs:flex-col xs:gap-8 lg:gap-0">
            <li>
              <h4 className="text-primary-red hidden xs:block text-xl lg:mb-8">
                Contact Us
              </h4>
            </li>
            <li className="flex items-center w-full text-primary-red gap-6 text-3xl justify-between xs:justify-start lg:mb-8">
              <Link
                href="https://www.facebook.com/BabySaffron/"
                target="_blank"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/baby.saffron/"
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link href="mailto:orders@babysaffron.com">
                <CiMail className="text-3xl xs:hidden" />
              </Link>
              <Link href="Tel:+91 7879123123">
                <CiMobile1 className="text-3xl xs:hidden" />
              </Link>
            </li>
            <li className="flex items-center gap-2 lg:mb-8">
              <CiMail className="hidden xs:inline-block text-3xl lg:text-black" />
              <p className="hidden xs:block">
                <CustomLink
                  type="link"
                  href="mailto:orders@babysaffron.com"
                  section="footer"
                >
                  orders@babysaffron.com
                </CustomLink>
              </p>
            </li>
            <li className="flex items-center gap-2">
              <CiMobile1 className="hidden xs:inline-block text-3xl lg:text-black" />
              <p className="hidden xs:block">
                <CustomLink
                  type="link"
                  href="Tel:+91 7879123123"
                  section="footer"
                >
                  +91 7879123123
                </CustomLink>
              </p>
            </li>
          </ul>
        </section>
      </ResponsiveDivWrapper>

      <section className="py-[15px] text-center font-normal text-white bg-primary-red sm:py-[30px]">
        <p className="text-center text-base sm:text-xl">
          Copyright Baby Brand Saffron
        </p>
      </section>
    </footer>
  );
};

export default Footer;

/**
 * <ul className="flex flex-col gap-4">
              <li>
                <CustomLink
                  type="link"
                  href="mailto:orders@babysaffron.com"
                  section="footer"
                >
                  <CiMail className="text-xl" /> orders@babysaffron.com
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  type="link"
                  href="Tel:+91 7879123123"
                  section="footer"
                >
                  <CiMobile1 className="text-xl" /> +91 7879123123
                </CustomLink>
              </li>
            </ul>
 * <ul className="grid grid-cols-3  text-sm gap-x-16 gap-y-16 font-medium items-center">
            <li className="w-max hover_effect black">About</li>
            <li className="w-max hover_effect black">Home</li>
            <li className="w-max">
              <h3 className="text-primary-red font-semibold text-lg">
                Contact Us
              </h3>
            </li>

            <li className="w-max hover_effect black">
              <Link href={'/terms-and-conditions'}>Terms & Conditions</Link>
            </li>
            <li className="w-max hover_effect black">Usage & Benefits</li>
            <li className="flex items-center gap-6 text-2xl">
              <FaFacebook />
              <FaInstagram />
            </li>

            <li className="w-max hover_effect black">Contact Us</li>
            <li className="w-max hover_effect black">Privacy Policy</li>
            <li className="flex items-center gap-3">
              <CiMail className="text-3xl" />
              <span className="text-sm inline-block hover_effect black">
                orders@babysaffron.com
              </span>
            </li>

            <li className="w-max hover_effect black">Shipping Policy</li>
            <li className="w-max hover_effect black">Cancellation Policy</li>
            <li className="flex items-center gap-3">
              <CiMobile1 className="text-3xl" />
              <span className="text-sm inline-block hover_effect black">
                +91 7879123123
              </span>
            </li>
          </ul>
 */
