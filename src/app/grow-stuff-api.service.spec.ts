import { TestBed } from '@angular/core/testing';

import { GrowStuffApiService } from './grow-stuff-api.service';

describe('GrowStuffApiService', () => {
  let service: GrowStuffApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrowStuffApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
