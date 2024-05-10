import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import ExclusiveImg from '@/assets/exclusive/newsletter-detail.png';
import Button from '@/components/atoms/Button';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Exclusives = ({}: Props) => {
  return (
    <section className="bg-[#fbfbfb] py-10 lg:py-16 relative mt-28 lg:mb-[100px]">
      <ResponsiveDivWrapper>
        <form className="relative w-full z-[10]">
          <h2 className="font-semibold capitalize text-primary-red pr-52 text-xl sm:pr-48 md:text-[22px] md:pr-80 xl:text-2xl">
            Stay updated about our exclusive offers & discounts.
          </h2>

          <input
            type="email"
            name="signupEmail"
            id="signupEmail"
            className="block text-black outline-none placeholder:text-grey-300 p-[20px] text-sm my-20 sm:my-16 w-full rounded-full border border-gray-300 bg-white sm:w-[60%] md:w-[50%] 2xl:w-1/2"
            placeholder="Enter your email address"
          />

          <div className="lg:mt-[50px]">
            <Button
              type="button"
              size="small"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </ResponsiveDivWrapper>

      <figure className="absolute transition-all -top-24 right-0 inline-block max-w-[230px] aspect-square md:max-w-[450px] lg:max-w-[590px]">
        <Image
          src={ExclusiveImg}
          alt="exclusive pack"
          className="w-full h-full object-contain"
        />
      </figure>
    </section>
  );
};

export default Exclusives;
