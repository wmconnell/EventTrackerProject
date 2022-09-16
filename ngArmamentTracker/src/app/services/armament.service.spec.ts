import { TestBed } from '@angular/core/testing';

import { ArmamentService } from './armament.service';

describe('ArmamentService', () => {
  let service: ArmamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
