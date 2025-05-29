import { MessageProps,notable_alumni } from "@/types/frontend";
import { message_backend,notable_alumni_backend,Information } from "@/types/bakcend";
import { getImageURL } from "@/lib/utils";
import axios from "axios";

const url=process.env.NEXT_PUBLIC_URL || "http://127.0.0.1:1337";


const get_notable_alumni=async():Promise<notable_alumni>=>{
    const respnse=await axios.get<any>(url+"/api/notable-alumnies?populate=image");
    // console.log(respnse.data.data);
    
    const formattedData:MessageProps[]=respnse.data.data.map((item:any)=>{
        const output:MessageProps={
            name:item.name,
            position:item.position,
            image:getImageURL(item.image),
            message:item.message
        }
        return output;
    })  

    return formattedData;
}

export default get_notable_alumni;