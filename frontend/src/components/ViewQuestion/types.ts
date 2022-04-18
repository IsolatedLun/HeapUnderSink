import { INF_User } from "../../features/types";
import { INF_Question } from '../Questions/types';

export interface INF_Answer {
    user: INF_User;
    body: string;
    votes: number;
    is_answer: boolean;
}

export interface INF_RatingController {
    model: INF_Question | INF_Answer;
    modelType: 'question' | 'answer';
    setModel: Function;
    setRateType: Function;
}