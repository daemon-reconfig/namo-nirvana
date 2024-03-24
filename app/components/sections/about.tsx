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
            We are a group of passionate individuals who are dedicated to
            providing the best possible experience for our customers. We believe
            in the power of technology and its ability to change the world for the
            better. Our mission is to create innovative solutions that make a
            difference in people's lives. We are committed to excellence and
            strive to deliver the highest quality products and services to our
            customers. We are always looking for new ways to improve and grow, and
            we are excited to see what the future holds. Thank you for joining us
            
        </p>
      </div>
    </div>
    </section>
  )
}

export default AboutUs