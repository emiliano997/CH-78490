import { TestBed } from '@angular/core/testing';

import { Students } from './students';

describe('Students', () => {
  let service: Students;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Students);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
