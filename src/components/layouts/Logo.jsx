import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
      <Link href={"/"} className="flex gap-4 items-center">
        <Image width={50} height={40} alt="logo" src={"/assets/logo.png"} />
        <h2 className="text-xl font-bold">
          Hero <span className='text-primary'>Kidz</span>{" "}
        </h2>
      </Link>
    );
};

export default Logo;