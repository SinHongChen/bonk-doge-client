import React from 'react';
import { DeckLink,DeckLinkbarContainer } from "./Style";

export interface DeckLinkInfo {
    path:string,
    name:string
}

export interface DeckLinkbarProps{
    deckLinkInfos:DeckLinkInfo[]
}

const DeckLinkbar = ({deckLinkInfos}:DeckLinkbarProps) => {
    return (
        <DeckLinkbarContainer>
            {deckLinkInfos.map((deckLinkInfo)=>{
                return <DeckLink to={deckLinkInfo.path}>{deckLinkInfo.name}</DeckLink>
            })}
        </DeckLinkbarContainer>
    )
}

export default DeckLinkbar
