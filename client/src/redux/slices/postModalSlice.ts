import {createSlice} from "@reduxjs/toolkit";

interface IProps {
    open: boolean
}


const initialState: IProps = {
    open: false
}


const postModalSlice = createSlice({
    name: "postModalSlice",
    initialState,
    reducers: {
        handleOpen: (state) => {
            state.open = true;
        },
        handleClose: (state) => {
            state.open = false;
        },
    }
});


export const {handleClose, handleOpen} = postModalSlice.actions;
export const postModalReducer = postModalSlice.reducer;