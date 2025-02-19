import Image from 'next/image'
import React from 'react'

const Ccc = () => {
  return (
    <section className="py-12">
      <div className="container flex flex-col">
        {/* HEADING  */}  
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h2 className="text-4xl font-semibold text-neutral-d_gray">Caring is the new marketing</h2>
          <p className="text-neutral-gray px-4">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>
        <div className="flex justify-center items-center py-10 flex-wrap gap-3">
          <div className="relative h-[300px] w-1/3">
            <Image src={'/image 18.png'} alt='img' fill className="object-contain"/>
            <div className="text-center absolute bg-neutral-sliver h-[200px] w-[75%] rounded-lg -bottom-[25%] left-1/2 transform -translate-x-1/2 p-3">
              <h3 className="text-2xl text-neutral-gray">Creating Streamlined Safeguarding Processes with OneRen</h3>
            </div>
          </div>
          <div className="relative h-[300px] w-1/3">
            <Image src={'/image 18.png'} alt='img' fill className="object-contain"/>
            <div className=""></div>
          </div>
          <div className="relative h-[300px] w-1/3">
            <Image src={'/image 18.png'} alt='img' fill className="object-contain"/>
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ccc
