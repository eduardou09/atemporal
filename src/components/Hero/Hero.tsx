


"use client"
import React, { useEffect } from 'react';

import { IButton } from '@/interfaces/componets';
import Button from '../Button/button';
import Image from 'next/image';
import foto from '@/public/images/fotoHeroCorrect.svg'
import fotoMobile from '@/public/images/mobileFotoCorrect.svg'
import { isMobile } from 'react-device-detect';
import Aos from 'aos';



const Hero = ({ handleScrollServiceButton }: any) => {
    useEffect(() => {
        // Código que depende do DOM aqui
        Aos.init({
            offset: 10,
            delay: 0,
            duration: 1300,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });

    })
    return (
        <div className='flex justify-between mt-20 items-center max-md:mt-5 max-md:flex-col-reverse'>
            <div className='max-w-xl flex flex-col  max-md:items-center ' data-aos="fade-right">
                <p className='text-white text-5xl font-bold  text-left  max-md:text-center  max-md:text-3xl'>
                    <span className='text-white'> Os Brinquedos mais
                        tradicionais do
                        mundo  </span>
                </p>
                <p className='text-white  text-base max-md:text-center mt-4 mb-14 '>Confira o museu Digital mais tradicional da Alemanha com mais de 10.000 brinquedos. </p>
                <div className='text-xl '>
                    <Button
                        title='Ver brinquedos'
                        width='max-md:w-full text-base  bg-white'
                        onClick={handleScrollServiceButton}
                    />
                </div>

            </div>
            <div >
                <div >
                    {/* Usando a tag <Image> do Next.js com a largura especificada */}
                    <Image src={isMobile ? fotoMobile : foto} alt="Imagem Hero" className='w-94 max-md:mb-10 ' data-aos="fade-right" />

                </div>

            </div>
        </div>
    );
}

export default Hero;