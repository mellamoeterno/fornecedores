'use client'

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#410808]"> 
    <head>
        {/* Meta Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '569386696176592');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>    
      {/* Images */}      
      <div>
          <img src="/images/img1.png" className="w-full h-full object-cover" />
           <div className="w-full max-w-4xl mx-auto p-4">
           <div className="relative w-full pb-[56.25%] overflow-hidden rounded-2xl shadow-lg">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="../videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
           </div>
          <img src="/images/img2.png" className="w-full h-full object-cover" />          
          <img src="/images/img3.png" className="w-full h-full object-cover" />
          <div className="w-full h-20 flex items-center justify-center bg-[#130202]">
          <button
            className="bg-gradient-to-r from-[#680d0d] via-[#690b0b] to-[#660606] text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-150 transition"
            onClick={() => {
              window.location.href = 'https://pay.kiwify.com.br/apXqq2m';
            }}
          >
            Quero Faturar Mais  
          </button>
          </div> 
          <img src="/images/img4.png" className="w-full h-full object-cover" />                   
          </div>             
          <img src="/images/img5.png" className="w-full h-full object-cover" />

            <div className="w-full h-20 flex items-center justify-center bg-[#410808]">
          <button
            className="bg-gradient-to-r from-[#680d0d] via-[#690b0b] to-[#660606] text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-150 transition"
            onClick={() => {
              window.location.href = 'https://pay.kiwify.com.br/apXqq2m';
            }}
          >
            Quero Minha Lista 
          </button>
          </div>
          <img src="/images/img6.png" className="w-full h-full object-cover" />
           <div className="w-full h-20 flex items-center justify-center bg-[#410808]">
          <button
            className="bg-gradient-to-r from-[#680d0d] via-[#690b0b] to-[#660606] text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md hover:brightness-150 transition"
            onClick={() => {
              window.location.href = 'https://pay.kiwify.com.br/fejmg10';
            }}
          >
            Quero Minha Assessoria 
          </button>
          </div>
      </div>
  );
}
