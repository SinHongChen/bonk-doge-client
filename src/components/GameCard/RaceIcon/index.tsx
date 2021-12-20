import React from 'react'
import { RaceIconContainer } from "./Style";

export interface RaceIconProps{
    raceName?:string
}

const RaceIcon = ({raceName}:RaceIconProps) => {
    return (
        <RaceIconContainer>
            <span>{raceName}</span>
        </RaceIconContainer>
    )
}

export default RaceIcon
