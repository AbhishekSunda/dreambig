import React from 'react';
import { MdPersonAddAlt1 } from 'react-icons/md'
import Link from 'next/link';


const LoginBanner = ({ children }) => {
    return (
        <div className='flex flex-col gap-y-3'>
            <div className='flex justify-between items-center'>
                <div className=" flex flex-col items-center justify-around bg-[#f3f1edf3] rounded-full border shadow-md p-4 px-16 pb-5">
                    <div className='text-gray-400'>Winnings</div>
                    <div className='text-gray-500 text-2xl'>Guaranteed</div>
                </div>
                <Link href={"/register"}>
                    <MdPersonAddAlt1 size={"4rem"} color='#24199e' className='transition-all hover:scale-90 ' />
                </Link>
            </div>
            <div className='flex justify-between items-center pt-4 pl-7'>
                <div className='flex flex-col justify-center gap-y-2'>
                    <div className='text-gray-400'> Get Started with DreamBig </div>
                    <div className='text-gray-500 text-2xl'>Winnings Upto </div>
                    <div className='flex'>
                        <div className='text-gray-600 text-2xl pr-2'>₹ </div>
                        <div className='text-blue-600 text-xl'>100000</div>
                    </div>
                </div>
                <Link href={"/login"} className='flex flex-col justify-center'>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-full transition-all hover:scale-90 shadow-md"
                    >
                        Login
                    </button>

                </Link>
            </div>

        </div>

    );
};

export default LoginBanner;
