import React, { useEffect, useState } from 'react'


const useCookie = (key:string,initialValue:string | Function) => {

    const getCookie = (key:string):string | null=>{
        let cookiestring=RegExp(key+"=[^;]+").exec(document.cookie);
        let value = decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
        if(value === "") return null;
        return value;
    }

    const [value,setValue] = useState(()=>{
        const cookieValue = getCookie(key);
        if(cookieValue != null) return cookieValue;

        if(typeof initialValue === "function"){
            return initialValue();
        }else{
            return initialValue
        }
    });


    useEffect(()=>{
        document.cookie = `${key}=${value};`;
    },[value])
    
    return [value,setValue]
}

export default useCookie
