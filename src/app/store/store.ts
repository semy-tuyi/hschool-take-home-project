import {Action, ActionReducer} from '@ngrx/store';
import { courseReducer, CourseState } from './reducers';
import { CourseEffectsService } from '../services/course-effects.service';

export interface AppState {
    course: CourseState
}

export interface AppStore {
    course: ActionReducer<CourseState, Action>;
}

export const appStore: AppStore = {
    course: courseReducer
}

export const appEffects = [CourseEffectsService]