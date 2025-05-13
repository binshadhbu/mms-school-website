export interface Information {
    id: string,
    name: string,
    image: Image,
    achievement: string,
}


export type Image = {
    id: string,
    url: string,
}

export interface sslc_full_backend{
    data: {
        id: string,
        full_APlus: Information[]
    }
}

export interface lss_backend{
    data:{
        id:string,
        lssWineers:Information[]
    }
}

export interface uss_backend{
    data:{
        id:string,
        ussWinners:Information[]
    }
}

export interface achievements_backend{
    data:{
        full_aplus:number,
        nine_aplus:number,
        lss:number,
        uss:number,
    }
}