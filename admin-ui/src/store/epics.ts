import { combineEpics } from "redux-observable";
import { checkUserRememberSetEffect, userSetEffect } from "./user/user.effect";

const rootEpic = combineEpics(
    userSetEffect,
    checkUserRememberSetEffect
);

export default rootEpic