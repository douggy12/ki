import { TestBed, inject } from '@angular/core/testing';

import { FicheResolveService } from './fiche-resolve.service';

describe('FicheResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FicheResolveService]
    });
  });

  it('should be created', inject([FicheResolveService], (service: FicheResolveService) => {
    expect(service).toBeTruthy();
  }));
});
