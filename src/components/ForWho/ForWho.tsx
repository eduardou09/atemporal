"use client"
import React, { useEffect } from 'react';
;
import { IoIosBusiness } from "react-icons/io";
import IconErrorPc from '@/public/icons/iconErrorPC.png'
import { AiOutlineCluster } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { isMobile } from 'react-device-detect';
import Aos from 'aos';
import Box from '../box/box';
import AboutUs from '../aboutUs/ForWho';
const ForWho = ({ ref, serviceRef, toys }: any) => {
  
    useEffect(() => {
        // Código que depende do DOM aqui
        Aos.init({
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
        <div className='flex items-center flex-col justify-center  '>
            <div className='text-4xl font-bold mb-10 text-black '>
            Aqui você vai encontrar de tudo
            </div>
            <div className='text-base mb-10 text-black text-center'>
            Imagine um lugar onde os sonhos de infância ganham vida, um museu mágico com mais de 10.000 brinquedos! Aqui, você encontrará desde bonecas que contam histórias até carrinhos que voam na sua imaginação. É um mundo onde todo tipo de brinquedo que você possa imaginar está esperando para ser descoberto! 
            </div>

            <div className={isMobile ? `flex flex-wrap gap-6 flex-col` : `flex  gap-6  `} data-aos="fade-right">
              
                <Box
                    icon={<IoIosBusiness />}
                    title='Segunda Guerra'
                    text='Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod.'
                />
           
                
         
                <Box
                    isPhoto={true}
                    photo={IconErrorPc}
                    title='ciência  '
                    text='Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod.'
                />
            
              
            
                    <Box
                        icon={<GiReceiveMoney />}
                        title='Cultura '
                        text='Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod.'
                    />
         

             
                    <Box

                        icon={<AiOutlineCluster />}
                        title='Século XIX'
                        text='Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis, mi ligula euismod.'
                    />
                    
             
            </div>
            <div ref={serviceRef}>
            <button className="flex items-center gap-2 bg-primaryColor justify-center py-3  px-7 mt-8"  >
                                                Ver brinquedos
            </button>
            </div>
            <div>
                <AboutUs toys={toys}/>
            </div>
        </div>
    )
}

export default ForWho