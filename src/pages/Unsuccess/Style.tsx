import styled from "styled-components"

export const UnsuccessContainer = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    font-size: clamp(28px,20vw,42px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color-1);
    background:linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    box-shadow: 2px 2px 4px 1px black;
    border-radius: 0.2em;
    transition:all 0.3s ease-in-out;

`