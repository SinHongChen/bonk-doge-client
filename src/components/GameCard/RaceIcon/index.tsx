import React from 'react'
import { RaceIconContainer } from "./Style";

export interface RaceIconProps{
    raceName?:string
}

const RaceIcon = ({raceName}:RaceIconProps) => {
    return (
        <RaceIconContainer>
            {raceName}
        </RaceIconContainer>
    )
}

export default RaceIcon
