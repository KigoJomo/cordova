import { FC } from 'react';
import CustomLink from '../CustomLink';
import Image from 'next/image';

const Hero: FC = () => {
  const paragraphs = [
    'Cordova is grateful for the snowy environments that bring about our wildest imaginations and greatest adventures. We believe that preserving these environments means preserving the opportunity to enjoy the moments we spend in them.',
    'Cordova’s engineered textiles are Bluesign® certified; our fabrics and trims are responsibly sourced. Cordova and the partners that help bring our designs to life, strive to create a better, more adventurous, future for generations to come.',
  ];

  return (
    <section className="flex flex-col px-0 *:px-4 *:md:px-8">
      <h1 className="md:text-center md:text-[10rem] md:leading-[12rem] md:tracking-[.25rem] lg:tracking-[1rem] lg:text-[14rem] italic md:not-italic transition-all duration-300">
        cordova
      </h1>

      <div className="w-full hidden md:flex gap-6">
        {paragraphs.map((p, index) => (
          <p key={index} className="w-full">
            {p}
          </p>
        ))}
      </div>

      <div className="w-full flex md:hidden flex-col gap-6">
        <p>
          <span className="opacity-60">Our Craft</span> <br />
          is designing tailored ski/snow and après apparel for women who love to
          explore rich illustrious environments and like to feel beautiful while
          doing it.
        </p>
        <CustomLink href='/' label='show me now' />
      </div>

      <Image
        src={'/images/cordova-jacket.webp'}
        alt='cordova'
        width={1000}
        height={1000}
        className='w-full aspect-square md:aspect-[3/1] mt-6 md:mt-12'
        style={{ paddingLeft: '0', paddingRight: '0' }}
       />
    </section>
  );
};

export default Hero;
