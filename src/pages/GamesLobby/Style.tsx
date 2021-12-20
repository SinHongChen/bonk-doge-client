import styled from "styled-components";
import { deviceMedia } from "styles/Device";
import { Link } from "react-router-dom";

export const GamesLobbyContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    width: 100%;
    height: 100%;

    @media ${deviceMedia.desktop}{        
        grid-template-columns:  300px 1fr ;
    }
    @media ${deviceMedia.tablet}{        
        grid-template-columns:  1fr;
        grid-template-rows: 400px 1fr;
    }
    @media ${deviceMedia.mobile}{        
        grid-template-columns:  1fr ;
        grid-template-rows: 300px 1fr;
    }
`


export const Main = styled.div`
    width: 100%;
    height: 100%;
    border:1px solid var(--border-color-1);
    background-color: var(--bg-color-2);
    border-radius: 0.2em;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 10px;
`

export const StartLink = styled(Link)`
    border: none;
    outline: none;
    background-color: var(--bg-color-1);
    color:var(--text-color-1);
    font-size: 24px;
    width: 100%;
    text-transform: uppercase;
    padding: 10px 0px;
    border-radius: 0.1em;
    border:1px solid var(--border-color-1);
    text-decoration: none;
    text-align:center;
    &:hover{
        background-color: var(--bg-color-2);
        cursor: pointer;
    }
    
`
