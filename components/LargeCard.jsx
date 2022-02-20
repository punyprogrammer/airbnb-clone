import Image from 'next/image'
import React from 'react'

const LargeCard = ({img,title,desc,buttonText}) => {
  return (
    <div className='font-default relative p-5'>
<div className='relative   h-80 min-w-[300px]'>
<Image   className='rounded-3xl 'src={`/api/imagefetcher?url=${encodeURIComponent(img)}`} layout='fill'/>
</div>
<div className='absolute  top-10 left-12'>

<h2 className='text-2xl font-medium'>{title}</h2>
<p className='font-light'>{desc}</p>
<button className='font-medium bg-gray-800 text-white px-4 py-2 rounded-2xl mt-4 hover:scale-105 transition-transform duration-150 ease-in'>{buttonText}</button>
</div>


    </div>
  )
}

export default LargeCard