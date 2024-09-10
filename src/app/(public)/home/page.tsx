"use client";


import ForWho from '@/components/ForWho/ForWho';
import Form from '@/components/Form/form';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import OldToys from '@/components/OldToys/OldToys';
import OurToys from '@/components/OurToys/OurToys';
import GridBoxes from '@/components/PartGrid/Grid';
import RecentsToys from '@/components/RecentsToys/recenteToys';
import View from '@/components/View/view';

import { supabase } from '@/config/supabaseClient';
import useStoreMain from '@/utils/stateSite';

import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    fbq?: (arg1: string, arg2: string) => void;
  }
}

const Home = () => {
  // Inicializa o estado com um objeto vazio
  const [toys, setToys] = useState<any>({});
  const [view, setView] = useState<any>([]);
  const { isHeader, setIsHeader, form } = useStoreMain();

  useEffect(() => {
    loadForm();
  }, []);


  useEffect(() => {
    loadView();
  }, []);
  const loadForm = async () => {
    const { data, error } = await supabase
      .from('Toys')
      .select();
    console.log(data);
    if (error) {
      console.error(error);
      return;
    }
    setToys(data);
  };
  const loadView = async () => {
    const { data, error } = await supabase
      .from('View')
      .select();
    console.log(data);
    if (error) {
      console.error(error);
      return;
    }
    setView(data);
  };

  const serviceRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const handleScrollService = () => {
    serviceRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsHeader(!isHeader);
  };

  const handleScrollServiceButton = () => {
    serviceRef.current?.scrollIntoView({ behavior: 'smooth' });

  };

  const handleScrollAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsHeader(!isHeader);

  };

  const handleClick = () => {
    setIsHeader(!isHeader);
  };


console.log({toys}, {view})

  return (
    <div className='bg-primaryColor'>
      <Header
        onClickSecond={handleScrollAbout}
        onClickFirst={handleScrollService}
        onClickPC={handleScrollServiceButton}
        first="Brinquedos"
        second="Sobre nós"
        serviceRef={serviceRef}
        isHeader={isHeader}
        handleClick={handleClick}
        isContact={true}
      />
      <div className='ml-56 max-lg:mx-4 mb-20' >
        <Hero handleScrollServiceButton={handleScrollServiceButton} />
      </div>
      
      <div className='bg-white py-16'>
        <div className='mx-56 max-lg:mx-4  bg-white'>
        <ForWho serviceRef={serviceRef} toys={toys} />
        </div>
      </div>
      <div className='max-lg:mx-4  bg-[#333333]' >
        <div className='mx-56 max-lg:mx-4  '>

        </div>
       <RecentsToys imgs={toys}/>
       <OurToys  imgs={toys}/>
      </div>
      <div className='bg-white py-16'>
        <OldToys imgs={toys}/>
        <View imgs={view} />
      </div>

        <div className=' max-lg:mx-4 mb-32' >
      
        <Form />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
