import {createSlice} from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {user: null},
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = null
        }
    }
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer