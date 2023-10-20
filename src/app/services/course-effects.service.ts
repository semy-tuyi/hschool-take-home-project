import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs';
import * as CourseActions from '../store/actions';
import {of} from 'rxjs';
import { CourseService } from './course.service';


@Injectable({
  providedIn: 'root'
})
export class CourseEffectsService {
  constructor(private actions$: Actions, private courseService: CourseService) { }
  
  loadTodos$ = createEffect(
    () => this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      mergeMap(
        () => this.courseService.getCourses().pipe(
          map((courses) => CourseActions.loadCourseSuccess({courses})),
          catchError((error) => of(CourseActions.loadCourseFailure({error:error.message})))
        )
      )
    )
  );

}
