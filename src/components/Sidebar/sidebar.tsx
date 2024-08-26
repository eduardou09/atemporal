"use client";


import { ISidebar } from '@/interfaces/componets';
import { AiFillDashboard } from 'react-icons/ai';


import { HiMenuAlt2 } from "react-icons/hi";
declare global {
    interface Window {
        fbq?: (arg1: string, arg2: string) => void;
    }
}

const Sidebar = ({ isSmall, handleClick }: ISidebar) => {
    return (
        <div className={`bg-secondaryColor h-screen p-5 flex flex-col items-start transition-all duration-500 ease-in-out ${isSmall ? 'w-20 items-center' : 'w-44'}`}>
           
            <HiMenuAlt2 className='text-white text-3xl cursor-pointer' onClick={handleClick}/>
            <div className='w-full flex items-center justify-center mt-8 text-2xl font-bold text-primaryColor'>

                Nek.
            </div>
            <div className='mt-8'>
                <div className='flex items-center gap-4'>
                    <AiFillDashboard className={`text-white text-3xl ${isSmall ? 'relative left-2' : ''}`} />
                    <div className={`flex mt-2 justify-center items-center gap-2 transition-opacity duration-500 ease-in-out ${isSmall ? 'opacity-0 w-0 transition-opacity duration-200 ease-in-out' : 'opacity-100 w-auto'}`}>
                        Dashboard
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Sidebar;
