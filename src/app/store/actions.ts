import {createAction, props} from '@ngrx/store';
import { Course } from '../Course';

export const loadCourses = createAction('[Course] Load Course');
export const loadCourseSuccess = createAction('Course] Load Todos Success', props<{courses: Course[] }> ());
export const loadCourseFailure = createAction('[Course] Load Todos Failure', props<{error: string}>());
export const addCourse = createAction('[Course] Add Course', props<{ course: Course }>());
export const updateCourse = createAction('[Course] Update Course', props<{ course: Course }>());
export const deleteCourse = createAction('[Course] Delete Course', props<{ id: number | string }>());