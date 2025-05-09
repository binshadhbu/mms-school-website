import React, { useEffect } from 'react'
import { WinnerCard } from '@/components/cards/WinnerCard'
import { CardProps,full_APlus } from '@/types/frontend'
import { sslc_full_backend } from '@/types/bakcend'

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
