import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import React, { PropsWithChildren } from 'react';
import GiftBoxImg from '@/assets/gifts/gifted-saffron.png';
import styles from './style.module.scss';
import Image from 'next/image';
import Button from '@/components/atoms/Button';

type Props = {} & PropsWithChildren;

const STEPS = [
  `Baby Brand Saffron Gift Box is a true emblem of your vision & requirements, which are not only taken into consideration, but are given utmost priority and importance.`,
  `All the personalized details are then reflected in the design to give it an aesthetic that defines you, or your occasional grandeur in a splendid way.`,
  `We wait for your feedback on the sample, and deliver the luxurious Gift Box to your door after confirmation.`,
];

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const GiftBox = ({}: Props) => {
  return (
    <section className="pt-[70px] pb-[100px] border-t border-b border-primary-red relative">
      <ResponsiveDivWrapper>
        <h2 className="text-3xl font-serif text-primary-red pb-5 sm:pb-10 xl:pb-8 sm:text-5xl">
          Curate Your Own Gift Box
        </h2>
        <h4 className="text-black text-base pb-8 md:pb-10 sm:text-2xl">
          For an unforgettable experience,
          <br />
          customize your very own Gift Box.
        </h4>

        <h3 className="italic text-primary-red pb-10 text-lg font-serif">
          You Decide &amp; We Design -
        </h3>

        <ul className={styles.steps}>
          {STEPS.map((step, i) => (
            <li key={i}>
              <h5>Step {i + 1}</h5>
              <p>{step}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 lg:mt-20">
          <Button type="link">Get Started</Button>
        </div>
      </ResponsiveDivWrapper>

      <Image
        src={GiftBoxImg}
        alt="gift box"
        className="absolute top-1/2 right-0 translate-y-[-100%] w-1/2 aspect-square object-contain lg:w-[40%] 2xl:w-[40%] xs:translate-y-[-50%]"
      />
    </section>
  );
};

export default GiftBox;
