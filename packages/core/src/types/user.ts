export interface User {
    birthday: string;
    id: string;
    is_admin: boolean;
    name: string;
    password: string;
    sex: "男" | "女";
    username: string;
}

export type UserSession = User & {
    access_token: string;
    token_type: string; //'bearer'
};
