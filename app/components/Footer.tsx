'use client';

import React from 'react';
import { MailInput } from './Home/Mail';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground *:text-background px-4 py-6 md:px-6 md:py-12">
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-4">
        <Link href={'/'}>
          <h2 className="uppercase italic">cordova</h2>
        </Link>

        <div className="md:w-1/2">
          <h4 className="capitalize font-semibold mb-4">
            Sign up for our newsletter
          </h4>
          <MailInput dark />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row-reverse md:justify-between gap-4 mt-8 md:mt-16">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <Link href={'/terms-of-service'} className='w-fit'>Terms of Service</Link>
          <Link href={'/privacy-policy'} className='w-fit'>Privacy Policy</Link>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="capitalize w-fit mt-6 cursor-pointer">
          back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
