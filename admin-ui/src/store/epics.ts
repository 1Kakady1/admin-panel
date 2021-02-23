import { combineEpics } from "redux-observable";
import { checkUserRememberSetEffect, userLogoutEffect, userSetEffect } from "./user/user.effect";

const rootEpic = combineEpics(
    userSetEffect,
    checkUserRememberSetEffect,
    userLogoutEffect,
);

export default rootEpic