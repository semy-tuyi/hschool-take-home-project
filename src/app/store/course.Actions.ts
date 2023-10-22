import {createAction, props} from '@ngrx/store';
import { CourseInterface } from './Model/Course';

export const LOAD_COURSE = '[Course] Load Course';
export const LOAD_COURSE_SUCCESS = '[Course] Load Course Success';
export const LOAD_COURSE_FAIL = '[Course] Load Course Fail';

export const ADD_COURSE = '[Course] Add Course ';
// export const ADD_COURSE_SUCCESS = '[Course] Add Course Success';

export const UPDATE_COURSE = '[Course] Update Course ';
// export const UPDATE_COURSE_SUCCESS = '[Course] Add Course Success';

export const DELETE_COURSE = '[Course] Delete Course ';
// export const DELETE_COURSE_SUCCESS = 'Course] Delete Course Success';

export const loadCourses = createAction(LOAD_COURSE);
export const loadCoursesSuccess = createAction(LOAD_COURSE_SUCCESS, props<{courses: CourseInterface[] }> ());
export const loadCoursesFail = createAction(LOAD_COURSE_FAIL, props<{error: string}>());

export const addCourse = createAction(ADD_COURSE, props<{course: CourseInterface }> ());
// export const addCourseSuccess = createAction(ADD_COURSE_SUCCESS, props<{course: CourseInterface}> ());

export const updateCourse = createAction(UPDATE_COURSE, props<{course: CourseInterface }> ());
// export const updateCourseSuccess = createAction(UPDATE_COURSE_SUCCESS, props<{course: CourseInterface}> ());

export const deleteCourse = createAction(DELETE_COURSE, props<{id: string | number }> ());
// export const deleteCourseSuccess = createAction(DELETE_COURSE_SUCCESS, props<{course: CourseInterface }> ());

