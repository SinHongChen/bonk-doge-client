import styled from "styled-components";

export const RankListContainer = styled.div`
    border:1px solid var(--border-color-1);
    background-color: var(--bg-color-2);
    width: 100%;
    height: 100%;
    border-radius: 0.2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding:20px 10px;
    grid-gap: 30px;
`

export const Logo = styled.img`
    width: 120px;
    height: auto;
    object-fit: contain;
`

export const PlayerInfosSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PlayerInfosHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    color:var(--text-color-1);
    padding:15px 10px;
    background-color: var(--bg-color-1);
`

export const PlayerInfobar = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    color:var(--text-color-1);
    padding:8px 10px;
    background-color: var(--bg-color-1);
    &:hover{
        background-color: var(--hover-color-1);
        cursor: pointer;
    }
`

export const PlayerAvator = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
`