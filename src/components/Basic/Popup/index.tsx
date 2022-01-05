import React from 'react';
import { PopupContainer,Header,Content,CloseBtn,Footer } from "./Style";
import { AiOutlineClose } from "react-icons/ai";

export interface PopupProps{
    enabled?:boolean,
    children?:React.ReactNode,
    footer?:React.ReactNode,
    onClose?:React.MouseEventHandler<HTMLButtonElement>,
    className?:string,
    style?:React.CSSProperties
}

const Popup = ({enabled=true,children,footer,onClose,className,style}:PopupProps) => {
    return (
        <PopupContainer className={className} style={style} isShow={enabled}>
            <Content>
                <Header>
                    <CloseBtn onClick={onClose}><AiOutlineClose/></CloseBtn>
                </Header>
                {children}
                {footer &&
                    <Footer>{footer}</Footer>
                }
            </Content>
        </PopupContainer>
    )
}

export default Popup
