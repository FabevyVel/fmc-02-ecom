import { TestBed } from '@angular/core/testing';

import { CatProviderService } from './cat-provider.service';

describe('CatProviderService', () => {
  let service: CatProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
