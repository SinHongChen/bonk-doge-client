import styled from "styled-components";

export interface PopupContainerProps{
    isShow?:boolean
}

export const PopupContainer = styled.div<PopupContainerProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(100,100,100,0.3);
    z-index: var(--popup-index);
    display: ${props => props.isShow ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Content = styled.div`
    width: clamp(200px,80%,400px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    grid-gap: 10px;
    border-radius: 0.2em;
    padding: 20px;
    color:var(--text-color-1);
    background-color: rgba(0,0,0,0.8);
`

export const Header = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Footer = styled.div`
    
`

export const CloseBtn = styled.button`
    width: 36px;
    height: 36px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-color-1);
    background-color: var(--bg-color-2);
    border: 1px solid var(--border-color-1);
    outline: none;
    border-radius: 0.1em;

    &:hover {
        cursor: pointer;
        color: var(--text-color-2);
        border: 1px solid var(--text-color-2);
    }
`