
"use client"
import 'flowbite';
import { Carousel } from "flowbite-react";
import Image from 'next/image';


export function Hero() {
  const CarouselImages = [{ImageLink:"/public/common/hero1.jpeg"},{ImageLink:"/public/common/hero2.jpeg"},{ImageLink:"/public/common/hero3.jpeg"}]


	return (

		<div className=" h-80 md:h-[30rem]">
			{CarouselImages &&
				<Carousel>
					{CarouselImages.map((image, index) => (
						// <Image
						// 	key={index}
						// 	src={"/public/common/hero1.jpeg"}
						// 	alt="image"
						// 	layout="fill"
						// 	objectFit="cover"
							
						// />
					))}
				</Carousel>
			}
			
		</div >
	);
}

