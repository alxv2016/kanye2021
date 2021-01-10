import {TestBed} from '@angular/core/testing';

import {KanyeService} from './kanye.service';

describe('KanyeService', () => {
  let service: KanyeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanyeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
