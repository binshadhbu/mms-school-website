import { WinnerCard } from '@/components/cards/WinnerCard'
import { CardProps,full_APlus, winnerCardProps } from '@/types/frontend'
import { sslc_full_backend } from '@/types/bakcend'

const Winners = (data) => {
 
  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 place-items-center m-2 w-full h-full">
      {/* {data.map((details,index)=>(
        <WinnerCard key={index} name={details.name} achievement={details.achievement} image={details.image} />
      ))} */}
</div>
  )
}


export default Winners
  