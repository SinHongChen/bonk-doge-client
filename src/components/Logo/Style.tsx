import styled from "styled-components";

export interface LogoProps {
    width?:string,
    height?:string,
    imgSrc?:string
}

export const LogoContainer = styled.div<LogoProps>`
    height: ${props => props.height ? props.height : "240px"};
    width: ${props => props.width ? props.width : "240px"};
    background: linear-gradient(#f5ca6e 0%, #edbe58 10%, #e4c071 50%, #f0b22e 100%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid rgb(242, 153, 74);
    
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

    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 35px;
        border-radius: 50%;
        background: rgba(0,0,0,0 );
        bottom: -30px;
        z-index: 2;
        filter: blur(10px);
    }
`