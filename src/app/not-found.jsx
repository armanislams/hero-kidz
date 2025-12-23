import Link from 'next/link';
import React from 'react';
import {BiSolidErrorAlt} from 'react-icons/bi'

const Error404 = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center gap-5 items-center'>
            <BiSolidErrorAlt size={100} className='text-primary'/>
            <h2 className="text-4xl font-bold">Page Not FOund</h2>
            <Link href={'/'} className="btn">Go Home</Link>
            
        </div>
    );
};

export default Error404;