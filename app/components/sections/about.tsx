import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'

function AboutUs() {
  return (
    <section id="about" className='w-full max-w-screen-xl px-6 mx-auto mt-6 overflow-x-hidden overflow-y-hidden section sm:px-8 lg:px-12 lg:pb-16'>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-50 to-orange-400 bg-opacity-50">
          About <br /> our endeavour.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
           
            We are a team of passionate students who are dedicated to the field of robotics. 
            We aim to inspire and educate the next generation of engineers and innovators. 
            Our team is made up of students from various backgrounds and disciplines, 
            all coming together to work towards a common goal. 
            We are constantly pushing the boundaries of what is possible and are always looking for new and innovative ways to solve problems. 
            Our team is committed to excellence and strives to be the best in everything we do. 
            We are proud of our accomplishments and are excited to see what the future holds for us.


        </p>
      </div>
    </div>
    </section>
  )
}

export default AboutUs