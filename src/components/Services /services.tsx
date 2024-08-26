"use client";
import React, { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import custom Swiper styles
import '../../app/swiperCustom.css'; // Importa o CSS personalizado
import { useRef } from 'react';
import AOS from 'aos';
///import
import ServiceBox from './boxServices';
import photoMarlene from '@/public/images/marlenefoto.png'
import photoMentoriaTeste from '@/public/images/mentoria.webp'
import photoTrafego from '@/public/images/trafego.webp'
import photoManutencao from '@/public/images/manutencao.webp'
import photoSite from '@/public/images/site.webp'
import photoSoft from '@/public/images/software.webp'
import photoDashboards from '@/public/images/fotoDashboard.png'

const Service = ({ serviceRef }: any) => {

    useEffect(() => {
        // Código que depende do DOM aqui
        AOS.init({
            offset: 400,
            delay: 0,
            duration: 1300,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });

    })


    services: [
        {
            timeLine: ['discovery', 'Design', 'Desenvolvimento', 'Implantação']
        }]
    return (
        <div className='  w-full mt-10'>
            <div className="items-center justify-center text-center pt-6">
             
                <div className="text-3xl  ">Confira <br></br><span className='text-primaryColor font-semibold'>Nossos Serviços</span> </div>
            </div>
            <div id='servico' ref={serviceRef} className='mb-10 bg-secondaryColor rounded-2xl py-2 mt-6  px-3  md:p-1 max-md:' data-aos="flip-up" >

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide >
                        <ServiceBox
                            service='Softwares'
                            subtitleService='Um software exclusivo, desenvolvido sob medida para atender às necessidades, '
                            stages={['Software é essencial para automatizar processos repetitivos.', ' Melhorar gerenciamento de projetos de forma integrada.', 'Software pode organizar e analisar grandes volumes de dados.']}
                            photo={photoSoft}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServiceBox
                            service='Sites'
                            subtitleService={`Desenvolvemos sites para impulsionar suas vendas e aumentar os números clientes`}
                            stages={['Site bem estruturado aumenta a visibilidade da empresa na internet.', ' Transmite credibilidade para os visitantes.', 'Sendo otimizado é uma poderosa ferramenta para geração de leads.', ]}
                            photo={photoSite}
                            widthImg={'w-max'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServiceBox
                            service='Dashboards'
                            subtitleService={`Dashboards personalizados para você monitorar e analisar os dados da sua empresa.`}
                            stages={['Use os dados para tomar suas decisões.', 'Acompanhe o progresso das suas metas.', 'Melhore a eficiência e a produtividade com os dados.', ]}
                            photo={photoDashboards}
                            widthImg={'w-max'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServiceBox
                            service='Gestão de Tráfego'
                            subtitleService={` Com a gestão de tráfego, direcionamos clientes qualificados para o seu negócio.`}
                            photo={photoTrafego}
                            stages={['Direciona visitantes  para aumentar conversões.', 'Maximiza retorno sobre o investimento.', 'Facilita análise para ajustar estratégias.']}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ServiceBox
                            service='Manutenção de Software'
                            subtitleService={`Manutenção especializada para garantir que seu sistema funcione sempre de maneira eficiente e segura. `}
                            stages={['Correção.',  'Otimização.', 'Atualização.']}
                            photo={photoManutencao}
                            widthImg={'w-max'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServiceBox
                            service='Mentoria para Empresas'
                            subtitleService={`Identificamos os pontos fracos e áreas a se melhorar em sua empresa. `}
                            stages={['Entender a empresa.', 'Pontuar melhorias.', 'Apresentação das soluções.']}
                            photo={photoMentoriaTeste}
                            widthImg={'w-max'}
                        />
                    </SwiperSlide>

                </Swiper>
            </div >

        </div>

    );
}

Services: [
    {
        title: 'Desenvolvimento de Software',
        text: 'Desenvolvimento de softwares do zero, Desde a validação da ideia até a implantação',
        timeLine: ['Discovery', 'Design', 'Desenvolvimento', 'Implantação']
    }
]

export default Service;
