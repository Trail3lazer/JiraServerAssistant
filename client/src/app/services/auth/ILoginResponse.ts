export interface ILoginResponse {
    loginInfo: {
        lastFailedLoginTime: Date;
        previousLoginTime: Date;
        loginCount: number;
        failedLoginCount: number;
    };
    session: {
        name: string;
        value: string;
    };
}
