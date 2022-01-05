import React from 'react';
import { HandCardsContainer,CardPlace } from "./Style";
import { CardInfo } from "types";
import { SmallGameCard  } from "components";

export interface HandCardsProps{
    cardInfos:CardInfo[],
    onCardClick:(cardInfos:CardInfo)=>void
}

const HandCards = ({cardInfos,onCardClick}:HandCardsProps) => {
    const maxHandCardsNumber = 5;
    const gameCardStyle = {
        transform:"scale(0.4) translateY(-305px) translateX(-180px)"
    }
    return ( 
        <HandCardsContainer>        
            {cardInfos.map((cardInfo,index) => {
                return <CardPlace key={index}>
                {cardInfos[index] &&
                    <SmallGameCard style={gameCardStyle} onClick={()=>{onCardClick(cardInfo)}} cardInfo={cardInfo}/>
                }
            </CardPlace>
            })}              
        </HandCardsContainer>
    )
}

export default HandCards
