import styled from "styled-components";
import { ScrollbarCss } from "styles/Scrollbar";
import { deviceMedia } from "styles/Device";

export const CardsViewerContainer = styled.div`
    width: auto;
    background: var(--bg-color-2); 
    overflow: auto;
    border-radius: 0.2em;
    border:1px solid rgb(64, 64, 70);
    ${ScrollbarCss};
    padding: 20px;
    /* 卡片寬度 260px,border 1px,gap 20px,padding 20px  */
    width: clamp(302px,100%,1442px);
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(260px,1fr));
    justify-items: center;
    align-items: flex-start;
    grid-gap: 20px;
`

export const LoadingSection = styled.div`
    width: clamp(302px,100%,1442px);
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 20px;
    background: var(--bg-color-2);
    border-radius: 0.2em;
    border:1px solid rgb(64, 64, 70);
`

export const EmptySection = styled.div`
    width: clamp(302px,100%,1442px);
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 20px;
    background: var(--bg-color-2);
    border-radius: 0.2em;
    border:1px solid rgb(64, 64, 70);
    color:var(--text-color-1);
    font-size: 42px;
    font-weight: bold;
`

export const LottieStyle = {
    width:"clamp(200px,60vw,400px)",
    height:"clamp(200px,60vw,400px)"
}