import styled from "styled-components";
import { GameCard } from "components";

export const DeckContainer = styled.div`
    height: 500px;
    width: 300px;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.2em;
    position: relative;

    &:hover{
        cursor: pointer;
    }
`

export interface CardProps{
    z:number,
    x:number,
    y:number
}

export const Card = styled(GameCard)<CardProps>`
    position: absolute;
    top: 0px;
    left: 0px;
    transform: ${props => `translateX(${props.x}px) translateY(${props.y}px)`};
    transition:all 1s ease-in-out;
`