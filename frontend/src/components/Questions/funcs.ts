import { SetState } from "immer/dist/internal";
import { SetStateAction } from "react";
import { INF_Question } from "./types";

interface QuestionSetter extends React.Dispatch<React.SetStateAction<INF_Question[]>> {};

// Sorters
export function sortByViews(setQuestions: QuestionSetter) {
    setQuestions(prevState => prevState.sort((a, b) => b.views - a.views));
  }

export function sortByVotes(setQuestions: QuestionSetter) {
    setQuestions(prevState => prevState.sort((a, b) => b.votes - a.votes));
}

export function sortByDate(setQuestions: QuestionSetter) {
    // ...
}

export function filterBountied(setQuestions: QuestionSetter) {
    // ...
}