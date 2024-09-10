
"use client"
import React from 'react';
import Link from 'next/link';
import { IButton } from '@/interfaces/componets';

const Button = ({ title, width, padding = "py-1", onClick, disabled, radius = "rounded-3xl", loading }: IButton) => {
  return (

    <button type="button" className={`${width} ${padding}  text-black px-8 text- rounded-3xl max-md:text-lg ${radius} flex items-center justify-center`} onClick={onClick} disabled={disabled}>
      {loading === true ? (
       
     <>
          <svg
            className="animate-spin h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <div className="ml-2">{title}</div>
        </>
          
       
      ) : <div>{title}</div>}
    </button>

  );
}

export default Button;
