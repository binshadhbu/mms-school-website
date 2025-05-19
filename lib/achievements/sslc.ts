import { CardProps } from "@/type/frontend";
import { type sslc_List } from "@/type/frontend";
import { type sslc_winners } from "@/type/backend";
import axios from "axios";
import { getImageUrl } from "../utils";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const getSSLCWinners = async (): Promise<sslc_List> => {
    const response = await axios.get<sslc_winners>(`${backendUrl}/api/fullapluses`);
    // console.log(response);

    const formattedDate: CardProps[] = response.data.data.map((winners) => {
        console.log("winners:", winners);
        const output: CardProps = {
            name: winners.name,
            imageUrl: getImageUrl(winners.image),
        }
        return output;
    })
    // console.log(formattedDate);
    return formattedDate;
}

export {getSSLCWinners};