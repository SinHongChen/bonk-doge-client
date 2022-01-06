import styled from "styled-components";

export interface LogoProps {
    width?:string,
    height?:string,
    imgSrc?:string
}

export interface LogoWrapProps{
    width?:string,
    height?:string
}

export const LogoWrap = styled.div<LogoWrapProps>`
    height: ${props => props.height ? props.height : "240px"};
    width: ${props => props.width ? props.width : "240px"};
`

export const LogoContainer = styled.div<LogoProps>`
    height: 100%;
    width: 100%;
    background: linear-gradient(to right,#59595e,rgb(30, 29, 37));
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:50%;
    box-shadow:
        inset 1px 1px 3px 1px black,
        inset 1px 1px 3px 1px black;

    &:before{
        content: "";
        background-image:${props => props.imgSrc ? `url(${props.imgSrc})` : "url(./logo.png)"};
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 90%;
        width: 90%;
        background-color:linear-gradient(#edc877 0%, #e6bc60 60%, #d9ab45 100%);
        border-radius: 50%;
    }
`