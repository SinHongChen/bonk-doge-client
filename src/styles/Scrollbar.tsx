import { css } from 'styled-components'

export const ScrollbarCss = css`
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: white; 
        border:1px solid var(--border-color-1);
        border-radius: 0.2em;

    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--bg-color-3);
        &:hover{
            cursor: pointer;
        }
    }

`
