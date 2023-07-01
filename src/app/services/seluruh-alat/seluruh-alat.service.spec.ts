import { TestBed } from '@angular/core/testing';

import { SeluruhAlatService } from './seluruh-alat.service';

describe('SeluruhAlatService', () => {
  let service: SeluruhAlatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeluruhAlatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
