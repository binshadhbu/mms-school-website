import { ImageCard, ImageSlider } from "@/types/frontend";
import { image_information, image_slider_backend,Image } from "@/types/bakcend";
import { getImageURL } from "@/lib/utils";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_URL || "http://127.0.0.1:1337";
interface LinkProps {
    link: string;
}

const getGallery = async ({ link }: LinkProps): Promise<string[]> => {
    const input = url + '/api/' + link + '?populate=image';
    const response = await axios.get<image_slider_backend>(input);
    // console.log("response",response.data.data);

    const images = response.data.data;
    const imageUrls = response.data.data.map((item: Image) => getImageURL(item.image));
    // console.log("images",imageUrls);
    return imageUrls;
}

export default getGallery;