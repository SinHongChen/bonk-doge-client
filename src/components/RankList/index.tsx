import React from 'react';
import { 
    RankListContainer,
    Logo,
    PlayerInfobar,
    PlayerInfosSection,
    PlayerInfosHeader
} from "./Style";

export interface PlayerInfo {
    name:string,
    imgSrc:string,
    victory:number,
    defeat:number
}

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
                            <span>{playerInfo.name}</span>
                            <span>{playerInfo.victory}</span>
                            <span>{playerInfo.defeat}</span>
                        </PlayerInfobar>
                    )
                })}
            </PlayerInfosSection>
        </RankListContainer>
    )
}

export default RankList
