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
const AboutUs = ({ toys }: any) => {

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
    console.log({ toys })
    return (
        <div className='flex items-center flex-col justify-center  mt-20'>
            <div className='text-4xl font-bold mt-10 text-black w-full text-center mb-10'>
                Quem somos nós
            </div>
            <div className='flex  w-full h-full'>
                {/* Primeira div com bg-primaryColor */}
                <div className='w-1/4 bg-primaryColor flex-grow flex items-center justify-center py-10'>
                    <div className='r w-full flex items-center justify-center flex-col'>
                        <div className='border-b border-[#FFFFFF] text-center pb-5'>
                            <div className='text-[130px] font-bold m-0'>{toys.length}</div>
                            <div>Brinquedos postados</div>
                        </div>
                        <div className='flex my-7'>
                            <div className='flex flex-col text-center border-r border-[#ffffff] pr-5'>
                                <div className='text-[60px] font-bold '>
                                    +10220
                                </div>
                                <div>
                                    Brinquedos
                                </div>
                            </div>
                            <div className='flex flex-col text-center  pl-5'>
                                <div className='text-[60px] font-bold '>
                                    98%
                                </div>
                                <div > 
                                    Restantes
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Segunda div */}
                <div className='w-2/4 flex flex-col justfy-center justify-center px-20'>
                    <div className='text-3xl font-semibold  text-start text-black w-full  mb-8'>
                    Maior museu de brinquedo da internet
                    </div>
                    <div className='text-base text-black w-full text-start'>
                        Nós somos o museu digital Atemporal, criado por Johannes Kraemmer. Aqui, brinquedos reais, cuidadosamente coletados ao longo dos anos, são expostos na internet, permitindo que você explore um acervo fascinante sem sair de casa. Cada peça traz consigo uma história, e graças à paixão de Johannes, essas histórias agora podem ser descobertas por pessoas de todas as partes do mundo, em um espaço onde a magia dos brinquedos ganha vida online.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs