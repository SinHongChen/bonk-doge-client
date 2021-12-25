import React from 'react';
import { PendingContainer } from "./Style";
import Lottie, { animationInfos } from "components/Lottie";

export interface PendingProps{
    element:React.ReactElement
    isLoading?:boolean
}

export const LottieStyle = {
    width:"clamp(200px,60vw,400px)",
    height:"clamp(200px,60vw,400px)"
}

const Pending = ({element,isLoading=false}:PendingProps) => {
    return (
        <PendingContainer>
            {isLoading && 
                <Lottie
                    autoplay={true}
                    style={LottieStyle}
                    animation={animationInfos.loading}
                />
            }
            {isLoading && element }
        </PendingContainer>
    )
}

export default Pending
