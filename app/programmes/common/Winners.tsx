import React from 'react'
import { WinnerCard } from '@/components/cards/WinnerCard'

const list = [
  {
    name: "John Doe",
    position: "1st",
    image: "/images/1.jpg",
  },
  {
    name: "Jane Doe",
    position: "2nd",
    image: "/images/2.jpg",
  },
  {
    name: "James Doe",
    position: "3rd",
    image: "/images/3.jpg",
  },
  {
    name: "Jenny Doe",
    position: "4th",
    image: "/images/4.jpg",
  },
];

// import React from 'react'

const Winners = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 place-items-center m-2 w-full h-full">
  <WinnerCard />
  <WinnerCard/>
  <WinnerCard/>
  <WinnerCard/> 
  <WinnerCard/>
  {/* <WinnerCard/>
  <WinnerCard/>
  <WinnerCard/> */}
</div>
  )
}


export default Winners
