import { TestBed } from '@angular/core/testing';

import { DemoDataService } from './demo-data.service';

describe('DemoDataService', () => {
  let service: DemoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
