import Image, { StaticImageData } from 'next/image';
import React, { PropsWithChildren } from 'react';

type Props = {
  image: StaticImageData;
  featureTitle: string;
} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Highlight = ({ image, featureTitle }: Props) => {
  return (
    <figure className="flex flex-col items-center gap-3">
      <Image
        src={image}
        alt={featureTitle}
        className="w-20 h-auto"
      />
      <figcaption>
        <h3
          className="text-center font-semibold text-sm md:text-base text-highlight"
          dangerouslySetInnerHTML={{ __html: featureTitle }}
        />
      </figcaption>
    </figure>
  );
};

export default Highlight;
