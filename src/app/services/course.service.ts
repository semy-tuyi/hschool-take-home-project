import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Course} from '../Course';


const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:5000/courses';

  constructor(private http:HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  deleteCourse(course:Course): Observable <Course> {
    const url = `${this.apiUrl}/${course.id}`;

    return this.http.delete<Course>(url);
  }

  /*updateCourse(course:Course): Observable<Course> {
    const url = `${this.apiUrl}/${course.id}`;

    return this.http.put<Task> (url, course, httpOptions);
  }

  addCourse(course:Course): Observable<Course> {
   return this.http.post<Course>(this.apiUrl, course,httpOptions)
  }*/
}
