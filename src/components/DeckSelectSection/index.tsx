import React from 'react';
import cardinfosData from "./cardInfos.json";
import { 
    DeckSelectSectionContainer 
} from "./Style";
import { Deck } from "components";

const DeckSelectSection = () => {
    return (
        <DeckSelectSectionContainer>
            {/* <Deck cards={cardinfosData}/>
            <Deck cards={cardinfosData}/>
            <Deck cards={cardinfosData}/> */}
        </DeckSelectSectionContainer>
    )
}

export default DeckSelectSection
