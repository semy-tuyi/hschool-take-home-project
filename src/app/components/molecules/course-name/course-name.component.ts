import { Component, Input } from '@angular/core';
import { CourseInterface } from 'src/app/store/Model/Course';

@Component({
  selector: 'app-course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.css']
})
export class CourseNameComponent {
  @Input () course:CourseInterface={
    id:0,
    name:'',
    author:'',
    progress:1,
    lessons:1
  };

  constructor(){console.warn(this.course.name)}


}
