import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IUser } from "../../types/type";



interface IInitialState {
    isAuth: boolean
}

const initialState:IInitialState= {
    isAuth: false
}



const authSlice = createSlice({
    name: "authSlice", 
    initialState,
    reducers: {
        saveLocalStorage : (state, actions: PayloadAction<IUser>) => {
            localStorage.setItem("user", JSON.stringify(actions.payload));
        },
        changeIsAuth: (state, actions: PayloadAction<boolean>) => {
            state.isAuth = actions.payload;
        },
        isAuthStatus: (state) => {
            localStorage.getItem("user") ? state.isAuth = true : state.isAuth = false;
        }
    }
});


export const {saveLocalStorage, changeIsAuth, isAuthStatus } = authSlice.actions;
export const authReducer = authSlice.reducer;