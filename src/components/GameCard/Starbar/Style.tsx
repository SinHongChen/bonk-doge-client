import styled from "styled-components";

export const StarbarContainer = styled.div`
    display: flex;
    align-items: center;
    /* flex-wrap: wrap; */
    justify-content: flex-end;
    overflow: hidden;
    width: 100%;
    grid-gap: 6px;
    height: 15px;
    width: 100%;
    padding: 0px 5px;
` 

export const Star = styled.div`
    background: linear-gradient(#f5ca6e 0%, #edbe58 10%, #c99b36 50%, #b9820c 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 2px;
    font-size: 10px;
`