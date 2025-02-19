import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

import { routes } from '../../constants';


const Navbar = () => {
  const isActive = 1;
  return (
    <header className='h-20 shadow-[#ABBED1] shadow-md'>
      <div className='container h-full mx-auto flex justify-between items-center  '>
          {/* LEFT SECTION  */}
          <Link href='/' className="relative md:w-[180px] w-[150px]">
            <Image src='/Logo.png' alt='Logo' width={180} height={60}/> 
          </Link>

          {/* MOBILE SECTION  */}
          <Sheet>
            <SheetTrigger className="flex lg:hidden">
              <Image src={'/menu.png'} alt='menu' width={30} height={30}/>
            </SheetTrigger>
            <SheetContent className='  bg-neutral-black border-none md:size-full' >
              <div className='flex flex-col items-center gap-8 text-lg text-white py-12 w-full'>
                {
                  routes.map((e, i: number) =>{ 
                    return (
                      <Link 
                        href={e.path} 
                        key={e.id}
                        className= {`w-full text-center p-2 rounded-md ${i === isActive ? 'bg-primary' : ''} hover:bg-primary transition-all ease-in duration-300`}
                      > 
                        { e.name } 
                      </Link>
                    )
                  })
                }
              <Button variant="primary" className='h-16 text-xl'>
                <Link href={'/'} className="flex gap-2">
                  Register Now 
                  <Image src='/arrow.png' alt='' width={24} height={24}/>
                </Link>
              </Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* RIGHT SECTION  */}
          <div className='hidden lg:flex'>
            <div className='flex items-center gap-3 text-black'>
                  {
                    routes.map((e, i: number) =>{ 
                      return (
                        <Link 
                          href={e.path} 
                          key={e.id}
                          className= {`link w-max p-2 rounded-md relative text-center `}> 
                          { e.name } 
                          <div className={`absolute bottom-0 left-0  bg-primary h-[2.5px] w-full opacity-0 transition duration-300 ease-in-out ${isActive === i ? 'opacity-100': ""}`}/>
                        </Link>
                      )
                    })
                  }
                <Button variant="primary" className='text-md uppercase h-15 hover:bg-neutral-black '>
                  <Link href={'/'} className="flex gap-2 items-center justify-between">
                    Register Now 
                    <Image src='/arrow.png' alt='' width={24} height={24}/>
                  </Link>
                </Button>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Navbar
