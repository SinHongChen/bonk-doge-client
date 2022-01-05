import React from 'react';
import { PlayerInfobarContainer,Hpbar,Avator,Clock } from "./Style";


export interface PlayerInfo {
    name:string,
    hp:number,
    pitcure:string,
}

export interface PlayerInfobarProps{
    playerInfo:PlayerInfo,
    type:"self" | "enemy"
}

const PlayerInfobar = ({playerInfo,type}:PlayerInfobarProps) => {
    return (
        <PlayerInfobarContainer type={type}>
            <Hpbar>HP:{playerInfo.hp}</Hpbar>
            <Avator src={playerInfo.pitcure} alt="" />
            <Clock>120</Clock>
        </PlayerInfobarContainer>
    )
}

export default PlayerInfobar
