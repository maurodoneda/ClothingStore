export enum USER_ACTIONS {
    CHECK_USER_SESSION = "user/CHECK_USER_SESSION",
    SIGN_IN_WITH_GOOGLE_START = "user/SIGN_IN_WITH_GOOGLE_START",
    SIGN_IN_WITH_EMAIL_START = "user/SIGN_IN_WITH_EMAIL_START",
    SIGN_IN_SUCCEED = "user/SIGN_IN_SUCCEED",
    SIGN_IN_FAILED = "user/SIGN_IN_FAILED",
    SIGN_OUT_START = "user/SIGN_OUT_START",
    SIGN_OUT_FAILED = "user/SIGN_OUT_FAILED",
    SIGN_OUT_SUCCEED = "user/SIGN_OUT_SUCCEED",
    SIGN_UP_START = "user/SIGN_UP_START",
    SIGN_UP_FAILED = "user/SIGN_UP_FAILED",
    SIGN_UP_SUCCEED ="user/SIGN_UP_SUCCEED"
}

export type User = {
    id: string,
    name: string,
    email: string,

    imageUrl : string
}

export type UserSignUp = {
    email : string,
    password : string,
    displayName : string
}
