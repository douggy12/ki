import { TestBed, inject } from '@angular/core/testing';

import { InMemoryTeamService } from './in-memory-team.service';

describe('InMemoryTeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryTeamService]
    });
  });

  it('should be created', inject([InMemoryTeamService], (service: InMemoryTeamService) => {
    expect(service).toBeTruthy();
  }));
});
