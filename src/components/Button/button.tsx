
"use client"
import React from 'react';
import Link from 'next/link';
import { IButton } from '@/interfaces/componets';

const Button = ({ title, width, padding = "py-1", onClick,disabled, radius = "rounded-3xl", }: IButton) => {
  return (
 
      <button type="button" className={`${width} ${padding}  text-black px-8 rounded-3xl max-md:text-lg bg-white ${radius}`} onClick={onClick} disabled={disabled}>
        {title}
      </button>
    
  );
}

export default Button;
