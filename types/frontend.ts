import { Image } from "./bakcend";

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

export interface MessageProps{
    name:string;
    position:string;
    image:string;
    message:string
};

export interface ImageCard{
    image?:string;
}

export interface GalleryImage{
    link:string[]
}

export type style_gallery={link:string}[];
export type full_APlus=CardProps[];
export type winnerCardProps=CardProps[];
export type lssWinners=CardProps[];
export type ussWinners=CardProps[];
export type achievement=Achievement;
export type messageCard=MessageProps;
export type ImageSlider=ImageCard[];
export type notable_alumni=MessageProps[];
export type gallery=GalleryImage[];