import { TestBed } from '@angular/core/testing';

import { SubscriptionCancelService } from './subscription-cancel.service';

describe('SubscriptionCancelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscriptionCancelService = TestBed.get(SubscriptionCancelService);
    expect(service).toBeTruthy();
  });
});
