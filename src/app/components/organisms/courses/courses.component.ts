import { Component } from '@angular/core';
import {State, Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseInterface, CourseStateInterface } from 'src/app/store/Model/Course'; 
import * as CourseActions from '../../../store/course.Actions';
import { courseSelector } from 'src/app/store/course.Selectors';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses$?: Observable<CourseInterface[]>;
  courses: CourseInterface[] = [];
  isLoading$?: Observable<boolean>

 constructor(private store:Store<CourseStateInterface>) {
    this.courses$ = this.store.select(courseSelector);
    this.isLoading$ = this.store.select(state => state.loading);
    console.warn(this.isLoading$)
    console.warn(this.courses$)
    this.loadCourses();
  }

  loadCourses() {
    this.store.dispatch(CourseActions.loadCourses());
  }
 
  addCourse (index:number) {
    const course: CourseInterface = {
      id: index,
      name: 'Testing',
      author: 'Tester',
      progress: 1,
      lessons: 1
    };

    this.store.dispatch(CourseActions.addCourse({course}));
  }
/*
  updateCourse(course:Course) {
    this.store.dispatch(CourseActions.updateCourse())
  }
*/


}
