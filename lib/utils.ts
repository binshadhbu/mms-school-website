import { Image } from "@/types/bakcend"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export const getImageUrl = (image: Image) => {
  console.log(image);
    return `${backendUrl}${image.url}`;
}

const URL=process.env.NEXT_PUBLIC_URL || "http://localhost:1337"; 

export const getImageURL=(image:Image)=>{
  return `${URL}${image.url}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
