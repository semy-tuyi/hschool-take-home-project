import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Course } from "../Course";
import * as CourseActions from './actions';

export interface CourseState {
    courses: Course[],
    loading: boolean,
    error: string,
}

export const initialState: CourseState = {
    courses:[],
    loading: false,
    error: ''
}

export const courseReducer = createReducer(
    initialState,
    on(CourseActions.loadCourses, state => ({...state, loading: true})),
    on(CourseActions.loadCourseSuccess, (state, {courses}) => ({...state, courses,loading:false})),
    on(CourseActions.loadCourseFailure, (state, {error}) => ({...state, error, loading:false})),
    on(CourseActions.addCourse, (state, {course}) => ({...state, courses:[...state.courses, course]})),
    on(CourseActions.updateCourse, (state, {course}) => ({...state, courses:state.courses.map( c => c.id === course.id ? course : c) })),
    on(CourseActions.deleteCourse, (state, {id}) => ({...state, courses:state.courses.filter( c => c.id !== id) })),
       
)