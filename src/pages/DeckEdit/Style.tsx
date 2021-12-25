import styled from "styled-components";
import { deviceMedia } from "styles/Device";
import { ScrollbarCss } from "styles/Scrollbar";

export { default as DeckToolbar } from "./DeckToolbar";

export { default as DeckLinkbar } from "./DeckLinkbar";

export const DeckEditContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width:100%;
    grid-gap: 10px;
`

export const DeleteConfirmSection = styled.div`
    width: 100%;
    background-color: var(--bg-color-2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    grid-gap: 20px;
    border-radius: 0.2em;
    color:var(--text-color-1);
`

export interface EditDeckSectionProps{
    isShow?:boolean
}

export const EditDeckSection = styled.div<EditDeckSectionProps>`
    width: 100%;
    height: 100%;
    border-radius: 0.2em;
    padding: 10px;
    grid-gap: 10px;
    display: ${props=>props.isShow ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-items: center;
    overflow: auto;
    ${ScrollbarCss};
`

export const AddCardsSection = styled(EditDeckSection)`
`

export const SubmitBtn = styled.button`
    height: 36px;
    padding:0px 10px;
    border: 1px solid red;
    width:100%;
    color:red;
    background:var(--bg-color-2);

    &:hover{
        cursor: pointer;
        color:var(--text-color-2);
        border: 1px solid var(--text-color-2);
    }
`