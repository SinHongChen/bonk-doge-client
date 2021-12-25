import React,{ useEffect } from 'react';
import { PlayerInfo } from "types";
import { 
    RankListContainer,
    Logo,
    PlayerInfobar,
    PlayerInfosSection,
    PlayerInfosHeader,
    Header
} from "./Style";

export interface RankListProps{
    players:PlayerInfo[]
}

const RankList = ({players}:RankListProps) => {
    return (
        <RankListContainer>
            <Header>
                <Logo src={"./images/logo/rank.png"}/>
                <h1>Rank</h1>
            </Header>

            
            <PlayerInfosSection>
                <PlayerInfosHeader>
                    <h3>Name</h3>
                    <h3>Victory</h3>
                    <h3>Defeat</h3>
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
