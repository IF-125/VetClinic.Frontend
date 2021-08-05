import { TestBed } from '@angular/core/testing';

import { PetsForTreatmentService } from './pets-for-treatment.service';

describe('PetsForTreatmentService', () => {
  let service: PetsForTreatmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsForTreatmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
