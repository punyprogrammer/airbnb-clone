import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="font-default relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        layout="fill"
        objectFit="cover"
        className="backdrop-brightness-75"
        src={`/api/imagefetcher?url=${encodeURIComponent(
          'https://images.unsplash.com/photo-1557521191-4f5ce8ae49fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        )}`}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="mb-4 text-2xl font-medium text-white sm:text-4xl md:text-5xl">
          Not sure where to go?Perfect
        </p>
        <button className="rounded-full bg-white px-8 py-4 font-bold text-purple-500 shadow-md transition duration-150 hover:scale-105 hover:shadow-2xl active:scale-90">
          I'm Flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
