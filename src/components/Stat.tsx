import Image from 'next/image'
import React from 'react'

const Stat = () => {
  return (
    <section className="bg-neutral-sliver py-20 ">
      <div className="container lg:flex-row flex flex-col justify-between items-center">
        {/* LEFT  */}
        <div className="text-center lg:text-start w-full">
          <h2 className="md:text-4xl text-3xl text-neutral-d_gray font-semibold">Helping a local <br /> <span className="text-primary">business reinvent itself</span></h2>
          <p className="md:text-xl text-gray py-3">We reached here with our hard work and dedication</p>
        </div>
        {/* RIGHT */}
        <div className="flex md:flex-row  flex-wrap w-full gap-4 items-center justify-center   py-8">

            {
              Array(4).fill(null).map((e)=>{
                return (
                  <div key={e} className="w-[calc(1/2*100%-16px)] flex gap-4  justify-center">
                    {/* IMAGE CONTAINER  */}
                    <div className="">
                      <Image src={'/iconsec.png'} width={60} height={70} alt="" className="object-cover"/>
                    </div>
                    {/* TEXT CONTAINER  */}
                    <div className="flex flex-col">
                      <h3 className="text-xl lg:text-2xl text-neutral-d_gray font-semibold">2,245,341</h3>
                      <h4 className="text-neutral-gray lg:text-xl font-semibold">Members</h4>
                    </div>
                  </div>
                )
              })
            }

        </div>

      </div>
  </section>
  )
}

export default Stat
