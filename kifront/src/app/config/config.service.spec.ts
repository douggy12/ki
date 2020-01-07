import { TestBed, inject } from '@angular/core/testing';
/* tslint:disable:no-unused-variable */


import { ConfigService } from './config.service';

describe('Service: Config', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigService]
    });
  });

  it('should ...', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));
});
