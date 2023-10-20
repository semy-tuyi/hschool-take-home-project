import { TestBed } from '@angular/core/testing';

import { CourseEffectsService } from './course-effects.service';

describe('CourseEffectsService', () => {
  let service: CourseEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
