import { Injectable } from '@angular/core';
import { Course } from './model/Course';
import { mockCourses } from './data/mock';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: Course[] = mockCourses;
  private courseSubject = new BehaviorSubject<Course[]>([]);
  courses$ = this.courseSubject.asObservable();

  constructor() {
    this.courseSubject.next(this.courses);
  }

  getCourses() {
    this.courseSubject.next(this.courses);
  }

  getCourse(id: number) {
    return of(this.courses.find((course) => course.id === id));
  }

  addCourse(course: Course) {
    const newId = this.courses[this.courses.length - 1].id + 1;
    course.id = newId;
    this.courses.push(course);
    this.courseSubject.next([...this.courses]);
  }

  updateCourse(course: Course) {
    const updatedCourses = this.courses.map((c) => (c.id === course.id ? course : c));
    this.courseSubject.next(updatedCourses);
    this.courses = updatedCourses;
  }

  deleteCourse(id: number) {
    const updatedCourses = this.courses.filter((c) => c.id !== id);
    this.courseSubject.next(updatedCourses);
    this.courses = updatedCourses;
  }
}
