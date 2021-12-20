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
    font-size: 28px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${deviceMedia.mobile}{  
        display: none;     
    }
`

export const LinkDisplayName = styled.h2`
    color:var(--text-color-1);
    padding: 0px;
    margin: 0px;
    @media ${deviceMedia.desktop}{   
        font-size: 18px;
        font-weight:bold;    
        letter-spacing: 3px;
    }
    @media ${deviceMedia.tablet}{
        display: none;
    }
    @media ${deviceMedia.mobile}{  
        letter-spacing:5px;
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
    border: ${props => props.isSelected ? "1px solid var(--border-color-1)" : ""};
    position: relative;
    color:var(--text-color-1);
    padding-left: 25px;
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