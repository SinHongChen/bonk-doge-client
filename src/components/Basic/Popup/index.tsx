import React from 'react';
import { PopupContainer,Header,Content,CloseBtn,Footer } from "./Style";
import { AiOutlineClose } from "react-icons/ai";

export interface PopupProps{
    enabled?:boolean,
    children?:React.ReactNode,
    onClose?:React.MouseEventHandler<HTMLButtonElement>
}

const Popup = ({enabled=true,children,onClose}:PopupProps) => {
    return (
        <PopupContainer isShow={enabled}>
            <Content>
                <Header>
                    <CloseBtn onClick={onClose}><AiOutlineClose/></CloseBtn>
                </Header>
                <div>{children}</div>
                <Footer/>
            </Content>
        </PopupContainer>
    )
}

export default Popup
