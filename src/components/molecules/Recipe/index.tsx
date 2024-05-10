import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { LuClock2 } from 'react-icons/lu';

type Props = {
  image: string | StaticImageData;
  name: string;
  link: string;
  time: string;
} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Recipe = ({ image, link, name, time }: Props) => {
  return (
    <li className="w-full flex flex-col gap-5">
      <Image
        src={image}
        alt="recipe image"
        className="w-full aspect-square rounded"
      />

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-primary-red">{name}</h3>

          <Link
            href={link}
            className="underline text-black"
          >
            View Recipe
          </Link>
        </div>

        <div className="flex items-center gap-2 text-[#b0b1b1]">
          <LuClock2 className="text-xl" />
          <p>{time}</p>
        </div>
      </div>
    </li>
  );
};

export default Recipe;
