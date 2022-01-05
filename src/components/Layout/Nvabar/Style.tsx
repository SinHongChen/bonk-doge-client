import styled from "styled-components";
import { Link } from "react-router-dom";
import { deviceMedia } from "styles/Device";

export const NavbarContianer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    grid-gap: 10px;
`

export interface NvaLinkProps {
    isSelected?:boolean
}

export const Icon = styled.div`
    font-size: 20px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${deviceMedia.mobile}{  
        display: none;     
    }
`

export const LinkDisplayName = styled.h2`
    color:var(--text-color-1);
    font-family: 'Bangers', cursive;
    font-family: 'Bebas Neue', cursive;
    font-family: 'Fuzzy Bubbles', cursive;
    font-family: 'Lobster', cursive;
    font-family: 'Moo Lah Lah', cursive;
    font-family: 'Noto Serif TC', serif;
    font-family: 'Sora', sans-serif;
    font-size: 16px;
    letter-spacing: 2px;

    @media ${deviceMedia.tablet}{   
        display: none;
    }
`

export const NvaLink = styled(Link)<NvaLinkProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 20px;
    width: 100%;
    height: 50px;
    text-decoration: none;
    background-color: ${props => props.isSelected ? "var(--bg-color-1)" : ""};
    padding: 0px 20px;
    border: ${props => props.isSelected ? "1px solid var(--border-color-1)" : ""};
    position: relative;
    color:var(--text-color-1);


    @media ${deviceMedia.mobile}{        
    
    }

    &:hover{
        cursor: pointer;
        background: var(--bg-color-1);
    }

    @media ${deviceMedia.desktop}{   
        border-right: 1px solid var(--bg-color-1);
        margin-left: ${props => props.isSelected ? "1px" : ""};     
    }
    @media ${deviceMedia.tablet}{   
        border-right: 1px solid var(--bg-color-1);
        margin-left: ${props => props.isSelected ? "1px" : ""};     
    }
    @media ${deviceMedia.mobile}{        
        justify-content: center;    
    }
`