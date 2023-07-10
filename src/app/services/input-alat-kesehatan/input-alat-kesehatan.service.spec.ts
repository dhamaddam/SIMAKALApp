import { TestBed } from '@angular/core/testing';

import { InputAlatKesehatanService } from './input-alat-kesehatan.service';

describe('InputAlatKesehatanService', () => {
  let service: InputAlatKesehatanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputAlatKesehatanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
