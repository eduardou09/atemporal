

"use client"
import { IBox } from '@/interfaces/componets';
import Image from 'next/image';
import React from 'react';


import useEmblaCarousel from 'embla-carousel-react';
import '../../app/swiperCustom.css'; // Importe o CSS personalizado

// Import custom Swiper styles
import '../../app/swiperCustom.css'; // Importa o CSS personalizado

const SwiperComponent = ({
    view}:any ) => {
        const [emblaRef] = useEmblaCarousel();
        return (
            <div className="embla mt-16 ">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container ">
                {view.map((item) => (
                  <div className="embla__slide border h-[300px]" key={item.id} >
                    <div className="embla__slide__inner">
                    <p className="text-black max-w-full w-56 flex-wrap break-words">
                  "{item.about}"
                </p>

                      <div>
                        <h3 className='text-black font-semibold'>{item.name}</h3>
                        <p className="text-black max-w-full">{item.contry}</p>
                      </div>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          );
}

export default SwiperComponent