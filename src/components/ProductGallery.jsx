import React from 'react'
import diwaliGift from "../assets/diwali-gifting-ideas.webp";
import diwali from "../assets/diwali-gift-hampers.webp";
import "./ProductGallery.css"

const ProductGallery = () => {

  const diwaliProduct = [
    {
      ProductImg : diwali,
      productName : "Diwali Gift Hamper"
    },
    {
      ProductImg : diwali,
      productName : "Diwali Gift Hamper"
    },
    {
      ProductImg : diwali,
      productName : "Diwali Gift Hamper"
    },
    {
      ProductImg : diwali,
      productName : "Diwali Gift Hamper"
    }
  ]

  return (
    <>
    <div className="container mx-auto my-16">
      <div className="gallery md:block md:w-full lg:flex justify-center gap-4">
        <div className="sliderWrapper px-4">
          <img src={diwaliGift} alt="Diwali Gifting ideas" className='w-full md:h-full lg:h-full xl:h-full rounded-3xl'/>
        </div>
          <div className="grid sm:grid-cols-2 place-items-center lg:place-items-start gap-3 mt-4 lg:mt-0">
          {
            diwaliProduct.map((productList, index) => (
              <div key={index} className="product w-72 ">
                <img src={productList.ProductImg} alt="Diwali Gift Hamper" className='w-full h-64 rounded-3xl lg:w-64 xl:w-full' />
                <div className="overlay w-full rounded-3xl lg:w-64 xl:w-full h-64">
                  <p>{productList.productName}</p>
                </div>
              </div>                    
            ))
          }
          </div>        
      </div>
    </div>
    </>
  )
}

export default ProductGallery
