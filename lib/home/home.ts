import { achievement } from "@/types/frontend";
import { achievements_backend } from "@/types/bakcend";
import axios from "axios";

const url=process.env.NEXT_PUBLIC_URL || "http://127.0.0.1:1337";

const getAchievements=async():Promise<achievement>=>{
    const res=await axios.get<achievements_backend>(url+"/api/achievemnt");
    const formattedData:achievement={
        full_aplus:res.data.data.full_aplus,
        nine_aplus:res.data.data.nine_aplus,
        lss:res.data.data.lss,
        uss:res.data.data.uss
    }
    return formattedData;
}
export default getAchievements;