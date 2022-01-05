import styled from "styled-components";

export const GameContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-color-1);
    position: relative;
`

export const WattingMatchSection = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:var(--text-color-1);
    font-size:clamp(1rem,2.5vw,2.5rem);
`

export const BackgroundSection = styled.div`
    background-image: url("https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80");
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index:2;
    width:100%;
    height:100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    font-size: clamp(4rem,100vw,12rem);
    word-break: break-word;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content: center;
    overflow:hidden;
`

export const Main = styled.div`
    position: absolute;
    width: 100%;
    height:100%;
    z-index:3;
`