"use client"
import { IBox, IRecentsToys } from '@/interfaces/componets';
import Image from 'next/image';
import React from 'react';

const OldToys = ({imgs}:IRecentsToys) => {
    return (
        <div >
            <div className=' flex flex-col items-center justify-center mt-12'>
                <div className='text-black'>
                   Saiba mais
                </div>
                <div className='text-4xl font-bold text-black'>
                Brinquedos mais antigos
                </div>
            </div>
        </div>
    )
}

export default OldToys