import React,{ useEffect } from 'react';
import { PlayerInfo } from "types";
import { 
    RankListContainer,
    Logo,
    PlayerInfobar,
    PlayerInfosSection,
    PlayerInfosHeader
} from "./Style";

export interface RankListProps{
    players:PlayerInfo[]
}

const RankList = ({players}:RankListProps) => {
    return (
        <RankListContainer>
            <Logo src={"./images/logo/rank.png"}/>
            <PlayerInfosSection>
                <PlayerInfosHeader>
                    <span>Name</span>
                    <span>Victory</span>
                    <span>Defeat</span>
                </PlayerInfosHeader>
                {players.map((playerInfo,index)=>{
                    return (
                        <PlayerInfobar key={index}>
                            <span>{playerInfo.Name}</span>
                            <span>{playerInfo.Victory}</span>
                            <span>{playerInfo.Defeat}</span>
                        </PlayerInfobar>
                    )
                })}
            </PlayerInfosSection>
        </RankListContainer>
    )
}

export default RankList
