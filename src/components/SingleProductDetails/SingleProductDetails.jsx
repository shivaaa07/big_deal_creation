import React from 'react'
import SizeChart from './SizeChart'

const SingleProductDetails = () => {
  return (
    <>
        <div className="container mx-auto">
            <p className="product-name">Multicolor Oversized Half Sleeves T Shirt</p>
            <div className="price">Rs. 499</div>
            {/* <div className="size-chart">
                <input type="text" name='M' value="M" className='cursor-pointer' />
            </div> */}
            <SizeChart />
        </div>
    </>
  )
}

export default SingleProductDetails
