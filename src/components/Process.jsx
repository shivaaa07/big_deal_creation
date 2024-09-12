import React from 'react';
import fastDelivery from "../assets/icons/fast-delivery.png"
import trusted from "../assets/icons/trusted.png"
import order from "../assets/icons/order.png"

const Process = () => {

    const deliveryProcess = [
        {
            processImg : fastDelivery,
            imgAltTag: "Super Fast Delivery",
            processTitle : "Super Fast",
            processDescription : "Great Service with Quick Delivery"
        },
        {
            processImg : trusted,
            imgAltTag : "Trusted",
            processTitle : "Trusted",
            processDescription : "Quality Build over 4+ Years"
        },
        {
            processImg : order,
            imgAltTag : "Easy Order",
            processTitle : "Easy Order",
            processDescription : "No Minimum Order Quantity Required"
        }
    ]

  return (
    <section className='my-8'>
        <div className="container mx-auto">
            <div className="heading">
                <h4 className='text-center text-5xl font-protest '>
                    Print Made Easy
                </h4>
            </div>
            <div className="process-cards flex flex-col sm:flex-row justify-evenly items-center gap-8 mt-4">
                {
                    deliveryProcess.map((ele, index) => (
                    <div className="card text-center sm:text-left" key={index}>
                        <img src={ele.processImg} alt={ele.imgAltTag} className='w-20 mx-auto sm:mx-0' />
                        <div className="card-info">
                            <h4 className='text-xl font-semibold font-poppins'>{ele.processTitle}</h4>
                            <p className='max-w-40 font-poppins'>{ele.processDescription}</p>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Process
