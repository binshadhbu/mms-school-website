import { CardProps } from "@/types/frontend";
import { Information } from "@/types/bakcend";
import { getImageURL } from "@/lib/utils";
import axios from "axios";
import { lssWinners ,ussWinners } from "@/types/frontend";
import { lss_backend } from "@/types/bakcend";

const url = process.env.NEXT_PUBLIC_URL ||  "http://127.0.0.1:1337";

const getLSSWinners = async (): Promise<lssWinners> => {
    const response = await axios.get<lss_backend>(url + "/api/lss-winners/?populate=image");
    // console.log(respnse.data.data);

    const formattedData: CardProps[] = response.data.data.map((item: Information) => {
        const output: CardProps = {
            name: item.name,
            achievement: item.achievement,
            image: getImageURL(item.image)
        }
        return output;
    })

    return formattedData;
}

const getUSSWinners = async (): Promise<ussWinners> => {
    const response = await axios.get<lss_backend>(url + "/api/uss-winners/?populate=image");
    // console.log(respnse.data.data);

    const formattedData: CardProps[] = response.data.data.map((item: Information) => {
        const output: CardProps = {
            name: item.name,
            achievement: item.achievement,
            image: getImageURL(item.image)
        }
        return output;
    })

    return formattedData;
}


export { getLSSWinners, getUSSWinners };
 