import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTable } from './courses-table';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from '../courses-routing-module';
import { SharedModule } from '../../../../shared/shared-module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('CoursesTable Component', () => {
  let component: CoursesTable;
  let fixture: ComponentFixture<CoursesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesTable],
      imports: [CommonModule, CoursesRoutingModule, SharedModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              params: {
                get: () => null,
              },
            },
          },
        },
        provideHttpClient(withFetch()),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have table', () => {
    const table = fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();
  });

  it('should have more than 0 rows', () => {
    const rows = fixture.nativeElement.querySelectorAll('td');
    expect(rows.length).toBeGreaterThan(0);
  });
});
