import styled from "styled-components";
import { ScrollbarCss } from "styles/Scrollbar";
import { Lottie } from "components";

export const RankListContainer = styled.div`
    background-color: var(--bg-color-2);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: auto;
    ${ScrollbarCss}
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 0px;
    color:var(--text-color-1);
    width:100%;
`

export const Logo = styled(Lottie)`
    width: 80px;
    height:80px;
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

    &:hover{
        color: var(--text-color-3);
    }
`

export const PlayerAvator = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
`