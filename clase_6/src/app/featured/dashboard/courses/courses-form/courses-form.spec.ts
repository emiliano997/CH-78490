import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesForm } from './courses-form';

describe('CoursesForm', () => {
  let component: CoursesForm;
  let fixture: ComponentFixture<CoursesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
