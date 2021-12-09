import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import { LottieContainer } from "./Style";

export interface AnimationInfo {
    displayName:string,
    data:string
}

export const animationInfos = {
    "ghost" : { data: require("./ghost-animation.json"), displayName: "ghost" },
    "database" : { data: require("./database-animation.json"), displayName: "database" },
    "loading" : { data: require("./loading-animation.json"), displayName: "loading" },
    "loading2" : { data: require("./loading-animation2.json"), displayName: "loading2" },
    "success" : { data: require("./success-animation.json"), displayName: "success" },
    "fail" : { data: require("./fail-animation.json"), displayName: "fail" },
    "uploading" : { data: require("./uploading-file-animation.json"), displayName: "uploading" },
}

export interface LottieContainerProps{
    animation:AnimationInfo,
    speed?:number,
    className?:string,
    style?:React.CSSProperties,
    isShow?:boolean,
    autoplay?:boolean
}

const Lottie = ({ animation, speed = 1, className,style,autoplay,isShow = true }:LottieContainerProps) => {

    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: element.current as HTMLDivElement,
            renderer: 'svg',
            loop: true,
            autoplay: autoplay,
            animationData: animation.data,
        })

    }, []);

    useEffect(()=>{
        lottie.setSpeed(speed);
    },[speed])

    return (
        <LottieContainer isShow={isShow} style={style} className={className} ref={element}></LottieContainer>
    )
}

export default Lottie;


