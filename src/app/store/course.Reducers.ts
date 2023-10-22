import { createReducer, on } from "@ngrx/store";
import { CourseStateInterface } from "./Model/Course";
import * as CourseActions from './course.Actions';

export const initialState: CourseStateInterface = {
    courses:[],
    loading: false,
    error: ''
}
export const courseReducer = createReducer(
    initialState,
    on(CourseActions.loadCourses, (state) => ({...state, loading: true})),
    on(CourseActions.loadCoursesSuccess, (state, {courses}) => ({...state,courses ,loading: true})),
    on(CourseActions.loadCoursesFail, (state, {error}) => ({...state, error, loading: true})),

    on(CourseActions.addCourse, (state, {course}) => ({...state, courses:[...state.courses, course] })),

    on(CourseActions.updateCourse, (state, {course}) => ({...state, courses:state.courses.map(c => c.id === course.id ? course : c)})),
    
    on(CourseActions.deleteCourse, (state, {id}) => ({...state, courses:state.courses.filter( c => c.id !== id) }))
);