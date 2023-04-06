import { TestBed } from '@angular/core/testing';

import { DsabankService } from './dsabank.service';

describe('DsabankService', () => {
  let service: DsabankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DsabankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
