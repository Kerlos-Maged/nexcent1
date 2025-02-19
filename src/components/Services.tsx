import Image from 'next/image'
import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <section className="py-12 mt-12">
      <div className="container">
        {/* HEADING  */}
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-d_gray">Manage your entire community <br />  in a single system</h2>
          <p className="text-neutral-gray">Who is Nextcent suitable for?</p>
        </div>
        {/* CARDS  */}
        <div className="flex flex-wrap gap-12 py-8 items-center justify-center w-full flex-1">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </section>
  )
}

export default Services
