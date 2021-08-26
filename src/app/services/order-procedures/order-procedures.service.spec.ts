import { TestBed } from '@angular/core/testing';

import { OrderProceduresService } from './order-procedures.service';

describe('OrderProceduresService', () => {
  let service: OrderProceduresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderProceduresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
