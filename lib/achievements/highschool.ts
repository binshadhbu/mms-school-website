import { CardProps } from "@/types/frontend";
import { full_APlus } from "@/types/frontend";
import { Information } from "@/types/bakcend";
import { getImageURL } from "@/lib/utils";
import axios from "axios";
import { sslc_full_backend } from "@/types/bakcend";

const url=process.env.NEXT_PUBLIC_URL || "http://127.0.0.1:1337";

const getSSLC_full=async():Promise<full_APlus>=>{
    const respnse=await axios.get<sslc_full_backend>(url+"/api/informations?populate=image");
    // console.log(respnse.data.data);
    
    const formattedData:CardProps[]=respnse.data.data.map((item:Information)=>{
        const output:CardProps={
            name:item.name,
            achievement:item.achievement,
            image:getImageURL(item.image)
        }
        return output;
    })  

    return formattedData;
}

export default getSSLC_full;