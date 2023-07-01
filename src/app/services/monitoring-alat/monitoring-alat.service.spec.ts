import { TestBed } from '@angular/core/testing';

import { MonitoringAlatService } from './monitoring-alat.service';

describe('MonitoringAlatService', () => {
  let service: MonitoringAlatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringAlatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
