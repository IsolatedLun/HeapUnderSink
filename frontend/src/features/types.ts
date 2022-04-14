export interface INF_User {
    id: number;
    username: string;
    reputation: number;
    profile: string;
}

export interface INF_UserState {
    isLogged: boolean;
    user: INF_User
}