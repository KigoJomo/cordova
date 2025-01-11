import Image from 'next/image';
import { FC } from 'react';

const About: FC = () => {
  return (
    <section className="mt-8 px-0">
      <div className="w-full md:w-3/5 ml-auto flex flex-col gap-6">
        <h3 className='px-4 order-1'>About us</h3>
        <p className='px-4 order-2'>
          At Cordova, we believe that life is about seeking penultimate beauty
          and adventure. Our craft is designing tailored ski and après ski
          apparel for women who boldly seek altitude, delight in the thrill of
          the descent and relish in mountain leisure without sacrificing style
          and glamour. Our designs are reflections of the women who wear them -
          inspired, timeless, and confident.
        </p>
        <p className="px-4 text-xs order-4 md:order-3">
          The concept for Cordova was imagined on the slopes of Sun Valley,
          Idaho, in 2014 where Creative Director & Founder Jane Soim, and
          Co-Founder, Cody Seim were married one snowy evening at the iconic,
          Roundhouse Lodge. For Jane and Cody the mountains had always
          represented a sense of escapism, freedom, and creativity. During the
          winter months, they ascend into the snow-covered mountains every
          weekend to lose themselves in crystal snow fields and snow ghost
          evergreens.
        </p>

        <Image
          src={'/images/brown-jacket.webp'}
          alt="about cordova"
          width={800}
          height={200}
          className="w-full aspect-[4/3] md:aspect-[4/1] order-3 md:order-4 md:px-4"
        />
      </div>
    </section>
  );
};

export default About;
