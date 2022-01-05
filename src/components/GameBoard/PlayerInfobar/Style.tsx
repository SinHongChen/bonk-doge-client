import styled from "styled-components";


export interface PlayerInfobarContainerProps{
    type:"self" | "enemy"
}

export const PlayerInfobarContainer = styled.div<PlayerInfobarContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding:5px 20px;
    grid-gap: 15px;
    color:var(--text-color-1);
    background-color: ${props => props.type === "self" ? "#3492eb" : "red"};
    border:1px solid var(--border-color-1);
    border-radius:3em;
    box-shadow: 1px 1px 5px 3px rgba(0,0,0,0.5);
`

export const Hpbar = styled.h3`
    text-align: center;
    color:var(--text-color-1);
    width: 84px;
`


export const Avator = styled.img`
    width: 60px;
    height:60px;
    border-radius: 50%;
    object-fit: contain;
`

export const Clock = styled.h3`
    width:30px;
    text-align: center;
`