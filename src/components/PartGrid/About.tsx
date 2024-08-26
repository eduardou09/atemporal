"use client"
    ;
import { IBoxGrid } from '@/interfaces/componets';
import React from 'react';
import BoxGrid from './BoxGrid';
import Image from 'next/image';
import photo from '@/public/images/eduardoFoto.jpeg'
import { isMobile } from 'react-device-detect';

const About = ({aboutRef}:any) => {
    
    return (
        <div className=' flex bg-secondaryColor rounded-2xl p-4 max-md:p-8 ' ref={aboutRef}>
            <div className='flex pl-8 flex-col justify-center max-md:pl-0 '>
                <div className='text-3xl font-semibold mb-10 text-primaryColor '>Quem esta por tras da NEK</div>
                <div className='w-5/6 text-lg max-md:w-full text-white'>A Nek teve início em janeiro de 2023, fundada por Eduardo Ulysséa. Sua motivação para começar a empresa surgiu da necessidade de dar uma aparência mais profissional aos seus projetos de desenvolvimento de softwares e websites, já que frequentemente contratava diversos freelancers para realizar essas tarefas. Além disso, Eduardo acalentava o sonho de se tornar um empreendedor, e como já possuía experiência como desenvolvedor, viu a oportunidade de unir o útil ao agradável.</div>
            </div>
            {isMobile ? <div> </div> :
                <div className='flex '>
                    <Image src={photo} alt="Imagem Hero" className={` p-1 rounded-2xl text-black w-full `} />
                </div>}

        </div>
    )


}
export default About 
