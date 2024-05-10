import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import React, { PropsWithChildren } from 'react';
import Heart from '@/assets/highlights/heart.png';
import Legacy50 from '@/assets/highlights/legacy.png';
import SaffronLeaf from '@/assets/highlights/saffron.png';
import Shipping from '@/assets/highlights/shipping.png';
import Highlight from '@/components/molecules/Highlight';

type Props = {} & PropsWithChildren;

const HIGHLIGHTS = [
  {
    text: `100% Pure and <br/> Handpicked Saffron`,
    image: SaffronLeaf,
    id: 'img-1',
  },
  {
    text: `Dedicated To The <br/> Health of India!`,
    image: Heart,
    id: 'img-2',
  },
  {
    text: `Legacy of More <br/> Than 50 Years`,
    image: Legacy50,
    id: 'img-3',
  },
  {
    text: `Domestic <br /> & International Shipping`,
    image: Shipping,
    id: 'img-4',
  },
];

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const KeyHighlights = ({}: Props) => {
  return (
    <ResponsiveDivWrapper>
      <section className="py-10 grid pt-14 pb-28 gap-x-2 gap-y-20 grid-cols-2 lg:grid-cols-4 sm:pt-20 sm:pb-40 lg:py-40 lg:gap-x-0">
        {HIGHLIGHTS.map((highlight) => (
          <Highlight
            key={highlight.id}
            featureTitle={highlight.text}
            image={highlight.image}
          />
        ))}
      </section>
    </ResponsiveDivWrapper>
  );
};

export default KeyHighlights;
