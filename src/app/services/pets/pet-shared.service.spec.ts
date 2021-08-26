import { TestBed } from '@angular/core/testing';

import { PetSharedService } from './pet-shared.service';

describe('PetSharedServiceService', () => {
  let service: PetSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
