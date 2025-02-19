import React from 'react'
import { Button } from './ui/button'

const Demo = () => {
  return (
    <section className='bg-neutral-sliver py-12'>
      <div className="container text-center flex flex-col justify-center items-center  flex-wrap">
        <h1 className=' text-5xl lg:text-7xl lg:w-[900px] text-neutral-black'>Pellentesque suscipit fringilla libero eu.</h1>
        <Button variant={'primary'} className='text-2xl my-8'>
          Get a Demo
        </Button>
      </div>
    </section>
  )
}

export default Demo
