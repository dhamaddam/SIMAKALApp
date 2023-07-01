import { TestBed } from '@angular/core/testing';

import { JadwalKalibrasiService } from './jadwal-kalibrasi.service';

describe('JadwalKalibrasiService', () => {
  let service: JadwalKalibrasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JadwalKalibrasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
