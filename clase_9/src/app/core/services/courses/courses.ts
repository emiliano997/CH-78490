import { Injectable } from '@angular/core';
import { Course } from './model/Course';
import { mockCourses } from './data/mock';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: Course[] = [];
  private courseSubject = new BehaviorSubject<Course[]>([]);
  courses$ = this.courseSubject.asObservable();

  private coursesUrl = `${API_URL}/courses`;

  constructor(private http: HttpClient) {
    this.getCourses();
  }

  getCoursesForEffect() {
    return this.http.get<Course[]>(this.coursesUrl);
  }

  getCourses() {
    this.http.get<Course[]>(this.coursesUrl).subscribe((courses) => {
      this.courses = courses;
      this.courseSubject.next(courses);
    });
  }

  getCourse(id: number) {
    return this.http.get<Course>(`${this.coursesUrl}/${id}`);
  }

  addCourse(course: Course) {
    const newId = String(Number(this.courses[this.courses.length - 1].id) + 1);
    course.id = newId;
    this.http.post<Course>(this.coursesUrl, course).subscribe((course) => {
      this.courses.push(course);
      this.courseSubject.next([...this.courses]);
    });
  }

  updateCourse(course: Course) {
    const updatedCourses = this.courses.map((c) => (c.id === course.id ? course : c));
    this.http.put<Course>(`${this.coursesUrl}/${course.id}`, course).subscribe((course) => {
      this.courses = updatedCourses;
      this.courseSubject.next(updatedCourses);
    });
  }

  deleteCourse(id: number) {
    const updatedCourses = this.courses.filter((c) => c.id !== id);
    this.http.delete<Course>(`${this.coursesUrl}/${id}`).subscribe(() => {
      this.courses = updatedCourses;
      this.courseSubject.next(updatedCourses);
    });
  }
}
