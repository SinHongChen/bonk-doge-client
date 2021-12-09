import { CSSProperties } from "react";
import { LogoContainer } from "./Style";

export interface LogoProps {
    imgSrc?:string;
    width?:string;
    height?:string;
    style?:CSSProperties;
    className?:string;
}

const Logo = ({imgSrc,width,height,style,className}:LogoProps) => {
    return (
        <LogoContainer className={className} style={style} imgSrc={imgSrc} width={width} height={height}/>
    )
}

export default Logo
