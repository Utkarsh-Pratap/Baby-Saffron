import React, { PropsWithChildren } from 'react';
import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import Image from 'next/image';
import styles from './style.module.scss';
import Dish1 from '@/assets/hallmarks/dish_1.png';
import Dish2 from '@/assets/hallmarks/dish_2.png';
import Dish3 from '@/assets/hallmarks/dish_3.png';
import Dish4 from '@/assets/hallmarks/dish_4.png';
import Dish5 from '@/assets/hallmarks/dish_5.png';
import Dish6 from '@/assets/hallmarks/dish_6.png';
import MainDish from '@/assets/hallmarks/main_dish.png';
import Button from '@/components/atoms/Button';

type Props = {} & PropsWithChildren;

const DISHES = [
  {
    id: 'dish1',
    name: 'Patti',
    image: Dish1,
  },
  {
    id: 'dish2',
    name: 'Thin Style',
    image: Dish2,
  },
  {
    id: 'dish3',
    name: 'Thick Style',
    image: Dish3,
  },
  {
    id: 'dish4',
    name: 'Floral Waste',
    image: Dish4,
  },
  {
    id: 'dish5',
    name: 'Pollen',
    image: Dish5,
  },
  {
    id: 'dish6',
    name: 'Dirt',
    image: Dish6,
  },
];

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const HallMarks = ({}: Props) => {
  return (
    <ResponsiveDivWrapper>
      <section className={styles.hallmark}>
        <h2>The Essence of Purity</h2>

        <section className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 ">
            <h4>
              Regular Saffron
              <span>(Impurities & Flower Waste)</span>
            </h4>

            <ul className="grid transition-all grid-cols-3 gap-x-3 gap-y-16 justify-items-center lg:justify-items-start py-16">
              {DISHES.map((dish) => (
                <li
                  key={dish.id}
                  className="flex transition-all flex-col items-center w-max gap-4"
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                  />
                  <p className="text-center text-sm md:text-base">
                    {dish.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <h4 className={styles.red}>
              Baby Brand Saffron
              <span>(Premium Saffron)</span>
            </h4>

            <figure className="flex items-center gap-4 my-16 lg:flex-col lg:my-auto">
              <Image
                src={MainDish}
                alt="Main Dish"
                className="w-[60%] lg:w-[240px] aspect-square object-contain"
              />
              <figcaption className="text-sm text-black font-semibold md:text-xl lg:text-center">
                100% Pure,
                <br />
                Premium Grade 1 Saffron
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="lg:mt-8 justify-center flex">
          <Button type="link">Shop Now</Button>
        </div>
      </section>
    </ResponsiveDivWrapper>
  );
};

export default HallMarks;
