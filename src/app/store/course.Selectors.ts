import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CourseStateInterface } from "./Model/Course";

const feature = createFeatureSelector<CourseStateInterface>('course');

export const courseSelector = createSelector(
    feature,
    (state) => { return state.courses; }
)
