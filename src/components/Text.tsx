import Image from 'next/image'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

const Text = () => {
  return (
    <section className='py-12 bg-neutral-sliver h-max'>
      <div className="container h-max flex flex-col lg:flex-row justify-center items-center">
        {/* IMAGE CONTAINER */}
        <div className="h-[500px] w-full lg:w-1/3" >
          <Image src={'/image 9.png'} alt='img' width={500} height={500} className='size-full object-contain'/>
        </div>
        {/* TEXT CONTAINER  */}
        <div className="text-center lg:text-start flex flex-col gap-6 lg:w-2/3 px-6 h-full">
          <p className='text-neutral-gray text-xl'>
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h3 className='text-primary text-3xl font-semibold'>Tim Smith</h3>
          <p className='text-neutral-gray'>British Dragon Boat Racing Association</p>
          <div className="flex justify-between items-center flex-col md:flex-row gap-4">
            <div className="flex justify-center w-3/4 items-center gap-2">
              {
                  Array(5).fill(null).map((_, i) => {
                    return (
                      <div className="basis-1/3 flex items-center justify-center">
                        <Image src={`/icon${i+1}.png`} alt='' width={40} height={40} className="object-cover "/>
                      </div>
                    )
                  })
              }
            </div>
            <div className="w-1/4">
              <h3 className='text-xl text-primary cursor-pointer'>Meet all customers</h3>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Text
