import styled from "styled-components";

import {Lottie} from "components";

export { default as DeckToolbar } from "./DeckToolbar";

export const DeckCreateContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
`

export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width:100%;
    grid-gap: 10px;
`

export const UploadingAnimation = styled(Lottie)`
    width:clamp(200px,60vw,300px);
    height:clamp(200px,60vw,300px);
`

export const UploadingSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ErrorMsg = styled.label`
    font-size:14px;
    color:red;
`