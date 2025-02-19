import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-black py-12 text-white">
      <div className="container flex-col md:flex-row flex gap-12">
        <div className="md:1/3 w-full flex flex-col gap-4 items-center text-center md:items-start md:text-start">
          <div className="relative ">
          <Image src='/logo2.png' alt='Logo' width={180} height={60}/> 
          </div>
          <p className='font-semibold'>Copyright © 2020 Landify UI Kit. <br /> All rights reserved</p>
          <div className="flex gap-4">
            <Image src={'/twitter.png'} alt='' width={40} height={40} className="cursor-pointer"/>
            <Image src={'/insta.png'} alt='' width={40} height={40} className="cursor-pointer"/>
            <Image src={'/youtueb.png'} alt='' width={40} height={40} className="cursor-pointer"/>
            <Image src={'/basket.png'} alt='' width={40} height={40} className="cursor-pointer"/>
          </div>
        </div>
        <div className="hidden h-full lg:w-1/3 lg:flex justify-between items-center gap-8 text-center">
          <div className="flex flex-col gap-3">
            <h3 className='text-white text-2xl'>Company</h3>
            <ul className="flex flex-col gap-1 text-neutral-gray">
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className='text-white text-2xl'>Support</h3>
            <ul className="flex flex-col gap-1 text-neutral-gray">
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          
        </div>

        <div className="md:1/3 w-full h-full items-center lg:text-start text-center flex-col flex">
          <h2 className='text-xl lg:text-2xl py-4'>Stay up to date</h2>
          <form className='relative flex items-center w-[300px] max-w-[100%]'>
            <input type="text" placeholder='Your email address' className='bg-neutral-whiteOpa rounded-xl p-2 w-full outline-none text-white'/>
            <button className='absolute right-[2%]'><Image src="/send.png" alt="" width={30} height={30} /></button>
          </form>
        </div>

      </div>
    </footer>
  )
}

export default Footer
