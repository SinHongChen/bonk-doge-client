import React from 'react';
import { DeckContainer } from "./Style";
import { CardInfo } from "types/api";
import { Card } from "./Style";
import { useEffect } from 'react';
import { useState } from 'react';

export interface DeckProps {
    cards:CardInfo[],
    collapse?:boolean
}


const Deck = ({cards,collapse=true}:DeckProps) => {
    const [increment,setIncrement] = useState(1);

    return (
        <DeckContainer>
            {collapse &&
                cards.map((card,index)=>{
                    return ( <Card z={index} x={index * increment} y={index * increment} key={index} card={card}/>)
                })
            }
        </DeckContainer>
    )
}

export default Deck
