import React, { useEffect, useState } from 'react'
import { GameCardsViewer,CardSearchForm } from "components";
import { CardsContainer } from "./Style";
import { CardInfo } from "types/api";

const Cards = () => {
    const [cardInfos,setCardInfos] = useState<CardInfo[]>([]);
    const [isSearching,setIsSearching] = useState(false);
    
    const onSearchFinish = (cardInfos:CardInfo[])=>{
        setCardInfos(cardInfos)
        setIsSearching(false);
    }

    const onSearchFail = (error:any)=>{
        setIsSearching(false);
    }

    const onSearchSubmit = ()=>{
        setIsSearching(true);
    }

    return (
        <CardsContainer>
            <CardSearchForm enableFirstSearch={true} onSubmit={onSearchSubmit} onFinish={onSearchFinish} onFail={onSearchFail}/>
            <GameCardsViewer enableEdit={false} isLoading={isSearching} cardInfos={cardInfos} viewMode={"grid"}/>
        </CardsContainer>
    )
}

export default Cards
