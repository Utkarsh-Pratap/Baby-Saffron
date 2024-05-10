import Benefits from '@/components/organisms/Benefits';
import Community from '@/components/organisms/Community';
import Exclusives from '@/components/organisms/Exclusives';
import Extracts from '@/components/organisms/Extracts';
import React from 'react';
import MainSaffron from '@/assets/usage-benefits/main-saffron.png';
import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import Image from 'next/image';
import MainLine from '@/assets/usage-benefits/main-line.png';
import HeadingImg from '@/assets/usage-benefits/usage-gene.svg';
import LeftImg from '@/assets/usage-benefits/usage-leftbg.png';
import RightImg from '@/assets/usage-benefits/usage-rightbg.png';
import CenterImg from '@/assets/usage-benefits/flower.png';

type Props = {};

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const UsageAndPolicy = ({}: Props) => {
  return (
    <>
      <section className="relative flex justify-center mt-16">
        <Image
          src={LeftImg}
          alt="left graphics"
          className="absolute top-1/2 translate-y-[-50%] left-0 w-[120px] xs:w-[200px] sm:w-[280px] h-auto self-center z-[-1]"
        />
        <div className="flex flex-col items-center">
          <Image
            src={CenterImg}
            alt="center Flower"
            className="mix-blend-darken w-[150px] xs:w-[250px]"
          />
          <Image
            src={HeadingImg}
            alt="right graphics"
            className="w-[80%] h-auto xs:w-[300px] translate-y-[-20%]"
          />
        </div>
        <Image
          src={RightImg}
          alt="right graphics"
          className="absolute top-1/2 translate-y-[-50%] right-0 w-[120px] xs:w-[200px] sm:w-[280px] h-auto self-center z-[-1]"
        />
      </section>
      <ResponsiveDivWrapper>
        <p className="text-sm sm:text-base text-center">
          A promise of good health straight out <br /> of the richness of
          Ayurveda!
        </p>
        <section className="w-full flex flex-col gap-5 text-center items-center py-24">
          <Image
            src={MainSaffron}
            alt="main saffron"
            className="w-[90%] xs:max-w-[300px] h-auto"
          />

          <h2 className="text-center font-serif text-2xl sm:text-3xl">
            Holding The Goodness of Ancient Science
          </h2>
          <Image
            src={MainLine}
            alt="main heading line"
          />

          <p className="text-sm sm:text-base">
            Listen to your body closely and help it transform
            <br /> into a healthy balance with Baby Brand Saffron.
          </p>
        </section>
      </ResponsiveDivWrapper>
      <Benefits />
      <Extracts />
      <Community />
      <Exclusives />
    </>
  );
};

export default UsageAndPolicy;
