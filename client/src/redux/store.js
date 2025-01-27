import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import {apiService} from "../services/apiService.js";


const store = configureStore({
    reducer: {
        auth: authSlice,
        [apiService.reducerPath]: apiService.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiService.middleware)
})


export default store