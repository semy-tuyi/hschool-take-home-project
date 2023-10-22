import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CourseActions from './course.Actions';
import { catchError, map, mergeMap, of } from "rxjs";
import { CourseService } from "../services/course.service";

@Injectable(
    {
     providedIn:'root'

    }
)
export class CourseEffects{
    constructor(private actions$:Actions, private courseServices:CourseService) {}

    loadCourses$ = createEffect(
        () => this.actions$.pipe(
            ofType(CourseActions.loadCourses),
            mergeMap(
                () => this.courseServices.getAll().pipe(
                    map( courses => CourseActions.loadCoursesSuccess({courses})),
                    catchError( error => 
                        of (CourseActions.loadCoursesFail({error:error.message}))
                    )
                )
            )
        )
    );
}