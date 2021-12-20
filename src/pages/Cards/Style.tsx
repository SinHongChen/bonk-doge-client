import styled from "styled-components";
import { deviceMedia } from "styles/Device";

export const CardsContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-gap: 15px;
    height: 100%;
    width: 100%;
    justify-items: center;
`

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--bg-color-2);
    max-width: 650px;
    width: 100%;
    height: 46px;
    border:1px solid var(--border-color-1);
    padding: 0px 10px ;
    border-radius: 0.2em;
`

export const CategoryFilter = styled.div`
    display: flex;
    flex-direction: row;
    grid-column-gap: 10px;
`

export interface CategorySelectorProps{
    isSelected?:boolean
}

export const CategorySelector = styled.label<CategorySelectorProps>`
    width:60px;
    height:32px;
    //color:var(--text-color-1);
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
    border-radius: 0.2em;
    /* border:1px solid var(--border-color-1); */

    //background: ${props => props.isSelected && "var(--bg-color-2)"} ;
    //box-shadow: ${props => props.isSelected && "1px 2px 3px 1px black"};
    color: ${props => props.isSelected ? "var(--text-color-3)" : "var(--text-color-1)"};

    &:hover{
        cursor: pointer;
        color:var(--text-color-3);
        //background: ${props => props.isSelected ? "var(--bg-color-1)" : "var(--bg-color-2)"} ;
        //box-shadow: 1px 2px 3px 1px black;
    }
` 

export const CategoryCheckbox = styled.input.attrs({
    type:"checkbox"
})`

`

export const SearchIcon = styled.div`
    font-size: 18px;
    color:var(--text-color-1);
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-items: center;
`

export const SearchInput = styled.input`
    font-size: 18px;
    padding: 0px 10px 0px 15px;
    height: 42px;
    outline: none;
    border:1px solid var(--border-color-1);
    color: var(--text-color-1);
    border: none;
    outline: none;
    width: 100%;
    background-color: var(--bg-color-2);
`