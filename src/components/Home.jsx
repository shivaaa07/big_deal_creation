import React from 'react'
import HeroBanner from './HeroBanner'
import Categories from './Categories'
import ProductGallery from './ProductGallery'
import MainPopup from './MainPopup'

const Home = () => {
  return (
    <>
      <div className="w-full">
        <HeroBanner />
        <Categories />
        <ProductGallery />
        <MainPopup />
      </div>
    </>
  )
}

export default Home
