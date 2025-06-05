'use client'

import React from 'react';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#410808]">     
      {/* Images */}      
      <div>
          <img src="/images/img1.png" className="w-full h-full object-cover" />
          
          <img src="/images/img2.png" className="w-full h-full object-cover" />          
          <img src="/images/img3.png" className="w-full h-full object-cover" />
          <div className="w-full h-20 flex items-center justify-center bg-[#130202]">
          <button
            className="bg-gradient-to-r from-[#680d0d] via-[#690b0b] to-[#660606] text-gray-950 font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-110 transition"
            onClick={() => {
              window.location.href = 'https://pay.kiwify.com.br/apXqq2m';
            }}
          >
            Quero Faturar Mais  
          </button>
          </div> 
          <img src="/images/img4.png" className="w-full h-full object-cover" /> 
          <img src="/images/img5.png" className="w-full h-full object-cover" />          
          <img src="/images/img6.png" className="w-full h-full object-cover" />          
          <img src="/images/img7.png" className="w-full h-full object-cover" />
          <img src="/images/img8.png" className="w-full h-full object-cover" />                   
      </div>             
          <img src="/images/img9.png" className="w-full h-full object-cover" />

            <div className="w-full h-20 flex items-center justify-center bg-[#410808]">
          <button
            className="bg-gradient-to-r from-[#680d0d] via-[#690b0b] to-[#660606] text-gray-950 font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-110 transition"
            onClick={() => {
              window.location.href = 'https://pay.kiwify.com.br/apXqq2m';
            }}
          >
            Quero Minha Lista 
          </button>
          </div> 
      </div>
  );
}
