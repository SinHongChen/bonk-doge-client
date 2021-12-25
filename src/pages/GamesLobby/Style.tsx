import styled from "styled-components";
import { deviceMedia } from "styles/Device";
import { Link } from "react-router-dom";
import { DeckCardsViewer } from "components";
import { ScrollbarCss } from "styles/Scrollbar";

export const GamesLobbyContainer = styled.div`
    width: 100%;
    height: 100%;
    border:1px solid var(--border-color-1);
    background-color: var(--bg-color-2);
    border-radius: 0.2em;
    ${ScrollbarCss};
    position: relative;
`

export const GameStartSection = styled.div`
    background:rgba(0,0,0,0.8);
    filter: blur(10px);
    position: absolute;
    z-index:2;
    width:100%;
    height:100%;
`

export const DeckCards = styled(DeckCardsViewer)`
    height: fit-content;
    border:none;
    padding: 10px 0px;
`

export const DeckSelectSection = styled.div`
    background:rgba(0,0,0,0);
    position: absolute;
    z-index:3;
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StartLink = styled(Link)`
    border: none;
    outline: none;
    background-color: var(--bg-color-1);
    color:var(--text-color-1);
    font-size: 24px;
    width: 100%;
    text-transform: uppercase;
    border-radius: 0.1em;
    border:1px solid var(--border-color-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    &:hover{
        background-color: var(--bg-color-2);
        cursor: pointer;
    }
    
`
