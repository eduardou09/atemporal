"use client";

import { IBoxGrid } from '@/interfaces/componets';
import React, { useEffect } from 'react';
import BoxGrid from './BoxGrid';
import About from './About';
import { isMobile } from 'react-device-detect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GridBoxes = ({ aboutRef }: any) => {


    useEffect(() => {
        // Código que depende do DOM aqui
        AOS.init({
            offset: 300,
            delay: 0,
            duration: 1300,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    
    })
    
   

    return (
        <div className={isMobile ? `flex gap-6 flex-col ` : `grid grid-rows-2 gap-10 `}>
            <div className='flex' data-aos="fade-right">
                <BoxGrid
                    mainText='Uma equipe altamente capacitada para grandes projetos.'
                    subText='Uma equipe de profissionais altamente capacitada para transformar suas ideias e seus problemas em soluções inovadoras. '
                    isLeft={true}
                />
            </div>
            <div data-aos="fade-up" className='flex'>
                <BoxGrid
                    mainText='Utilizando a tecnologia e o digital para alavancar seu negócio.'
                />
            </div>
            <div className='col-span-2' id='about' data-aos="fade-up">
                <About
                    aboutRef={aboutRef}
                />
            </div>
        </div>
    );
};

export default GridBoxes;