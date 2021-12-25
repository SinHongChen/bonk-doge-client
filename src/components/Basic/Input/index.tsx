import React,{ useState } from 'react';
import { InputContainer,InputElement,ErrorMsg,RemindMsg } from "./Style";

export interface InputProps{
    placeholder?:string,
    onChange?:React.ChangeEventHandler<HTMLInputElement>,
    valueRef?:React.RefObject<HTMLInputElement>,
    expectValue?:string,
    minLength?:number,
    maxLength?:number,
    errorMsg?:string,
    remindMsg?:string,
    enabledError?:boolean
}

const Input = ({
    placeholder,
    onChange,
    valueRef,
    errorMsg,
    remindMsg,
    expectValue,
    minLength,
    maxLength,
    enabledError = false
}:InputProps) => {
    const [isError,setIsError] = useState(false);

    const validate = ()=>{
        let value = valueRef?.current?.value ? valueRef?.current?.value : "";
        if(expectValue && value !== expectValue) { return false; }
        if(maxLength && value.length > maxLength) { return false; }
        if(minLength && value.length < minLength) { return false; }
        return true;
    }

    const isShowErrorMsg = ()=>{
        if((expectValue || minLength || maxLength) && errorMsg && isError){
            return true;
        }
        return false;
    }

    const onValueChange:React.ChangeEventHandler<HTMLInputElement> = (event:any)=>{
        if(typeof onChange === "function"){
            onChange(event);
        }
        if(expectValue || minLength || maxLength){
            setIsError(!validate());
        }
    }

    return (
        <InputContainer>
            {isShowErrorMsg() &&
                <ErrorMsg>{`* ${errorMsg}`}</ErrorMsg>
            }
            {remindMsg && !isError &&
                <RemindMsg>{`* ${remindMsg}`}</RemindMsg>
            }
            <InputElement isError={isError || enabledError} ref={valueRef} onChange={onValueChange} type="text" placeholder={`${placeholder ? placeholder : ""}`} />
        </InputContainer>
    )
}

export default Input
