import { ImageCard, ImageSlider } from "@/types/frontend";
import { image_information, image_slider_backend,Image } from "@/types/bakcend";
import { getImageURL } from "@/lib/utils";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_URL || "http://127.0.0.1:1337";
interface LinkProps {
    link: string;
}

const getImages = async (): Promise<string[]> => {
    const input = url + '/api/image-sliders/?populate=image';
    const response = await axios.get(input);
    console.log("response getImage",response.data.data);

    const images = response.data.data;
    const imageUrls = images.map((item: any) => {
        console.log("item",item.image);
        return getImageURL(item.image)
    });
    // console.log("images",images);
    return imageUrls;

}

export default getImages;