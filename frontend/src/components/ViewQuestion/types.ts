import { INF_User } from "../../features/types";
import { INF_Question } from '../Questions/types';

export interface INF_Answer {
    id: number;
    user: INF_User;
    body: string;
    votes: number;
    is_answer: boolean;
    rate_type: string;
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

export interface INF_RateObject extends INF_RateType {
    id: number;
    votes: number;
    model: string;
}