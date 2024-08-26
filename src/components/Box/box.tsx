"use client"
import { IBox } from '@/interfaces/componets';
import Image from 'next/image';
import React from 'react';

const Box = ({title, text, icon, photo, isPhoto, ref
 }:IBox ) => {
    return (
        <div className='bg-secondaryColor flex p-3 flex-col flex-1 rounded-xl gap-4 ' ref={ref}>
            <div className='flex gap-3 items-center'>
               {isPhoto ? <div> <Image src={photo} alt="Imagem Hero" className='bg-primaryColor p-1 rounded-lg text-black w-12' />
               </div> 
                :
               <div className='bg-primaryColor p-1 rounded-lg text-black text-4xl'>{icon}</div> } 
                <div className='text-white'>{title}</div>
            </div>
            <div className=' text-textColorSecondary' >{text}</div>
        </div>
    )
}

export default Box