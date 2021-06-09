export const CLIENT_ID = 'movieflix';
export const CLIENT_SECRET = 'movieflix123';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userName: string;
    userId: number;
    role: Roles[];
}

type Roles = {
    id: number;
    authority: string;
}

export const saveSessionData = (loginResponse: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}

export const getSessionData = () => {
    const sessionData = localStorage.getItem('authData') ?? '{}';
    const parseSessionData = JSON.parse(sessionData);
    return parseSessionData as LoginResponse;
}
