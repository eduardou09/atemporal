"use client"
import { IBox } from '@/interfaces/componets';
import Image from 'next/image';
import React from 'react';

const Box = ({title, text, icon, photo, isPhoto, ref
 }:IBox ) => {
    return (
        <div className='border border-[#333333] flex p-3 flex-col flex-1 rounded-sm gap-4 ' ref={ref}>
            <div className='flex gap-3 items-center flex-col '>
               {isPhoto ? <div> <Image src={photo} priority   alt="Imagem Hero" className='border border-[#333333] p-1 rounded-lg text-black w-12' />
               </div> 
                :
               <div className=' p-1 rounded-lg text-black text-4xl border border-[#333333]' >{icon}</div> } 
                <div className='text-black text-center'>{title}</div>
            </div>
            <div className=' text-textColorSecondary text-center' >{text}</div>
        </div>
    )
}

export default Box