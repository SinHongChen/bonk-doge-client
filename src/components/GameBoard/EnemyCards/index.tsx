import React from 'react';
import { SmallLogo,CoveredCard,EnemyCardsContainer } from "./Style";

export interface EnemyCardsProps{
    cardNumber:number;
}

const EnemyCards = ({cardNumber}:EnemyCardsProps) => {
    return (
        <EnemyCardsContainer>
            {[...new Array(cardNumber)].map((value,index)=>{
                return <CoveredCard key={index}><SmallLogo/></CoveredCard>
            })}
        </EnemyCardsContainer>
    )
}

export default EnemyCards
