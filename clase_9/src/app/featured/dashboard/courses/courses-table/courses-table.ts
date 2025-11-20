import { Component, ViewChild } from '@angular/core';
import { Course, courseColumns } from '../../../../core/services/courses/model/Course';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CoursesService } from '../../../../core/services/courses/courses';
import { Store } from '@ngrx/store';
import { RootState } from '../../../../core/store';
import { Observable } from 'rxjs';
import { selectCourses, selectError, selectIsLoading } from '../store/courses.selectors';
import { CoursesActions } from '../store/courses.actions';

@Component({
  selector: 'app-courses-table',
  standalone: false,
  templateUrl: './courses-table.html',
  styleUrl: './courses-table.css',
})
export class CoursesTable {
  displayedColumns: string[] = courseColumns;
  dataSource = new MatTableDataSource<Course>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private courseService: CoursesService, private store: Store<RootState>) {
    this.courses$ = this.store.select(selectCourses);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit() {
    this.store.dispatch(CoursesActions.loadCourses());

    this.courses$.subscribe({
      next: (courses) => {
        this.dataSource.data = courses;
      },
      error: (error) => {
        console.error('Error loading courses:', error);
      },
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onDeleteCourse(id: number) {
    this.courseService.deleteCourse(id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
