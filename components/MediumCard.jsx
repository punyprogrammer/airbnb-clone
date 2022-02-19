import React from 'react'
import Image from 'next/image'

const MediumCard = ({ img, title }) => {
  return (
    <div className="font-default transform cursor-pointer transition duration-300 ease-out hover:scale-105 ">
      <div className="relative h-80 w-80">
        <Image
          className="rounded-2xl"
          layout="fill"
          src={`/api/imagefetcher?url=${encodeURIComponent(img)}`}
        />
      </div>
      <h3 className="text-md mt-3 font-medium">{title}</h3>
    </div>
  )
}

export default MediumCard
