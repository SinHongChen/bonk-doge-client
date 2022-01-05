import { CSSProperties } from "react";
import { LogoContainer,LogoWrap } from "./Style";

export interface LogoProps {
    imgSrc?:string;
    width?:string;
    height?:string;
    style?:CSSProperties;
    className?:string;
}

const Logo = ({imgSrc,width,height,style,className}:LogoProps) => {
    return (
        <LogoWrap className={className} style={style} width={width} height={height}>
            <LogoContainer  imgSrc={imgSrc} />
        </LogoWrap>
    )
}

export default Logo
