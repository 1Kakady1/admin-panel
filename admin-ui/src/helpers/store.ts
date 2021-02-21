/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector, OutputSelector } from '@reduxjs/toolkit';

export function createFeatureSelector<TResult>(
    featureName: string
): OutputSelector<Object, TResult, (res: TResult) => TResult> {
    return createSelector(
        (state: any) => state[featureName],
        (feature) => feature
    );
}