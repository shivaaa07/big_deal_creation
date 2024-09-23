import React from 'react'

const SizeChart = () => {
  return (
    <>
        <div className="size-chart text-sm">Size Chart : <span className='text-indigo-500'>Select Size</span></div>
        <button className='size-chart-btn mx-1 py-1 px-3 rounded-sm border-[1px] border-solid border-gray-400'>S</button>
        <button className='size-chart-btn mx-1 py-1 px-3 rounded-sm border-[1px] border-solid border-gray-400'>M</button>
        <button className='size-chart-btn mx-1 py-1 px-3 rounded-sm border-[1px] border-solid border-gray-400'>L</button>
        <button className='size-chart-btn mx-1 py-1 px-3 rounded-sm border-[1px] border-solid border-gray-400'>XL</button>
        <button className='size-chart-btn mx-1 py-1 px-3 rounded-sm border-[1px] border-solid border-gray-400'>2XL</button>
        <button className='size-chart-btn mx-1 py-1 px-3 rounded-sm border-[1px] border-solid border-gray-400'>3XL</button>
    </>
  )
}

export default SizeChart
