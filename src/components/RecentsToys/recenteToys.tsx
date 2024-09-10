"use client"
import { IBox, IRecentsToys } from '@/interfaces/componets';
import Image from 'next/image';
import React from 'react';

const RecentsToys = ({imgs}:IRecentsToys) => {
    return (
        <div >
            <div className=' flex flex-col items-center justify-center'>
                <div >
                    Nossos Brinquedos
                </div>
                <div className='text-4xl font-bold'>
                    Brinquedos postados Recentemente
                </div>
            </div>
        </div>
    )
}

export default RecentsToys