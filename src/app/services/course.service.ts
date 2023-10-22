import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {CourseInterface} from '../store/Model/Course';
import { Observable , delay, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:5000/courses';

  constructor() { }

  getAll():Observable<CourseInterface[]> {
    return of([
      {
        "id": 1,
        "name": "Master The Crystal Programming Language",
        "author": "Descholar",
        "progress": 64,
        "lessons": 24
      },
      {
        "id": 2,
        "name": "Master The Angular 16",
        "author": "Descholar",
        "progress": 50,
        "lessons": 10
      },
      {
        "id": 3,
        "name": "Master The Data Structure and Algorithm with JS",
        "author": "Descholar",
        "progress": 15,
        "lessons": 5
      }
    ]).pipe(delay(2000))
  }
/*
  getCourses() {
    
    return this.http.get<CourseInterface[]>(this.apiUrl);
  }

  deleteCourse(id:number | string) {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete(url);
  }

  updateCourse(course:CourseInterface) {
    const url = `${this.apiUrl}/${course.id}`;

    return this.http.put(url, course);
  }

  addCourse(course:CourseInterface) {
    
   return this.http.post(this.apiUrl, course);
  } */
}
