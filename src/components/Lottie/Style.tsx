import styled from "styled-components";

export interface LottieContainerProps{
    isShow:boolean;
}

export const LottieContainer = styled.div<LottieContainerProps>`
    display: ${props => props.isShow ? "block" : "none"};
    width: 40px;
    height: 40px;
`
