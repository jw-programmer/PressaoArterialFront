import { TestBed } from '@angular/core/testing';

import { PressaoArterialService } from './pressao-arterial.service';

describe('PressaoArterialService', () => {
  let service: PressaoArterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PressaoArterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
