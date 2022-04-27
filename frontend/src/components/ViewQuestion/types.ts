import { INF_User } from "../../features/types";
import { INF_Question } from '../Questions/types';

export interface INF_Answer {
    id: number;
    question: number;
    questionUserId: number;
    votes: number;

    user: INF_User;

    body: string;
    rate_type: string;
    

    is_answer: boolean;
    showControls: boolean;

    setReplyingTo: Function;
}

export interface INF_Answers {
    user: INF_User;
    question: INF_Question;
    setReplyingTo: Function;
}

export interface INF_RatingController extends INF_RateType {
    model: INF_Question | INF_Answer;
    modelType: string | 'question' | 'answer';
    setRateType: Function;
    replyingTo: string | null;
}

export interface INF_RateType {
    rateType: string | 'neutral' | 'upvote' | 'downvote';
}

export interface INF_AnswerForm {
    answer: string;
}

export interface INF_AnswerFormProps {
    setQuestion: Function;
    question: INF_Question;
    replyingTo: string | null;
    setReplyingTo: Function;
}

export interface INF_RateObject extends INF_RateType {
    id: number;
    votes: number;
    model: string;
}