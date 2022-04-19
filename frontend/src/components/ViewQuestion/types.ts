import { INF_User } from "../../features/types";
import { INF_Question } from '../Questions/types';

export interface INF_Answer extends INF_RateType {
    user: INF_User;
    body: string;
    votes: number;
    is_answer: boolean;
}

export interface INF_RatingController extends INF_RateType {
    model: INF_Question | INF_Answer;
    modelType: string | 'question' | 'answer';
    setRateType: Function;
}

export interface INF_RateType {
    rateType: string | 'neutral' | 'upvote' | 'downvote';
}

export interface INF_AnswerForm {
    answer: string;
}

export interface INF_AnswerFormProps {
    setQuestion: Function;
    questionId: number;
}