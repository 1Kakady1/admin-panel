import { createSelector } from '@reduxjs/toolkit';
import {createFeatureSelector} from "../../helpers/store"
import { SETTINGS_KEY } from './settings.const';
import { ISettings } from './settings.model';

export const userSelector = createFeatureSelector<ISettings>(
    SETTINGS_KEY
);

const isInit = createSelector(
    userSelector,
    ({ isInit }) => isInit
);


export const toSettings = {isInit};