import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Inform = () => {
  return (
    <section className="py-6 mt-4 h-max">
      <div className="container flex flex-col items-center lg:flex-row ">
        {/* IMAGE CONTAINER  */}
        <div className="relative w-full h-[500px] lg:w-1/2">
          <Image src={'/Frame 35.png'} alt="" sizes="20vw" fill className="object-contain"/>
        </div>
        {/* TEXT CONTAINER */}
        <div className="text-center flex flex-col items-center justify-center gap-4 lg:w-1/2 lg:text-start lg:items-start">
          <h2 className="text-4xl font-semibold text-neutral-d_gray">The unseen of spending three years at Pixelgrade</h2>
          <p className="text-lg text-neutral-gray leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <Button variant={'primary'} className="w-max lg:p-7 p-4 hover:bg-neutral-black">
            <Link href={'/'}>Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Inform
