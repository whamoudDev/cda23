import { TestBed } from '@angular/core/testing';

import { PaysService } from './pays.service';

describe('ServicePaysService', () => {
  let service: PaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
