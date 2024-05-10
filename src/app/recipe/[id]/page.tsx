import React from 'react';
import RecipeHeaderDivider from '@/assets/recipe/divider.png';
import Exclusives from '@/components/organisms/Exclusives';
import Community from '@/components/organisms/Community';
import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import Recipe from '@/components/molecules/Recipe';
import Recipe1 from '@/assets/recipe/avacado-img.png';
import HeadLeftWing from '@/assets/recipe/left-wing.png';
import HeadRightWing from '@/assets/recipe/right-wing.png';

type Props = {
  params: { id: string };
};

const Method = [
  'Combine the almonds and enough water in a deep bowl and soak for 8 hours. Drain and de-skin the almonds. Keep aside.',
  'Blend the almonds in a mixer to a coarse mixture without using any water or milk. Keep aside.',

  'Heat the ghee in a deep non-stick kadhai, add the almond mixture, mix well and cook on a medium flame for 7 minutes, while stirring occasionally.',

  'Meanwhile combine the milk and ½ cup of water in a deep pan and boil for 3 to 4 minutes. Keep aside.',
  'Add the whole wheat flour to the almond mixture, mix well and cook on a medium flame for 2minutes, while stirring continuously.',

  'Add the milk-water mixture, mix well and cook on a medium flame for 5 minutes, while stirring continuously.',

  'Add the sugar, mix well and cook on a medium flame for 1 to 2 minutes, while stirring continuously.',

  'Add the saffron, mix well and cook on a medium flame for 1 minute, while stirring continuously.',

  'Switch off the flame, add the cardamom powder and mix well.',

  ' Serve warm garnished with the almond slivers or store in an air-tight container.',
];

const prepration = [
  'Soaking time:  8 hours',

  'Preparation Time: 15 mins',

  'Cooking Time: 21 mins',

  'Makes 2 cups',

  'Ingredients',

  '1 cup almonds (badam)',

  '1/2 cup ghee',

  '3/4 cup milk',

  '1 tbsp whole wheat flour (gehun ka atta)',

  '3/4 cup sugar',

  'A few strands of Baby saffron (Kesar)',

  '1/2 tsp cardamom (elaichi) powder',

  'For The Garnish',

  '2 tbsp almonds (badam) slivers',
];

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const RecipeDetailsPage = ({ params }: Props) => {
  return (
    <>
      <ResponsiveDivWrapper>
        <div className="flex flex-col items-center gap-5 text-recipe-detail-text pt-20 pb-10">
          <h1 className="text-center text-4xl xs:text-5xl font-serif">
            Saffron Halwa
          </h1>
          <Image
            src={RecipeHeaderDivider}
            alt="divider"
            className="self-center w-full xxs:max-w-[280px] sm:max-w-[350px]"
          />

          <p className="text-black text-sm lg:text-base text-center w-full xxs:max-w-[290px] sm:max-w-[400px]">
            Tastes like a piece of heaven in your mouth. Bite into the rich and
            fulfilling Saffron Halwa and experience a taste of pure bliss.
          </p>
        </div>
      </ResponsiveDivWrapper>

      <section className="flex flex-col mt-10 items-center lg:flex-row lg:min-h-[100dvh] lg:relative">
        <Image
          src={
            'https://babysaffron.com/public/images/recipe/6255b980955f8Saffron%20Halwa%20Image.png'
          }
          alt="recipe banner"
          className="w-full h-auto lg:h-full lg:w-[75%] 2xl:w-[65%] lg:object-cover lg:absolute lg:right-0 lg:top-0"
          width={1000}
          height={1000}
        />
        <ResponsiveDivWrapper>
          <ul className="w-full bg-[#fbf1e7] flex flex-col translate-y-[-10%] lg:translate-y-0 gap-1 p-5 md:p-10 lg:p-14 lg:w-1/2 2xl:w-[45%]">
            <li className="mb-4">
              <h2 className="text-left text-recipe-detail-text text-3xl xs:text-4xl font-serif">
                Saffron Halwa
              </h2>
            </li>
            {prepration.map((pre, i) => (
              <li key={i}>{pre}</li>
            ))}
          </ul>
        </ResponsiveDivWrapper>
      </section>

      <ResponsiveDivWrapper>
        <h3 className="text-2xl font-serif font-semibold text-center my-10 text-recipe-detail-text lg:mb-20 lg:text-4xl lg:text-left">
          Method
        </h3>

        <ol className="flex flex-col pb-10 gap-10 text-[#4c2b13] text-base lg:text-2xl lg:gap-14">
          {Method.map((el, i) => (
            <li
              key={i}
              className="text-[#4c2b13]"
            >
              {i + 1}. {el}
            </li>
          ))}
        </ol>
      </ResponsiveDivWrapper>
      <section className="bg-[#fafafa] py-16 mt-10">
        <ResponsiveDivWrapper>
          <div className="flex justify-start md:justify-center items-center gap-2 mb-10 md:mb-20 xxs:gap-5">
            <Image
              src={HeadLeftWing}
              alt="left wing"
              className="hidden md:inline-block"
            />
            <h2 className="text-center md:text-left font-serif italic text-2xl md:text-3xl font-semibold text-recipe-detail-text lg:text-4xl">
              Explore more recipes
            </h2>
            <Image
              src={HeadRightWing}
              alt="right wing"
            />
          </div>
          <ul className="grid gap-y-8 gap-x-6 sm:grid-cols-2 xl:grid-cols-3">
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
      </section>
      <ResponsiveDivWrapper>
        <div className="w-full flex justify-center mt-16 mb-10">
          <Button
            type="link"
            href="/recipes"
          >
            View All Recipes
          </Button>
        </div>
      </ResponsiveDivWrapper>
      <Community />
      <Exclusives />
    </>
  );
};

export default RecipeDetailsPage;
