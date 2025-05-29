import { ImageCard, ImageSlider } from "@/types/frontend";
import { image_information, image_slider_backend,Image } from "@/types/bakcend";
import { getImageURL } from "@/lib/utils";
import axios from "axios";
import { get } from "http";
import { gallery } from "@/types/frontend";

const url = process.env.NEXT_PUBLIC_URL || "http://127.0.0.1:1337";
interface LinkProps {
    link: string;
}


const get_gallery = async ({ link }: LinkProps): Promise<gallery> => {
    const input = url + '/api/' + link + '?populate=*';
    const response = await axios.get<image_slider_backend>(input);
    // console.log("response", response.data);
    const images = response.data.data;
    const imageUrls = response.data.data.map((item: Image) =>{ 
        const link =url+item.images.url;
        return link;
    });
    
    return imageUrls;
}

export default get_gallery;