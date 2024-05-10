/* eslint-disable react/no-unescaped-entities */
'use client';
import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import React, { PropsWithChildren, useState } from 'react';
import SaffronPowder from '@/assets/extracts/Powder.gif';
import SaffronStrands from '@/assets/extracts/Strands.gif';
import Image from 'next/image';
import { generateId } from '@/lib/utils';
import styles from './style.module.scss';
import { motion as m } from 'framer-motion';
import Button from '@/components/atoms/Button';

type Props = {} & PropsWithChildren;

const EXTRACTS = [
  {
    id: generateId(),
    btnTitle: 'Powdered Saffron',
    image: SaffronPowder,
    description: [
      `Saffron Powder is plain saffron (whole threads) which is grinded and made into powder form for easier use. It is perfect for the fast paced life of a consumer, as it can be sprinkled, stirred & consumed on the go. The powdered saffron releases its colour, aroma and flavor within seconds which makes it ideal for instant use.`,
    ],
  },
  {
    id: generateId(),
    btnTitle: 'Saffron Strands',
    image: SaffronStrands,
    description: [
      `A few minutes of immersion in water can help Saffron attain its perfect form, where the aroma and colour blends in seamlessly. Let the saffron strands ooze their natural color till the water turns yellow. This will also bring out the fragrance which should easily diffuse the air around you.`,
      'Stir this mixture and after 20 mins add it to your recipe as it continues to release aroma, flavor & colour. We suggest you use          saffron in this way to reap the best results of our premium saffron.',
    ],
  },
];

/**
 * @param {Props} props
 * @return RCC (React Client Component)
 */
const Extracts = ({}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExtract = EXTRACTS[activeIndex];

  const btnJSX: JSX.Element[] = EXTRACTS.map((extract, index) => (
    <li
      key={extract.id}
      className="text-base md:text-xl"
    >
      <button
        type="button"
        onClick={() => setActiveIndex(index)}
        className={
          styles.extract_btn + ` ${activeIndex === index && styles.active}`
        }
      >
        {extract.btnTitle}
      </button>
    </li>
  ));

  const descJSX: JSX.Element[] = activeExtract.description.map((desc, i) => (
    <p
      className="py-5 text-sm text-[#3b3b3b] md:text-base"
      key={i}
    >
      {desc}
    </p>
  ));

  return (
    <section className="mb-20">
      <ResponsiveDivWrapper>
        <h2 className="text-primary-red font-serif text-3xl sm:text-5xl">
          Here's The Ideal Way of Using Saffron
        </h2>
      </ResponsiveDivWrapper>
      <ResponsiveDivWrapper>
        <ul className="w-full flex items-center gap-5 flex-wrap my-10 sm:gap-10 sm:my-14">
          {btnJSX}
        </ul>
      </ResponsiveDivWrapper>

      <m.figure>
        <Image
          src={activeExtract.image}
          alt={activeExtract.btnTitle}
          className="w-full aspect-video object-cover md:aspect-auto"
        />
      </m.figure>

      <ResponsiveDivWrapper>
        <h5 className="mt-14 mb-4 text-lg font-medium text-primary-red sm:mb-5 sm:text-3xl">
          Get The Most Out of Our Saffron.
        </h5>

        {descJSX}

        <div className="mt-10 flex justify-center">
          <Button
            type="link"
            href="/products"
            size="small"
          >
            See Our Products
          </Button>
        </div>
      </ResponsiveDivWrapper>
    </section>
  );
};

export default Extracts;
