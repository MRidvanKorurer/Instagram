import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IUser } from "../../types/type";



interface IInitialState {
    isAuth: boolean,
    user: IUser
}

const initialState:IInitialState= {
    isAuth: false,
    user: {
        _id: "",
        fullname: "",
        username: "",
        email: "",
        password: "",
        passwordAgain: "",
        bio: "",
        profilePicture: "" ,
        followers: [],
        followings: [],
        isAdmin: false,
        createdAt: "",
        updatedAt: "",
        __v: ""
    }
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
        },
        getUser: (state) => {
            const activeUser: IUser = JSON.parse(localStorage.getItem("user"));
            state.user = activeUser;
        }
    }
});


export const {saveLocalStorage, changeIsAuth, isAuthStatus, getUser } = authSlice.actions;
export const authReducer = authSlice.reducer;