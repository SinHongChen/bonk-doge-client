import styled,{keyframes} from "styled-components";
import GoogleLogin from 'react-google-login';
import { BoldFontCss } from "styles/Font";


export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    grid-row-gap: 25px;
    min-height: 100vh;
    width: 100%;
    padding-top: 10vh;
    background:var(--bg-color-1);
`


export const GoogleOAuthBtn = styled(GoogleLogin)`
    color:var(--text-color-1) !important;
    border:1px solid white !important;
    font-size: 1.2em !important;
    outline: none;
    box-shadow: none !important;
    background:var(--bg-color-2) !important;
    width: 90%;
    max-width: 400px !important;
    border-radius: 0.2rem !important;
    display: flex !important;
    align-items: center !important;
    justify-content:center !important;
    font-weight: bold;
    text-transform: uppercase;

    &:hover{
        cursor: pointer !important;
        box-shadow: 1px 1px 4px 1px black !important;
        border:1px solid var(--text-color-3) !important;
        color:var(--text-color-3) !important;
    }
`

const FillAnimation = keyframes`
    0% {
        width:0px;
    }
    100% {
        width:100%;
    }
`

export const Title = styled.h1`
    color:white;
    font-size: clamp(1rem, 13vw, 4rem); 
    text-transform: uppercase;
    position: relative;
    margin-bottom: 50px;
    width: fit-content;
    -webkit-text-stroke:0.5px white;
    -webkit-box-reflect:below -20px linear-gradient(transparent,rgba(50,50,50,1));
    -moz-text-stroke:0.5px white;
    -moz-box-reflect:below -20px linear-gradient(transparent,rgba(50,50,50,1));
    -o-text-stroke:0.5px white;
    -o-box-reflect:below -20px linear-gradient(transparent,rgba(50,50,50,1));
    ${BoldFontCss};
    
    &:after{
        content: attr(data-text);
        height: 100%;
        width: 0px;
        top: 0px;
        left: 0px;
        position: absolute;
        color: rgb(242, 201, 76);
        text-transform: uppercase;
        overflow: hidden;
        white-space: nowrap;
        animation: ${FillAnimation} 3s linear forwards;
    }
`

export const Input = styled.input`
    outline: none;
    background-color: var(--bg-color-2);
    width: 100%;
    max-width: 400px;
    box-shadow: 1px 3px 5px 1px var(--box-shadow-color-1);
    border-radius: 0.2rem;
    border:1px solid var(--border-color-1);
    font-size: initial;
    padding: 10px 20px;
    color:var(--text-color-1);
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    grid-row-gap: 10px;
`
