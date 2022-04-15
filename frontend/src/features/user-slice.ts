import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clearTokens, setTokens } from "../services/responseFuncs";
import { INF_UserState } from "./types";

const initialState: INF_UserState = {
    isLogged: false,
    user: { 
        id: -1,
        username: '',
        profile: '',
        reputation: -1
     }
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        loginAction: (state, action) => {
            state.isLogged = true;
            state.user = action.payload.user;
            setTokens(action.payload.tokens);
        },

        loggedOutAction: (state) => {
            state.isLogged = false;
            state.user = initialState.user;
            clearTokens();
        }
    }
})

export const { loginAction, loggedOutAction } = userSlice.actions;
export default userSlice.reducer;