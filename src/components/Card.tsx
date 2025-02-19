import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className="lg:w-[calc((100%*1/3)-48px)]  p-6 shadow-md shadow-[#ABBED1] rounded-md flex flex-col items-center text-center gap-6 border-b-4 hover:border-b-primary cursor-pointer">
      <div className="w-[80px] h-[80px] relative">
        <Image src={'/members.png'} alt="" fill  className="object-contain"/>
      </div>
      <h2 className="text-4xl text-neutral-d_gray font-semibold ">Membership Organisations</h2>
      <p className=" text-neutral-gray text-center text-xl">Our membership management software provides full automation of membership renewals and payments</p>
    </div>
  )
}

export default Card
