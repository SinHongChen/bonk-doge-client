import React,{useEffect,useState} from 'react';
import { GameContainer} from "./Style";
import Demo from "components/Fiber3D/Scences/Demo";

const Game = () => {

    return (
        <GameContainer>
            <Demo/>
        </GameContainer>
    )
}

export default Game
