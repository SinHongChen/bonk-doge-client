import styled from "styled-components";
import { Popup } from "components/Basic";


export const GamePopup = styled(Popup)`
    background-color: none;
`

export const BoardContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content:flex-start;
    overflow: auto;
    /* background-color:var(--bg-color-1); */
`

export const SelfPlace = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:flex-end;
    height:100%;
    width:100%;
    overflow: visible;
    grid-gap: 40px;
    position:relative;
    padding:10px;
`

export const SelfBottomSection = styled.div`
    grid-gap: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const EnemyBottomSection = styled(SelfBottomSection)`

`

export const EnemyPlace = styled(SelfPlace)`
    justify-content:flex-start;
    border-bottom:1px solid var(--border-color-1);
`

export const PopupFooter = styled.div`
    width:100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    grid-gap:10px;
`

export const SurrenderBtn = styled.button`
    border:1px solid red;
    outline:none;
    padding:10px 20px;
    background:white;
    color:red;
    border-radius:2em;

    &:hover{
        color:white;
        background:red;
        cursor:pointer;
    }
`