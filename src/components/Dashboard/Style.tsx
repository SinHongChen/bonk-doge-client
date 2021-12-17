import styled from "styled-components";
import { ScrollbarCss } from "styles/Scrollbar";
import { deviceMedia } from "styles/Device";

export const DashboardContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-column-gap: 10px;
    height: 100vh;
    background:var(--bg-color-1);

    @media ${deviceMedia.desktop}{        
        grid-template-columns: 190px 1fr;
    }
    @media ${deviceMedia.tablet}{        
        grid-template-columns: 80px 1fr;
    }
    @media ${deviceMedia.mobile}{        
        grid-template-columns: 1fr;
        min-height: 100vh;
        height: fit-content;
        padding: 3%;
    }
`

export interface MenuContainerProps {
    isOpen:boolean
}

export const MenuContainer = styled.div<MenuContainerProps>`
    width: 100%;
    height: 100%;
    background: var(--bg-color-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 0px;
    grid-gap: 40px;
    border-right: 1px solid var(--border-color-1);

    @media ${deviceMedia.mobile}{    
        height:100vh;  
        transform: ${props => props.isOpen ? "translateX(0%)" : "translateX(-100%)"}   ;
        transition: transform 0.3s ease-in-out;
        padding: 0px;
        overflow: hidden;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: var(--navbar-index);
        display: flex;
        align-items: center;
        grid-gap: 5px;
    }
`

export const MenuOpenBtn = styled.div`
    width: 46px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-color-1);
    font-size: 38px;
    position: fixed;
    z-index: var(--navbar-index);
    top: 35vh;
    left: 0px;
    background-color: var(--bg-color-2);
    border:1px solid var(--border-color-1);

    &:hover{
        cursor: pointer;
    }

    @media ${deviceMedia.desktop}{    
        display:none;
    }
    @media ${deviceMedia.tablet}{        
        display:none;
    }
`

export const MenuCloseBtn = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding:0px 20px;
    color: var(--text-color-1);
    font-size: 32px;

    &:hover{
        cursor: pointer;
    }

    @media ${deviceMedia.desktop}{    
        display:none;
    }
    @media ${deviceMedia.tablet}{        
        display:none;
    }
`

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
    padding: 2%;
    ${ScrollbarCss};


`

export const Avator = styled.img`
    background: var(--bg-color-2);
    box-shadow: 1px 1px 4px 1px var(--box-shadow-color-1);

    border-radius: 50%;
    object-fit: contain;
    border: none;
    position: relative;

    @media ${deviceMedia.desktop}{    
        width: 80px;
        height: 80px;    
    }
    @media ${deviceMedia.tablet}{        
        width: 50px;
        height: 50px;
    }

`

export const AccountInfoBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-row-gap: 10px;
    @media ${deviceMedia.mobile}{        
        display: none;
    }
`

export const UserNameBar = styled.div`
    color:var(--text-color-1);
`

export const SignOutBtn = styled.a`
    text-decoration: none;
    color:var(--text-color-1);
    padding: 5px 10px;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        background: var(--bg-color-1);
    }
`

