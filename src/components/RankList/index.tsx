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
import { animationInfos } from "components/Lottie";
export interface RankListProps{
    players:PlayerInfo[],
    className?:string
}

const RankList = ({players,className}:RankListProps) => {

    const sortPlayers = (players:PlayerInfo[])=>{
        players.sort((pre,current) => pre.Victory - current.Defeat)
    }

    return (
        <RankListContainer className={className}>
            <Header>
                <Logo autoplay={true} animation={animationInfos.medal} />
                <h1>Doge Heros</h1>
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
