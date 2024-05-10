import React from 'react';
import Image from 'next/image';
import { MdOutlineStar } from 'react-icons/md';
import Heart from '@/assets/highlights/heart.png';
import Legacy50 from '@/assets/highlights/legacy.png';
import SaffronLeaf from '@/assets/highlights/saffron.png';
import Shipping from '@/assets/highlights/shipping.png';
import Client1 from '@/assets/clients/r_ico_1.jpg';
import Client2 from '@/assets/clients/r_ico_2.jpg';
import Client3 from '@/assets/clients/r_ico_3.jpg';
import Client4 from '@/assets/clients/r_ico_4.jpg';
import Client5 from '@/assets/clients/r_ico_5.jpg';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import Logo from '@/assets/icons/logo.svg';
import Link from 'next/link';
import GiftedBox from '@/assets/home/gifted-saffron.png';

type Props = {};

const highlights = [
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

const clients = [Client1, Client2, Client3, Client4, Client5, Client4, Client1];

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const HomePage = ({}: Props) => {
  return (
    <>
      <div className="py-5 bg-primary-red"></div>
      <header className="sticky top-0 left-0 z-[999]"></header>

      {/* client */}
      <section className="flex h-20 items-center justify-center bg-client-bg">
        <div className="w-min-width flex items-center justify-between h-full">
          <h2 className="text-client-text text-lg font-bold mr-20">
            Trusted By
          </h2>

          {clients.map((clientImg, i) => (
            <Image
              src={clientImg}
              key={i}
              alt={`client-${i + 1}`}
              className="h-full w-auto"
            />
          ))}
        </div>
      </section>

      {/* highlights */}
      <section className="w-min-width mx-auto flex justify-evenly flex-wrap py-36">
        {highlights.map((highlight) => (
          <figure
            key={highlight.id}
            className="flex flex-col items-center gap-3"
          >
            <Image
              src={highlight.image}
              alt={highlight.text}
            />
            <figcaption>
              <h3
                className="text-center text-sm font-semibold text-highlight"
                dangerouslySetInnerHTML={{ __html: highlight.text }}
              />
            </figcaption>
          </figure>
        ))}
      </section>

      {/* Products */}
      <section className="w-min-width mx-auto py-5">
        <h2 className="text-3xl text-primary-red font-semibold mb-10">
          Bestseller
        </h2>
        <ul className="flex justify-between gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <li
              key={i}
              className="w-[350px] flex flex-col gap-2"
            >
              <figure className="w-full aspect-[1/1.2] bg-slate-100 product_img relative rounded-md overflow-hidden">
                <Image
                  src=""
                  alt=""
                />

                <figcaption className="flex flex-col absolute gap-3 bottom-6 left-1/2 translate-x-[-50%] z-[10] w-[85%]">
                  <button className="w-full rounded-full py-4 text-center bg-white transition-all text-black hover:bg-primary-red hover:text-white">
                    See More
                  </button>
                  <button className="w-full rounded-full py-4 text-center bg-white transition-all text-black hover:bg-primary-red hover:text-white">
                    Add To Cart
                  </button>
                </figcaption>
              </figure>

              <div className="flex justify-between">
                <h3 className="text-primary-red font-medium text-xl">
                  1 Gram Saffron Pack
                </h3>
                <p className="font-semibold">₹ 440.00</p>
              </div>

              <p className="text-sm text-primary-red text-opacity-50">
                Saffron Strands
              </p>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <MdOutlineStar
                      key={i}
                      className="text-primary-red text-lg"
                    />
                  ))}
                </div>
                <p>(4)</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Gift Box */}
      <section className="border-t border-b border-primary-red py-16 relative flex justify-center">
        <div className="ml-auto w-[610px]">
          <h2>Curate Your Own Gift Box</h2>
          <h3>
            For an unforgettable experience,
            <br />
            customize your very own Gift Box.
          </h3>

          <h4>You Decide & We Design -</h4>

          <h5>Step 1</h5>
          <p>
            Baby Brand Saffron Gift Box is a true emblem of your vision &
            requirements, which are not only taken into consideration, but are
            given utmost priority and importance.
          </p>
          <h5>Step 2</h5>
          <p>
            All the personalized details are then reflected in the design to
            give it an aesthetic that defines you, or your occasional grandeur
            in a splendid way.
          </p>
          <h5>Step 3</h5>
          <p>
            We wait for your feedback on the sample, and deliver the luxurious
            Gift Box to your door after confirmation.
          </p>

          <Link
            href=""
            className="py-[15px] rounded-[18px] px-[70px] inline-block text-white bg-primary-red text-2xl"
          >
            Get Started
          </Link>
        </div>
        <Image
          src={GiftedBox}
          alt="gift box"
          className="w-[45%]"
        />
      </section>
    </>
  );
};

export default HomePage;
