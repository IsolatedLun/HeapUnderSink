import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setTokens } from "../services/responseFuncs";
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
        }
    }
})

export const { loginAction } = userSlice.actions;
export default userSlice.reducer;