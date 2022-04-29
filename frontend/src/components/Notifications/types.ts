import { INF_User } from "../../features/types";
import { INF_Question } from "../Questions/types";

export interface INF_Notification {
    sender: INF_User;
    receiver: INF_User;
    question: INF_Question;

    text: string;
    to: string;

    read: boolean;
}

export interface INF_UserNotificatons {
    notifications: INF_Notification[];
    setHasRead: Function;
}