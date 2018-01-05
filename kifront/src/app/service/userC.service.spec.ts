/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserCService } from './userC.service';

describe('Service: UserC', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCService]
    });
  });

  it('should ...', inject([UserCService], (service: UserCService) => {
    expect(service).toBeTruthy();
  }));
});