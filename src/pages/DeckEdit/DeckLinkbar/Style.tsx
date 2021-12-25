import styled from "styled-components";
import { Link } from "react-router-dom";

export const DeckLinkbarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 15px;
`


export const DeckLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column-gap: 10px;
  border-radius: 1em;
  position: relative;
  overflow: auto;
  background: var(--sea-blue);
  box-shadow: 1px 1px 6px 1px black;
  border: 1px solid black;
  padding: 8px 18px;
  color: var(--text-color-1);
  font-size: 14px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border: 1px solid var(--text-color-2);
  }
`