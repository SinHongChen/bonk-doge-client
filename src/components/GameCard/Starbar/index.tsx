import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { StarbarContainer,Star } from "./Style";

export interface StarbarProps {
    number:Number
}

const Starbar = ({number}:StarbarProps) => {
    let starCounter = Array.apply(null, Array(number)).map((val, idx) => idx);

    return (
        <StarbarContainer>
            {starCounter.map((val,index)=>{
                return (
                    <Star key={index}>
                        <AiFillStar/>
                    </Star>
                )
            })}
        </StarbarContainer>
    )
}

export default Starbar
