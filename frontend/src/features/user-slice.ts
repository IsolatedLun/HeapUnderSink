import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    user: {  }
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {

    }
})

export const {  } = userSlice.actions;
export default userSlice.reducer;