"use client"

import { ITextArea } from '@/interfaces/componets';
import React, { useState } from 'react';



const TextArea = ({ placeholder, onChange, value,label}: ITextArea) => {
    return (
        <div className='flex w-full flex-col'>
            {label}
            <textarea
                name=""
                id=""
                cols={parseInt("10")} // Convertendo a string "20" para um número usando parseInt
                rows={5} // Este é um número, então não há necessidade de conversão
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                
                className="px-4 py-1 border border-neutral-600 rounded-sm hover:border-primaryColor bg-transparent flex-1"
            >
            </textarea>
        </div>
    )


}
export default TextArea