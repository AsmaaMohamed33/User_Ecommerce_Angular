import { TestBed } from '@angular/core/testing';

import { APIproductService } from './apiproduct.service';

describe('APIproductService', () => {
  let service: APIproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
