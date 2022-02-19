import React from 'react'
import Image from 'next/image'

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="hover:bg-gray-100 hover:scale-105 transition-transform 200 ease-out font-default m-2 mt-5 flex cursor-pointer items-center space-x-4 rounded-xl">
      <div className="relative h-16 w-16">
        <Image
          src={`/api/imagefetcher?url=${encodeURIComponent(img)}`}
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div className="text-sm ">
        <h2 className="font-semibold">{location}</h2>
        <h3 className="font-medium text-gray-600">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
