import styled from "styled-components";

export const RankListContainer = styled.div`
    background-color: var(--bg-color-2);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:20px 0px;
    grid-gap: 30px;
    overflow: auto;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 25px;
    color:var(--text-color-1);
`

export const Logo = styled.img`
    width: 45px;
    height: auto;
    object-fit: contain;
`

export const PlayerInfosSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border:1px solid var(--border-color-1);
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
    border: 1px solid var(--bg-color-1);

    &:hover{
        color: var(--text-color-2);
        border: 1px solid var(--text-color-2);
    }
`

export const PlayerAvator = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
`