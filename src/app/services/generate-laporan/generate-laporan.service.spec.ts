import { TestBed } from '@angular/core/testing';

import { GenerateLaporanService } from './generate-laporan.service';

describe('GenerateLaporanService', () => {
  let service: GenerateLaporanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateLaporanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
