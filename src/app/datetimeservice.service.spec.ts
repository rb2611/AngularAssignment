import { TestBed } from '@angular/core/testing';

import { DatetimeserviceService } from './datetimeservice.service';

describe('DatetimeserviceService', () => {
  let service: DatetimeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatetimeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
