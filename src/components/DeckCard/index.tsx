import React,{ useState,useEffect } from 'react';
import { CardInfo,DeckInfo } from "types/api";
import { DeckName,DeckCardContainer } from "./Style";
import { GameCard } from "components";
export interface DeckProps {
    deckInfo:DeckInfo,
    cardInfo:CardInfo,
    collapse?:boolean,
    isSelected?:boolean,
    onClick?:React.MouseEventHandler<HTMLDivElement>
}


const DeckCard = ({cardInfo,deckInfo,collapse=true,isSelected=false,onClick}:DeckProps) => {
    
    return (
        <DeckCardContainer onClick={onClick} isSelected={isSelected}>
            <DeckName>
                {deckInfo.Name}
            </DeckName>
            <GameCard style={{transform:"scale(0.9)"}} cardInfo={cardInfo}/>
        </DeckCardContainer>
    )
}

export default DeckCard
