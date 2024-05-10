import Community from '@/components/organisms/Community';
import Exclusives from '@/components/organisms/Exclusives';
import styles from './style.module.scss';
import AuthCheckbox from '@/components/atoms/AuthCheckbox';
import Link from 'next/link';
import OAuth from '@/components/molecules/OAuth';
import ORLine from '@/components/atoms/OrLine';
import React from 'react';

type Props = {};

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const RegisterPage = ({}: Props) => {
  return (
    <>
      <section className={styles.register}>
        <h2 className="text-center text-primary-red text-2xl mb-8 sm:mb-5 font-medium lg:text-3xl">
          Create an Account
        </h2>

        <section className="mx-auto bg-white w-[90%] md:w-[80%] lg:w-[60%] 2xl:w-[45%] py-10 border rounded-md border-auth-register-br px-7 sm:px-14 sm:border-t sm:border-b-0 sm:border-l-0 sm:border-r-0 sm:rounded-none">
          <form
            action=""
            className={styles.register__form}
          >
            <div className={styles.register__input_box}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
              />
            </div>
            <div className={styles.register__input_box}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
              />
            </div>
            <div className={styles.register__input_box}>
              <label htmlFor="lastName">Phone Number</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
              />
            </div>
            <div className={styles.register__input_box}>
              <label htmlFor="lastName">Country</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
              />
            </div>
            <div className={styles.register__input_box + ' xs:col-span-2'}>
              <label htmlFor="lastName">Email</label>
              <input
                type="email"
                name="lastName"
                id="lastName"
              />
            </div>
            <div className={styles.register__input_box}>
              <label htmlFor="lastName">Create a Password</label>
              <input
                type="email"
                name="lastName"
                id="lastName"
              />
            </div>
            <div className={styles.register__input_box}>
              <label htmlFor="lastName">Re-Enter Password</label>
              <input
                type="email"
                name="lastName"
                id="lastName"
              />
            </div>

            <div className="col-span-full flex flex-col gap-3">
              <AuthCheckbox
                id="acceptTerms"
                align="start"
              >
                By creating an account I agree with the
                <br />
                <Link
                  href={'/terms-and-conditions'}
                  className="font-medium text-black"
                >
                  Terms & Conditions
                </Link>
                <br />
                of use as a user.
              </AuthCheckbox>

              <AuthCheckbox
                id="getOffers"
                align="start"
              >
                I want to get notified about Special discounts and exclusive
                offers. (Optional)
              </AuthCheckbox>
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="transition-all w-full py-4 text-base text-center inline-block font-medium rounded-[18px] sm:text-lg bg-primary-red text-white hover:brightness-125"
              >
                Create My Account
              </button>
            </div>
          </form>

          <div className="my-10">
            <ORLine />
          </div>

          <OAuth />
        </section>
      </section>
      <Community />
      <Exclusives />
    </>
  );
};

export default RegisterPage;
