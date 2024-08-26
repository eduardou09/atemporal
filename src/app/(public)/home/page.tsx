"use client";

import Footer from '@/components/Footer/footer';
import ForWho from '@/components/ForWho/ForWho';
import Form from '@/components/Form/form';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import GridBoxes from '@/components/PartGrid/Grid';
import Service from '@/components/Services /services';
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
  const [forms, setForms] = useState<any>({});
  const { isHeader, setIsHeader, form } = useStoreMain();

  useEffect(() => {
    loadForm();
  }, []);

  const loadForm = async () => {
    const { data, error } = await supabase
      .from('form')
      .select();
    console.log(data);
    if (error) {
      console.error(error);
      return;
    }
    setForms(data);
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




  return (
    <div className='bg-black'>
      <Header
        onClickSecond={handleScrollAbout}
        onClickFirst={handleScrollService}
        onClickPC={handleScrollServiceButton}
        first="Serviços"
        second="Sobre nós"
        serviceRef={serviceRef}
        isHeader={isHeader}
        handleClick={handleClick}
        isContact={true}
      />
      <div className='mx-56 max-lg:mx-4 mb-20' >
        <Hero handleScrollServiceButton={handleScrollServiceButton} />
      </div>
      <Form />
      <div className='mx-56 max-lg:mx-4 mb-16 ' >
        <ForWho serviceRef={serviceRef} />
        <Service />
        </div>

        <div className='mx-56 max-lg:mx-4 mb-32' >
        <GridBoxes aboutRef={aboutRef} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
