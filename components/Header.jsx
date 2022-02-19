import React from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="font-default sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-5 shadow-md md:px-10">
      {/* left div */}
      <div className="relative flex h-10 cursor-pointer items-center">
        <Image
          src={`/api/imagefetcher?url=${encodeURIComponent(
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
          )}`}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle div */}
      <div className="flex items-center justify-between rounded-full  p-2 md:border-2 md:shadow-lg">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow pl-2 text-sm text-gray-700 placeholder-gray-400 outline-none"
        />
        <SearchIcon className="hidden h-8 cursor-pointer  rounded-full  bg-red-400  p-2 text-white md:mx-2 md:inline-flex" />
      </div>
      {/* right div */}
      <div className="flex items-center justify-end space-x-4 text-gray-600">
        <p className="hidden  md:inline">Become a host</p>
        <GlobeAltIcon className="h-6  cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full p-1 shadow-lg">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header
