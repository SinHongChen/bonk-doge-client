import React from 'react';
import { DeleteConfirmBtn } from "./Style";

export interface ButtonProps{
    type:"delete" | "submit" | "update" | "link"
}

const Button = ({type}:ButtonProps) => {
    return (
        <div>
            {type === "delete" && <DeleteConfirmBtn/>}
        </div>
    )
}

export default Button
