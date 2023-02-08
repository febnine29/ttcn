import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from "../../app/store";
import { toastType } from "./toastslice";
// interface ToastState{
//     title: string;
//     type: string;
// }
const initialState: toastType = {
    title: ''
}
const ToastSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        toastStore: (state, action) => {
            state.title = action.payload
            console.log('action', action.payload)
        }
    }
}) 
export const {toastStore} = ToastSlice.actions
export const alertSelector = (state: RootState) => state.toast
export default ToastSlice.reducer