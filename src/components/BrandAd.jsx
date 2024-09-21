import React from 'react';
import "./BrandAd.css";

const BrandAd = () => {
  return (
    <>
        <section id='ad-container' className='w-full h-28 sm:h-72 bg-cover'>
            <div className="container h-full mx-auto">
                <div className="brand-heading flex flex-col justify-center items-center w-full h-full px-1 sm:px-0">
                    <h4 className='text-xs sm:text-base md:text-lg lg:text-xl text-white font-semibold uppercase'>Big Deal Creation Assurance</h4>
                    <p className='text-xs sm:text-lg md:text-2xl text-white font-semibold uppercase'>Perfect Corporate Gifting Solutions for your Company</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default BrandAd
