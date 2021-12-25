import styled from "styled-components";
import { Link } from "react-router-dom";

export const DeckToolbarContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  grid-gap: 10px;
`;
export const ToolBtn = styled.button`
  font-size: 24px;
  height: 36px;
  width: 36px;
  border-radius: 0.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color-1);
  background-color: var(--bg-color-2);
  color: var(--text-color-1);

  &:hover {
    cursor: pointer;
    color: var(--text-color-2);
    border: 1px solid var(--text-color-2);
  }
`;

export const DeleteDeckBtn = styled.button`
  color: red;
  background-color: var(--bg-color-2);
  border: 1px solid red;
  padding: 0px 10px;
  height: 36px;
  border-radius: 0.2em;
  outline: none;

  &:hover {
    cursor: pointer;
    color: var(--text-color-2);
    border: 1px solid var(--text-color-2);
  }
`;

export const CancelBtn = styled(DeleteDeckBtn)`
  color: gray;
  background-color: var(--bg-color-2);
  border: 1px solid gray;
`

export const SubmitBtn = styled(DeleteDeckBtn)`
  color: #fcba03;
  background-color: var(--bg-color-2);
  border: 1px solid #fcba03;
`

export const MsgLabel = styled.label`
  color:var(--text-color-3);
  padding:0px 10px;
`

export const DeckLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column-gap: 10px;
  border-radius: 0.2em;
  position: relative;
  overflow: auto;
  background: var(--sea-blue);
  color: var(--text-color-1);
  font-size: 14px;
  text-decoration: none;
  height: 36px;
  padding: 0px 10px;
  border:1px solid var(--border-color-1);
  
  &:hover {
    cursor: pointer;
    border: 1px solid var(--text-color-2);
  }
`;
