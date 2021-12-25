import styled from "styled-components";
import { GameCard } from "components";

export interface DeckCardContainerProps {
  isSelected?: boolean;
}

export const DeckCardContainer = styled.div<DeckCardContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.3em;
  position: relative;
  overflow: auto;
  background: var(--sea-blue);
  box-shadow: 1px 1px 6px 1px black;
  border:1px solid black;
  height: 420px;
  min-width: 270px;

  &:hover {
    cursor: pointer;
    border: 1px solid var(--text-color-2);
  }
`;


export const DeckName = styled.h5`
  width: 100%;
  color: var(--text-color-1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100px;
  z-index: 1;
  bottom: 0px;
  left: 0px;
  background: linear-gradient(to right,rgba(43,88,118,0.8),rgba(78,67,118,0.9));
`;

