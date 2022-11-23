import { TestBed } from '@angular/core/testing';

import { InmuebleService } from './inmuebles.service';

describe('InmueblesService', () => {
  let service: InmuebleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmuebleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
