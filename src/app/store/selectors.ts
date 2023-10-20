import { createSelector } from "@ngrx/store";
import { CourseState } from "./reducers";
import { AppState } from "./store";

const feature = (state: AppState) => state.course;

export const courseSelector = createSelector(
    feature,
    (state: CourseState) => state.courses
);