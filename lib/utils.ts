import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Image} from "../type/backend";;

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export const getImageUrl = (image: Image) => {
  console.log(image);
    return `${backendUrl}${image.url}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
