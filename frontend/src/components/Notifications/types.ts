import { INF_User } from "../../features/types";

export interface INF_Notification {
    sender: INF_User;
    receiver: INF_User;
    text: string;
    read: boolean;
}