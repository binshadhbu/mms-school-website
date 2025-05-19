export type Image = {
    id: string;
    url: string,
}

export interface Information {
    id: string;
    name: string;
    image: Image,
}

export interface sslc_winners {
    data: {
        id: string;
        winners: Information[];
    }
}


