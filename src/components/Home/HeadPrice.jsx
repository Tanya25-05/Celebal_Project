import React from "react"
import Heading from "../Common/Heading/Heading"
import PriceCard from "../pricing/PriceCard"

const HeadPrice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='OUR PRICING' title='Pricing & Packages' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default HeadPrice