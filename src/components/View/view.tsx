"use client"
import { IBox, IRecentsToys } from '@/interfaces/componets';
import Image from 'next/image';
import React from 'react';
import Swiper from 'swiper';
import SwiperComponent from '../swiper/swiper';

const View = ({imgs}:IRecentsToys) => {
    console.log({imgs} , 'swiper');
    return (
        <div >
            <div className=' flex flex-col items-center justify-center mt-12'>
            <div className='text-black'>
                   visitantes
                </div>
                <div className='text-4xl font-bold text-black'>
                O que as pessoas acharam 
                </div>
                <div>
                    <SwiperComponent view={imgs}/> 
                </div>
            </div>
        </div>
    )
}

export default View