import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Image from 'next/image'

const Clients = () => {
  return (
    <section className="py-12 mt-12">
      <div className="container">
        {/* HEADING  */}  
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h2 className="text-4xl font-semibold text-neutral-d_gray">Our Clients</h2>
          <p className="text-neutral-gray">We have been working with some Fortune 500+ clients</p>
        </div>
        {/* CLIENT SLIDER  */}
        <div className="py-10 mt-9">
          <Carousel>
            <CarouselContent>
              {
                Array(7).fill(null).map((_, i) => {
                  return (
                    <CarouselItem className="basis-1/3 md:basis-1/5 flex items-center justify-center">
                      <Image src={`/icon${i+1}.png`} alt='' width={40} height={40} className="object-cover " key={i}/>
                    </CarouselItem>
                  )
                })
              }
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Clients
