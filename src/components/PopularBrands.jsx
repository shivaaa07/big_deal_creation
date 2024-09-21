import React from 'react';
import adidas from "../assets/ourTopBrands/adidas.webp"
import american_tourister from "../assets/ourTopBrands/american-tourister.webp"
import borosil from "../assets/ourTopBrands/borosil.webp"
import jbl from "../assets/ourTopBrands/jbl.webp"
import noise from "../assets/ourTopBrands/noise.webp"

const PopularBrands = () => {
    const brands = [
        {
            brandsImg : noise,
            altAttribute : "Noise"
        },
        {
            brandsImg : jbl,
            altAttribute : "JBL"
        },
        {
            brandsImg : borosil,
            altAttribute : "Borosil"
        },
        {
            brandsImg : american_tourister,
            altAttribute : "American Tourister"
        },
        {
            brandsImg : adidas,
            altAttribute : "Adidas"
        },
    ]
  return (
    <>
        <div className="brand-wrapper my-8">
            <div className="container mx-auto">
                <h3 className='text-2xl text-black font-semibold text-center'>Our Brand Partner</h3>
                <div className="flex justify-center">
                    {
                        brands.map((brand, index)=>(
                            <div className="brandImgWrapper w-52 h-52" key={index}>
                                <img src={brand.brandsImg} alt={brand.altAttribute} className='w-full h-full' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default PopularBrands
