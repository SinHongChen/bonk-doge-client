import styled from "styled-components";

export const InputContainer = styled.div`
    width: clamp(100px,100%,400px);
    height: fit-content;
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
`

export interface InputElementProps{
    isError?:boolean
}

export const InputElement = styled.input<InputElementProps>`
    height: 36px;
    width: 100%;
    padding: 10px;
    border: ${props => props.isError ? "1px solid red" : "1px solid var(--border-color-1)"};
    background-color: var(--bg-color-2);
    border-radius: 0.1em;
    outline: none;
    font-size: initial;
    color:var(--text-color-1);
`

export const ErrorMsg = styled.label`
    font-size: 14px;
    color:red;
`

export const RemindMsg = styled(ErrorMsg)`
    color:var(--text-color-1);
`