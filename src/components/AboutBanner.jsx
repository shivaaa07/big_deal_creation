import React from 'react'

const AboutBanner = () => {
  return (
    <section className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full mb-8'>
      <div className="container h-72 mx-auto">
        <div className="bannerInfo h-full flex justify-center items-center flex-col">
          <h4 className='text-white text-3xl font-semibold font-protest tracking-wider'>Welcome To Procter</h4>
          <h1 className='text-white text-3xl font-semibold font-protest tracking-wider'>Corporate Gifting Company</h1>
        </div>
      </div>
    </section>
  )
}

export default AboutBanner
