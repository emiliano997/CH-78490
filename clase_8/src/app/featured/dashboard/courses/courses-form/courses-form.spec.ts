import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesForm } from './courses-form';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from '../courses-routing-module';
import { SharedModule } from '../../../../shared/shared-module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('CoursesForm', () => {
  let component: CoursesForm;
  let fixture: ComponentFixture<CoursesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesForm],
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

    fixture = TestBed.createComponent(CoursesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
