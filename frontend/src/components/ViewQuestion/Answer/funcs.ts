import { INF_User } from "../../../features/types";
import { INF_Question } from "../../Questions/types";
import { INF_Answer } from "../types";

export function shouldShowControls(question: INF_Question, user: INF_User, answer: INF_Answer) {
    return user.id === question.user.id 
        && user.id !== answer.user.id;
}