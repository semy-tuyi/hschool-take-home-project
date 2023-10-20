import { Component } from '@angular/core';
import {State, Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import {AppState} from '../../../store/store';
import { Course } from 'src/app/Course';
import * as CourseActions from '../../../store/actions';
import { courseSelector } from 'src/app/store/selectors';
import { state } from '@angular/animations';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses$?: Observable<Course[]>;
  courses: Course[] = [];
  isLoading$?: Observable<boolean>

  constructor(private store: Store<AppState>) {
    this.courses$ = this.store.select(courseSelector);
    this.isLoading$ = this.store.select(state => state.course.loading);
    this.loadCourses();
  }

  loadCourses() {
    this.store.dispatch(CourseActions.loadCourses());
  }

  addCourse (index:number) {
    const course: Course = {
      id: index,
      name: 'a',
      author: 'b',
      progress: 1,
      lessons: 1
    };

    this.store.dispatch(CourseActions.addCourse({course}));
  }

  updateCourse(course:Course) {
    this.store.dispatch(CourseActions.updateCourse({...course }))
  }



}
