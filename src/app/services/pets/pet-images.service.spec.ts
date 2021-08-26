import { TestBed } from '@angular/core/testing';

import { PetImagesService } from './pet-images.service';

describe('PetImagesService', () => {
  let service: PetImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
