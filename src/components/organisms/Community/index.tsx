import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import React, { PropsWithChildren } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import InstaFeed from '@/assets/community/insta-feed-01.png';
import Image from 'next/image';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Community = ({}: Props) => {
  return (
    <ResponsiveDivWrapper>
      <section className="w-full text-[#a06e65] py-12 xl:py-20">
        <h2 className="text-left text-2xl md:text-center lg:text-5xl 2xl:text-3xl">
          Join Our Community
        </h2>
        <div className="flex items-center gap-1 mt-6 xs:gap-2 xs:mt-8 sm:mt-10 md:mt-16 xl:mt-20 2xl:mt-28 lg:gap-5 2xl:gap-10">
          <button
            type="button"
            className="outline-none text-3xl"
          >
            <IoIosArrowBack />
          </button>
          <div className="flex-1 overflow-x-auto hideScrollBar h-[120px] xs:h-[150px] sm:h-[180px] md:h-[220px] lg:h-[250px] 2xl:h-[300px]">
            <section className="w-max flex gap-3 xs:gap-2 h-full">
              {Array.from({ length: 5 }).map((_, i) => (
                <figure
                  key={i}
                  className="h-full aspect-square rounded overflow-hidden"
                >
                  <Image
                    src={InstaFeed}
                    alt="insta feed 1"
                    className="w-full h-full object-cover"
                  />
                </figure>
              ))}
            </section>
          </div>
          <button
            type="button"
            className="outline-none text-3xl"
          >
            <IoIosArrowBack className="rotate-180" />
          </button>
        </div>
      </section>
    </ResponsiveDivWrapper>
  );
};

export default Community;
