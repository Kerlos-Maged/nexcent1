import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-neutral-sliver">
      <div className="h-[calc(100vh-80px)] container ">
        <div className="flex flex-col h-full items-center lg:flex-row gap-2">
          {/* TEXT CONTAINER  */}
          <div className="lg:w-2/3 h-1/2 w-full lg:h-full flex flex-col justify-center gap-8 lg:gap-4 items-center text-center lg:items-start lg:text-start">
            <h1 className="text-neutral-d_gray text-4xl lg:text-7xl font-semibold md:text-5xl">Lessons and insights  <br />
              <span className='text-primary'>from 8 years</span>
            </h1>
            <p className="font-semilbold text-lg  text-neutral-gray">Where to grow your business as a photographer: site or social media?</p>
            <Button variant={'primary'} className="w-max lg:p-7 p-4 hover:bg-neutral-black">
              <Link href={'/'}>Register</Link>
            </Button>
          </div>
          {/* IMAGE CONTAINER  */}
          <div className="lg:w-1/3 h-1/2 w-full lg:h-full flex items-center justify-center relative">
            <Image src={'/hero.png'} alt='' fill className="object-contain "/>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default Hero
