import { MessageProps,notable_alumni } from "@/types/frontend";
import { Image, message_backend,notable_alumni_backend } from "@/types/bakcend";
import { getImageURL } from "@/lib/utils";
import axios from "axios";

const url=process.env.NEXT_PUBLIC_URL || "http://127.0.0.1:1337";
interface Information{
    id:string,
    name:string,
    position:string,
    image:Image
}

const get_Teachers_kindergarten=async():Promise<notable_alumni>=>{
    const respnse=await axios.get(url+"/api/kindergarten-teachers?populate=image");
    // console.log(respnse.data.data);
    
    const formattedData:MessageProps[]=respnse.data.data.map((item:Information)=>{
        const output:MessageProps={
            name:item.name,
            position:item.position,
            image:getImageURL(item.image),
            message:""
        }
        return output;
    })  

    return formattedData;
}

export default get_Teachers_kindergarten;