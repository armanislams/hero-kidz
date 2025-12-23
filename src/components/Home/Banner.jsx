import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
      <div className="flex justify-between items-center">
        <div className="flex-1 space-y-5">
          <h2 className={`text-6xl font-bold leading-20 ${fontBangla.className}`}>
            আপনার বাচ্চার জন্য <span className='text-primary'>খেলনা</span> কিনুন
          </h2>
          <p className="">buy toys with 50% discount</p>
          <button className="btn btn-primary btn-outline">
            explore product
          </button>
        </div>
        <div className="flex-1">
          <Image
            alt="buy toys with 50% discount"
            width={500}
            height={400}
            src={"/assets/hero.png"}
          />
        </div>
      </div>
    );
};

export default Banner;