import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Inform from "@/components/Inform";
import Stat from "@/components/Stat";
import Text from "@/components/Text";
import Services from "@/components/Services";
import Ccc from "@/components/Ccc";
import Demo from "@/components/Demo";


export default function Home() {
  return (
    // LANDING PAGE 
    <main className="h-max">  
      <Hero/>
      <Clients/>
      <Inform/>
      <Stat/>
      <Services/>
      <section className="py-6 mt-4 h-max">
          <div className="container flex flex-col items-center lg:flex-row ">
            {/* IMAGE CONTAINER  */}
            <div className="relative w-full h-[500px] lg:w-1/2">
              <Image src={'/pana.png'} alt="" sizes="20vw" fill className="object-contain"/>
            </div>
            {/* TEXT CONTAINER */}
            <div className="text-center flex flex-col items-center justify-center gap-4 lg:w-1/2 lg:text-start lg:items-start">
              <h2 className="text-4xl font-semibold text-neutral-d_gray">How to design your site footer like we did</h2>
              <p className="text-lg text-neutral-gray leading-relaxed">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
              <Button variant={'primary'} className="w-max lg:p-7 p-4 hover:bg-neutral-black">
                <Link href={'/'}>Learn More</Link>
              </Button>
            </div>
          </div>
      </section>
      <Text/>
      <Ccc />
      <Demo/>
    </main>
  );
}
