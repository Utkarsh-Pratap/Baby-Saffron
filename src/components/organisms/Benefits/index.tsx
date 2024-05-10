import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import React, { PropsWithChildren } from 'react';
import digestive from '@/assets/usage-benefits/digestive-system.svg';
import arthritis from '@/assets/usage-benefits/arthritis.svg';
import vision from '@/assets/usage-benefits/vision.svg';
import menstruation from '@/assets/usage-benefits/mensturation.svg';
import cancer from '@/assets/usage-benefits/cancer.svg';
import sleep from '@/assets/usage-benefits/sleep.svg';
import Image from 'next/image';

type Props = {} & PropsWithChildren;

const BENEFITS = [
  {
    img: digestive,
    heading: 'Aids Your Digestive System',
    para: 'Saffron is said to relieve gastric and acidity issues thereby improving your digestive health.',
  },
  {
    img: arthritis,
    heading: 'Relief From Arthritis Pain',
    para: 'Studies suggest that saffron acts as an anti-inflammatory agent and helps relieve joint pain.',
  },
  {
    img: vision,
    heading: 'Improves Vision',
    para: 'Many researchers say that saffron helps regulate the key vision cells and further protects them from damage.',
  },
  {
    img: sleep,
    heading: "A Goodnight's Sleep",
    para: 'Saffron intake has been found to improve sleep cycles according to scientists.',
  },
  {
    img: cancer,
    heading: 'Increased Recovery Speed In Some Cancer Cases',
    para: 'Saffron contains crocin and crocetin. Crocin is said to have cancer-fighting properties while Crocetin may inhibit the growth of cancer cells.',
  },
  {
    img: menstruation,
    heading: 'Regulates Menstruation',
    para: 'According to health experts, saffron helps regulate normal flow of periods and is also said to relieve menstrual pain.',
  },
];

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Benefits = ({}: Props) => {
  return (
    <ResponsiveDivWrapper>
      <ul className="w-full pt-16 pb-24 grid items-center gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((benefit, i) => (
          <li
            key={i}
            className="flex flex-col items-center gap-5 text-center"
          >
            <Image
              src={benefit.img}
              alt={benefit.heading}
            />
            <h4 className="text-[#945a30] text-xl sm:text-2xl font-serif w-full lg:w-[70%]">
              {benefit.heading}
            </h4>
            <p className="w-full text-sm sm:text-base sm:w-[70%] lg:w-[80%] 2xl:w-[70%]">
              {benefit.para}
            </p>
          </li>
        ))}
      </ul>
    </ResponsiveDivWrapper>
  );
};

export default Benefits;
