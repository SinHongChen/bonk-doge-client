import React,{useState} from 'react';
import { 
    BoardCardsContainer,
    CardPlace
} from "./Style";
import { CardInfo } from "types";
import { SmallGameCard  } from "components";

export interface GameCardPlaceProps{
    cardInofs:CardInfo[],
    onCardClick:(cardInfo:CardInfo)=>void
}

const BoardCards = ({
    cardInofs,
    onCardClick
}:GameCardPlaceProps) => {
    const gameCardStyle = {
        transform:"scale(0.5) translateY(-205px) translateX(-122px)"
    }

    return (
        <BoardCardsContainer>
            {cardInofs.map((cardInfo,index) => {
                return <CardPlace key={index}>
                        <SmallGameCard style={gameCardStyle} onClick={()=>{onCardClick(cardInfo)}} cardInfo={cardInfo}/>
                </CardPlace>
            })}
        </BoardCardsContainer>
    )
}

export default BoardCards
