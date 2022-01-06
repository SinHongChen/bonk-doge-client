import styled from "styled-components";


export const CardSearchFormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-items: center;
    width: clamp(320px,100%,500px);
    height: 46px;
    border-radius: 0.2em;
    grid-gap:10px;
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

export const CategoryFilter = styled.div`
    display: flex;
    flex-direction: row;
    grid-column-gap: 10px;
`

export interface CategorySelectorProps{
    isSelected?:boolean
}

export const CategorySelector = styled.label<CategorySelectorProps>`
    height:36px;
    padding:0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
    border-radius: 0.2em;
    border: ${props => props.isSelected ? "1px solid var(--text-color-3)" : "1px solid var(--border-color-1)"};
    color: ${props => props.isSelected ? "var(--text-color-3)" : "var(--text-color-1)"};

    &:hover{
        cursor: pointer;
        color:var(--text-color-2);
        border:1px solid var(--text-color-2);
    }
` 
