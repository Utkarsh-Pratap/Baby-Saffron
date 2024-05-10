import Community from '@/components/organisms/Community';
import Exclusives from '@/components/organisms/Exclusives';
import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import React from 'react';
import RecipeGene from '@/assets/recipe/recipe-gene.svg';
import Recipe1 from '@/assets/recipe/avacado-img.png';
import Image from 'next/image';
import Recipe from '@/components/molecules/Recipe';
import LassiImg from '@/assets/recipe/dalia-3.png';
import styles from './style.module.scss';
import Button from '@/components/atoms/Button';

type Props = {};

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const RecipesPage = ({}: Props) => {
  return (
    <>
      <ResponsiveDivWrapper>
        <figure className="flex flex-col items-center gap-5 mx-auto mt-16">
          <Image
            src={RecipeGene}
            alt="Recipe Gene"
            className="w-[80%] h-auto my-5 sm:mb-10 sm:mt-0 sm:max-w-[650px]"
          />

          <figcaption className="text-center text-[#222222] text-xs sm:text-base">
            The most trustworthy spice from Ayurveda, Saffron, combines the
            goodness of health with your homemade taste tales.&nbsp;
          </figcaption>
        </figure>

        <section className="py-24">
          <ul className="flex justify-center gap-8 uppercase text-black font-thin tracking-[5px] mb-24  sm:gap-16 lg:gap-24">
            <li>all</li>
            <li>savory</li>
            <li>sweet</li>
          </ul>

          <ul className="grid gap-y-8 gap-x-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Recipe
                key={i}
                image={Recipe1}
                link={`/recipe/${i}`}
                name="Kesar Sharbat"
                time="9mins"
              />
            ))}
          </ul>
        </section>
      </ResponsiveDivWrapper>

      <section
        className={`p-5 md:p-10 flex flex-col gap-10 ${styles.bgImg} mb-24 md:flex-row lg:gap-14 2xl:gap-24 md:items-center`}
      >
        <Image
          className="w-full aspect-square object-cover md:w-[50%] lg:w-[40%]"
          alt="Lassi"
          src={LassiImg}
        />

        <div className="flex flex-col gap-5">
          <h3 className="text-primary-red font-semibold relative font-serif text-2xl sm:text-4xl lg:text-5xl pb-5 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-[25%] before:bg-[#f6cb9b] md:before:w-1/2">
            Saffron Lassi
          </h3>

          <p className="text-[#c4874d] text-base md:text-lg">
            Summer cooler with a twist!
          </p>

          <Button
            href="/recipe/saffron-lassi"
            type="link"
          >
            View the Recipe
          </Button>
        </div>
      </section>

      <ResponsiveDivWrapper>
        <h2 className="text-primary-red text-2xl mb-14 xl:text-4xl">
          Latest 3 Recipes
        </h2>

        <ul className="grid gap-y-8 gap-x-6 mb-24 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Recipe
              key={i}
              image={Recipe1}
              link={`/recipe/${i}`}
              name="Kesar Sharbat"
              time="9mins"
            />
          ))}
        </ul>
      </ResponsiveDivWrapper>

      <Community />
      <Exclusives />
    </>
  );
};

export default RecipesPage;
