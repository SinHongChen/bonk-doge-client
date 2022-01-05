import styled from "styled-components";


export interface SubmitBtnProps{
    borderColor:string
}

export const SubmitBtn = styled.button<SubmitBtnProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border:${props => `1px solid var(--border-color-1)`};
    box-shadow: 1px 1px 4px 1px black;
    background-color: var(--bg-color-2);
    padding: 0px 20px;
    height: 36px;
    font-size:14px;
    color:var(--text-color-1);
    outline: none;
    border-radius: 0.2em;
    &:hover{
        cursor: pointer;
        color: var(--text-color-2);
        border:${props => `1px solid ${props.borderColor}`};
    }
`