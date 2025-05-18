import React from 'react'

const Heading = ({ title }: { title: string }) => {
  return (
    <header >
      <h1 className="m-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-l to-blue-900 from-blue-400">| {title}</span> :</h1>

    </header>
  )
}

export default Heading
