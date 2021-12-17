import React from 'react';
import { SocketContainer } from "./Style";
import GameSocket from "utils/GameSocket";

const url = process.env.REACT_APP_SOCKET_URL;

const SocketPage = () => {
    const socket = new GameSocket(`${url}`,"QWQFWFQWFWQF");
    
    return (
        <SocketContainer>
        </SocketContainer>
    )
}

export default SocketPage
