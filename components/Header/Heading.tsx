import React from 'react'

const Heading = ({ title }: { title: string }) => {
  return (
    <header className='px-10 items-center md:items-start flex flex-col space-y-4 font-extrabold pb-10'>
      <h2 className='text-4xl md:text-5xl lg:text-6xl relative'>
        <span className='absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 blur-lg opacity-75'></span>
        <span className='relative text-gradient'>{title}</span>
      </h2>
    </header>
  )
}

export default Heading
