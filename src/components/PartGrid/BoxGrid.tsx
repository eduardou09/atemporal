"use client"
;
import { IBoxGrid } from '@/interfaces/componets';
import React from 'react';


const BoxGrid = ({mainText, subText,isLeft}:IBoxGrid) => {
    return(
        <div className={isLeft? `bg-secondaryColor rounded-2xl p-8 justify-center items-center flex flex-col gap-8` : `bg-gradient-to-r from-lightGreen to-darkGreen rounded-2xl p-8 justify-center items-center flex flex-col gap-8 animate-pulse`} >
           <div className={isLeft? `text-primaryColor text-5xl font-semibold` : `text-textColorSecondary text-5xl font-semibold`}>{mainText}</div> 
            <div className='text-white'>{subText && subText}</div>
        </div>
    )


}
export default BoxGrid
