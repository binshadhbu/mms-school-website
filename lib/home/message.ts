import { messageCard } from "@/types/frontend";
import { message_backend } from "@/types/bakcend";
import axios from "axios";
import { getImageEtag } from "next/dist/server/image-optimizer";
import { getImageURL } from "../utils";

interface LinkProps{
    link:string;
}

const url=process.env.NEXT_PUBLIC_URL || "http://127.0.0.1:1337";

const getMessage=async({link}:LinkProps):Promise<messageCard>=>{
    const input=url+'/api/'+link+'?populate=image';
    const res=await axios.get<message_backend>(input);
    const formattedData:messageCard={
        name:res.data.data.name,
        position:res.data.data.position,
        image:getImageURL(res.data.data.image),
        message:res.data.data.message
    }
    return formattedData;
}

export {getMessage};


