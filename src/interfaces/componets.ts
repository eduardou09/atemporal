import { Url } from "next/dist/shared/lib/router/router";

export type IButton ={
    title: string;
    width?: string
    padding?: string 
    onClick?: any
    radius?: string
    disabled? : boolean
}

export type IBox ={
    title: string;
    text: string;
    icon?:any
    photo?: any
    isPhoto?: boolean
    ref?:null

}

export type IServiceBox ={
   
   // text: string;
    service:string;
    subtitleService:string;
    //stage:string;
    photo?:any
    stages:any
    widthImg?:string
}

export type IBoxGrid ={
    mainText: string;
    subText?:string;
    isLeft?:boolean
}
export type ITextArea={
    placeholder:string
    onChange: any;
    value:any;
}

export type IInput={
    placeholder:string
    type:string
    value:any
    id?:string
    onChange:any
    disabled?:boolean
    label?:string
}

export type ISidebar={
    isSmall:boolean
    handleClick:any
}