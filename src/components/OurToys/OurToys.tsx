"use client"
import { IBox, IRecentsToys } from '@/interfaces/componets';
import Image from 'next/image';
import React from 'react';

const OurToys = ({imgs}:IRecentsToys) => {
    return (
        <div >
            <div className=' flex flex-col items-center justify-center mt-24'>
                <div className='text-4xl font-bold'>
                   Veja nossos brinquedos
                </div>
                <div >
                Confira todos os nossos brinquedosssss
                </div>
            </div>
        </div>
    )
}

export default OurToys