/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import LargeScreenBg from '@/assets/t&c/large_screen.jpg';
import SmallScreenBg from '@/assets/t&c/small_screen.jpg';
import styles from './style.module.scss';
import ResponsiveDivWrapper from '@/components/wrappers/ResponsiveDivWrapper';

const largeScreenTermsAndCondition = [
  {
    title: 'Reviews and Comments',
    description: [
      `Except as otherwise provided elsewhere in this Agreement or on the Site, anything that you submit or post to the Site and/or provide USMS Saffron Co. Inc., including without limitation, ideas, know-how, techniques, questions, reviews, comments, and suggestions (collectively, "Submissions") is and will be treated as non -confidential and non-proprietary, and USMS Saffron Co. Inc. shall have the royalty-free, worldwide, perpetual, irrevocable and transferable right to use, copy, distribute, display, publish, perform, sell, lease, transmit, adapt, create derivative works from such Submissions by any means and in any form, and to translate, modify, reverse -engineer, disassemble, or decompile such Submissions. All Submissions shall automatically become the sole and exclusive property of USMS Saffron Co. Inc. and shall not be returned to you.`,
      `In addition to the rights applicable to any Submission, when you post comments or reviews to the Site, you also grant USMS Saffron Co. Inc. the right to use the name that you submit with any review, comment, or other Content, if any, in connection with such review, comment, or other content. You represent and warrant that you own or otherwise control all of the rights to the reviews, comments and other Content that you post on this Site and that use of your reviews, comments, or other Content by USMS Saffron Co. Inc. will not infringe upon or violate the rights of any third party. You shall not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead USMS Saffron Co. Inc. or third-parties as to the origin of any Submissions or Content. USMS Saffron Co. Inc. may, but shall not be obligated to, remove or edit any Submissions (including comments or reviews) for any reason.`,
    ],
  },
  {
    title: 'Risk of loss: Other terms of sale',
    description: [
      `All orders shall be pre-approved with an acceptable method of payment as established by USMS Saffron Co. Inc. which may call for and require additional verification or information.`,
      `The address at which delivery of the product ordered by you are to be made should be correct and proper in all respects.`,
      `After the receipt of payment from the Buyer, the Vendor shall arrange for the invoicing and delivery of the product to the buyer at the shipping address provided by the Buyer. Any and all orders placed by you on this Site are a firm commitment to purchase and you are obligated to complete the transaction and not contest it in any way.`,
      `Before placing an order you are advised to check the product description carefully. By placing an order for a product you agree to be bound by the conditions of sale included in the item's description.`,
    ],
  },
  {
    title: 'Termination and Effect of termination',
    description: [
      `In addition to any other legal or equitable remedies, USMS Saffron Co. Inc. may, without prior notice to you, immediately terminate the Agreement or revoke any or all of your rights granted under this Agreement. Upon any termination of this Agreement, you shall immediately cease all access to and use of the Site and USMS Saffron Co. Inc. shall, in addition to any other legal or equitable remedies, immediately revoke all password(s) and account identification issued to you and deny your access to and use of this Site in whole or in part. Any termination of this Agreement shall not affect the respective rights and obligations (including without limitation, payment obligations) of the parties arising before the date of termination.`,
    ],
  },
  {
    title: 'International Acess',
    description: [
      `This Site may be accessed from countries other than India. This Site may contain products or references to products that are not available outside of India. Any such references do not imply that such products will be made available outside India. If you access and use this Site outside India you are responsible for complying with your local laws and regulations.`,
    ],
  },
  {
    title: 'Disclaimer',
    description: [
      `EXCEPT AS OTHERWISE PROVIDED IN THE STANDARD TERMS OF SALE THAT GOVERN THE SALE OF EACH PRODUCT ON THIS SITE, THIS SITE, THE PRODUCTS OFFERED FOR SALE ON IT, AND THE TRANSACTIONS CONDUCTED THROUGH IT ARE PROVIDED BY USMS SAFFRON CO. INC. ON AN "AS IS" AND BEST EFFORT BASIS. USMS SAFFRON CO. INC. MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SITE OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THIS SITE. TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, USMS SAFFRON CO. INC. DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, TITLE, QUIET ENJOYMENT, DATA ACCURACY, AND SYSTEM INTEGRATION. THIS SITE MAY INCLUDE INACCURACIES, MISTAKES, OR TYPOGRAPHICAL ERRORS. USMS SAFFRON CO. INC. DOES NOT WARRANT THAT THE CONTENT WILL BE UNINTERRUPTED OR ERROR-FREE.`,
      `TO THE MAXIMUM EXTENT PERMITTED BY LAW, USMS SAFFRON CO. INC. WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THIS SITE, INCLUDING, BUT NOT LIMITED TO INDIRECT, INCIDENTAL, PUNITIVE, EXEMPLARY, SPECIAL, OR CONSEQUENTIAL DAMAGES. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, USMS SAFFRON CO. INC.'S TOTAL LIABILITY TO YOU FOR ANY DAMAGES (REGARDLESS OF THE FOUNDATION FOR THE ACTION) SHALL NOT EXCEED IN THE AGGREGATE THE AMOUNT OF FEES ACTUALLY PAID BY YOU TO USMS SAFFRON CO. INC. DURING THE MONTH IMMEDIATELY PRECEDING THE ACT ALLEGEDLY GIVING RISE TO USMS SAFFRON CO. INC.'S LIABILITY.`,
    ],
  },
  {
    title: 'Links',
    description: [
      `This site may contain links to other sites on the Internet that are owned and operated by third parties. You acknowledge that USMS Saffron Co. Inc. is not responsible for the operation of or content located on or through any such site.`,
    ],
  },
  {
    title: 'Copyright complaints',
    description: [
      `USMS Saffron Co. Inc. respects the intellectual property of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us at Customer Support.`,
    ],
  },
  {
    title: 'Copyright complaints',
    description: [
      `You agree that USMS Saffron Co. Inc.'s remedy at law for any actual or threatened breach of this Agreement would be inadequate and that USMS Saffron Co. Inc. shall be entitled to specific performance or injunctive relief, or both, in addition to any damages that USMS Saffron Co. Inc. may be legally entitled to recover, together with reasonable expenses of any form of dispute resolution, including, without limitation, attorneys' fees.`,
      `No right or remedy of USMS Saffron Co. Inc. shall be exclusive of any other, whether at law or in equity, including without limitation damages injunctive relief, attorneys' fees, and expenses.`,
      `No instance of waiver by USMS Saffron Co. Inc. of its rights or remedies under these terms and conditions shall simply any obligation to grant any similar, future, or other waivers.`,
    ],
  },
  {
    title: 'Electronic Communication',
    description: [
      `When you visit USMS Saffron Co. Inc. or send e-mails to us or give us your feedback, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by e-mail or by posting notices on this website. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.`,
      `"Agreement" means the terms and conditions as detailed herein including all schedules, appendices, annexures, and privacy policy, and will include the references to this agreement as amended, negated, supplemented, varied, or replaced from time to time.`,
      `"Product/Products" means and includes any goods/merchandise/products/services/offers/display items that are uploaded /showcased/displayed on USMS Saffron Co. Inc. by its Vendor and the related description, information, procedure, processes, warranties, delivery schedule, etc.`,
    ],
  },
  {
    title: 'Trademark',
    description: [
      `The wordmark of USMS Saffron Co. Inc. on the home page of the website & other pages and as used in the communication to the User is registered by USMS Saffron Co. Inc.`,
    ],
  },
  {
    title: 'Your Account',
    description: [
      `If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and also you agree to accept responsibility for all activities that occur under your account or password. USMS Saffron Co. Inc. does sell products for children, but it sells them to adults, who can purchase with a credit card or otherwise. If you are under 18, you may use USMS Saffron Co. Inc. only with the involvement of a parent or guardian otherwise, USMS Saffron Co. Inc. has the right to cancel any order or service to the User. USMS Saffron Co. Inc. and its affiliates reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders at their sole discretion. USMS Saffron Co. Inc. and its affiliates reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders at their sole discretion.`,
    ],
  },
];

const TermsAndConditionsPage = () => {
  return (
    <section className={styles.terms_conditions}>
      <Image
        src={LargeScreenBg}
        alt="image backdrop"
        className="hidden lg:inline-block self-start"
      />
      <Image
        src={SmallScreenBg}
        alt="image backdrop"
        className="inline-block h-auto absolute w-[160px] top-[-3%] xxs:top-[-7%] sm:w-[300px] sm:top-[-2%] z-[-1] right-0 lg:hidden"
      />

      <ResponsiveDivWrapper>
        <section className="w-full lg:w-[80%] 2xl:w-[75%]">
          <h1>Condition of Use</h1>

          <section className="flex flex-col gap-5">
            <h2>Terms of use</h2>

            <p>
              When you use the website Babysaffron.com, it is understood that
              the usage is subject to the notices, terms, and conditions set
              forth in this agreement (the "Agreement"). In addition, when you
              use any USMS Saffron Co. Inc. service (e.g., Customer Reviews),
              you will be subject to the rules, guidelines, policies, terms, and
              conditions applicable to such service, and they are incorporated
              into this Agreement by this reference. USMS Saffron Co. Inc.
              reserves the right to change these terms and conditions at any
              time. ACCESSING, BROWSING, OR OTHERWISE USING THE SITE INDICATES
              YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS IN THIS AGREEMENT,
              SO PLEASE READ THIS AGREEMENT CAREFULLY BEFORE PROCEEDING.
            </p>
          </section>

          <section className="flex flex-col gap-5 mt-28">
            <h2>Use of site</h2>

            <section className="flex flex-col gap-10">
              <p>
                You may not reproduce, distribute, display, sell, lease,
                transmit, create derivative works from, translate, modify,
                reverse-engineer, disassemble, decompile or otherwise exploit
                this Site or any portion of it unless expressly permitted by
                USMS Saffron Co. Inc. in writing. You may not make any
                commercial use of any of the information provided on the Site or
                make any use of the Site for the benefit of another business
                unless explicitly permitted by USMS Saffron Co. Inc. in advance.
                USMS Saffron Co. Inc. reserves the right to refuse service,
                terminate accounts, and/or cancel orders at its discretion,
                including, without limitation, if USMS Saffron Co. Inc. believes
                that customer conduct violates applicable law or is harmful to
                USMS Saffron Co. Inc.'s interests. You shall not upload to,
                distribute, or otherwise publish through this Site any Content,
                information, or other material that (a) violates or infringes
                the copyrights, patents, trademarks, service marks, trade
                secrets, or other proprietary rights of any person or firm; (b)
                is libelous, threatening, defamatory, obscene, indecent,
                pornographic, or could give rise to any civil or criminal
                liability under Indian or international law; or (c) includes any
                bugs, viruses, worms, trap doors, Trojan horses or other harmful
                code or properties.
              </p>
              <p>
                USMS Saffron Co. Inc. may assign you a password and account
                identification to enable you to access and use certain portions
                of this Site. Each time you use a password or identification,
                you will be deemed to be authorized to access and use the Site
                in a manner consistent and in agreement with the terms and
                conditions of this Agreement, and USMS Saffron Co. Inc. has no
                obligation to investigate the authorization or source of any
                such access or use of the Site. YOU WILL BE SOLELY RESPONSIBLE
                FOR ALL ACCESS TO AND USE OF THIS SITE BY ANYONE USING THE
                PASSWORD AND IDENTIFICATION ORIGINALLY ASSIGNED TO YOU WHETHER
                OR NOT SUCH ACCESS TO AND USE OF THIS SITE IS ACTUALLY
                AUTHORIZED BY YOU, INCLUDING WITHOUT LIMITATION, ALL
                COMMUNICATIONS AND TRANSMISSIONS AND ALL OBLIGATIONS (INCLUDING
                WITHOUT LIMITATION FINANCIAL OBLIGATIONS) INCURRED THROUGH SUCH
                ACCESS OR USE. You are solely responsible for protecting the
                security and confidentiality of the password and identification
                assigned to you. You shall immediately notify USMS Saffron Co.
                Inc. of any unauthorized use of your password or identification
                or any other breach or threatened breach of this Site's
                security.
              </p>
            </section>
          </section>

          {/* Only be shown in bigger scrren */}
          <section className="hidden flex-col mt-16 gap-16 sm:flex">
            {largeScreenTermsAndCondition.map((term, i) => (
              <section
                key={i}
                className="flex flex-col gap-5"
              >
                <h2>{term.title}</h2>

                <section className="flex flex-col gap-10">
                  {term.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </section>
              </section>
            ))}
          </section>
        </section>
      </ResponsiveDivWrapper>
      {/* <Image
        src={TermsCondition}
        alt="backdrop"
        className=" absolute  flex  xl:hidden  lg:hidden , md:block w-60 mt-[-10] self-start transform scale-x-[-1] right-0 z-[-1]"
      /> */}
    </section>
  );
};

export default TermsAndConditionsPage;
