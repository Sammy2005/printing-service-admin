import { TestBed, inject } from '@angular/core/testing';

import { SmsConfigurationService } from './sms-configuration.service';

describe('SmsConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmsConfigurationService]
    });
  });

  it('should be created', inject([SmsConfigurationService], (service: SmsConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
