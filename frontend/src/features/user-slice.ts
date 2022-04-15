import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../services/authService";
import { clearTokens, setTokens } from "../services/responseFuncs";
import { renewTokens } from "./funcs";
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
            window.location.href = '/';
        }
    },

    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.authenticate.matchFulfilled, (state, action) => {
            state.isLogged = true;
            state.user = action.payload;
        })
    }
})

export const { loginAction, loggedOutAction } = userSlice.actions;
export default userSlice.reducer;