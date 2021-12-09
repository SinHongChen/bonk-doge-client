import {createSlice} from "@reduxjs/toolkit";
import { User } from "types";

const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"",
        email:"",
        imgUrl:""
    },
    reducers:{
        setName:(state,action) =>{
            state.name = action.payload
        },
        setEmal:(state,action)=>{
            state.email = action.payload
        },
        setImgUrl:(state,action)=>{
            state.imgUrl = action.payload
        }
    }
})

export const {
    setName,
    setEmal,
    setImgUrl,
} = userSlice.actions;

export const selectName = (state:any) => state.user.name
export const selectEmail = (state:any) => state.user.email
export const selectImgUrl = (state:any) => state.user.imgUrl

export default userSlice.reducer