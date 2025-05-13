export interface CardProps{
    name:string;
    achievement:string;
    image?:string
}

export interface Achievement{
    full_aplus:number;
    nine_aplus:number;
    lss:number;
    uss:number;
}

export type full_APlus=CardProps[];
export type winnerCardProps=CardProps[];
export type lssWinners=CardProps[];
export type ussWinners=CardProps[];
export type achievement=Achievement;