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

export const LeftContainer = styled.div`
    width: 100%;
    height: 100%;
    background: var(--bg-color-2);
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 0px;
    grid-gap: 40px;
    border-right: 1px solid var(--border-color-1);
    

    @media ${deviceMedia.mobile}{        
        height: 100vh;
        position: fixed;
        display: none;
        top: 0px;
        left: 0px;
        z-index: var(--navbar-index);
    }
`

export const RightContainer = styled.div`
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
        width: 100px;
        height: 100px;    
    }
    @media ${deviceMedia.tablet}{        
        width: 60px;
        height: 60px;
    }
    @media ${deviceMedia.mobile}{        
        display: none;
    }
`