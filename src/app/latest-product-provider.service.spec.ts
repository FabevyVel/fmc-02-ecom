import { TestBed } from '@angular/core/testing';

import { LatestProductProviderService } from './latest-product-provider.service';

describe('LatestProductProviderService', () => {
  let service: LatestProductProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestProductProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
