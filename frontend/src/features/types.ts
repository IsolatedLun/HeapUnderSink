export interface INF_User {
    id: number;
    username: string;
    reputation: number;
    profile: string;

    is_superuser: boolean;
    is_staff: boolean;
}

export interface INF_UserState {
    isLogged: boolean;
    user: INF_User;
}