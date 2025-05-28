export interface Information {
    id: string,
    name: string,
    image: Image,
    achievement: string,
}


export interface Image {
    id: string,
    url: string,
}

export interface sslc_full_backend {
    data: {
        id: string,
        full_APlus: Information[]
    }
}

export interface lss_backend {
    data: {
        id: string,
        lssWineers: Information[]
    }
}

export interface uss_backend {
    data: {
        id: string,
        ussWinners: Information[]
    }
}

export interface achievements_backend {
    data: {
        full_aplus: number,
        nine_aplus: number,
        lss: number,
        uss: number,
    }
}

export interface message_backend {
    data: {
        name: string,
        position: string,
        image: Image,
        message: string
    }
}

export interface image_information {
    id: string;
    image: Image;
}

export interface image_slider_backend {
    data: {
        id: string;
        images: image_information[];
    }
}

export interface notable_alumni_backend {
    data:{
        id: string;
        notable_alumni: message_backend[];
    }
}