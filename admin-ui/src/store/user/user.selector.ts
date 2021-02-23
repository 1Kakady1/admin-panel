import { createSelector } from '@reduxjs/toolkit';
import {createFeatureSelector} from "../../helpers/store"
import { USER_KEY } from './user.const';
import { IUser } from './user.model';

export const userSelector = createFeatureSelector<IUser>(
    USER_KEY
);

const name = createSelector(
    userSelector,
    ({ name }) => name
);

const preview = createSelector(
    userSelector,
    ({ preview }) => preview
);

const email = createSelector(
    userSelector,
    ({ email }) => email
);

const password = createSelector(
    userSelector,
    ({ password }) => password
);

const isAuth = createSelector(
    userSelector,
    ({ isAuth }) => isAuth
);

const isLoading = createSelector(
    userSelector,
    ({ isLoading }) => isLoading
);
const error = createSelector(
    userSelector,
    ({ error  }) => error
);
export const toUser = {name,isLoading, error , isAuth, email, password, preview};