import { createSlice } from "@reduxjs/toolkit";
import { INF_QuestionState } from "./types";

const initialState: INF_QuestionState = {
    questions: [],
    currQuestion: undefined,
}

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: initialState,
    reducers: {
        setQuestions(state, action) {
            state.questions = action.payload;
        },

        setCurrQuestion(state, action) {
            state.currQuestion = action.payload;
            const arr = [...state.questions].concat(action.payload);

            state.questions = arr;
        }
    },

})

export const { setQuestions, setCurrQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;