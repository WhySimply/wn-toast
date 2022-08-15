import { TestBed } from '@angular/core/testing';

import { WnToastService } from './wn-toast.service';

describe('WnToastService', () => {
  let service: WnToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WnToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
