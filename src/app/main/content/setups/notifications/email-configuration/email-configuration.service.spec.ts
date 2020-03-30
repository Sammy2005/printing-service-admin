import { TestBed, inject } from '@angular/core/testing';

import { EmailConfigurationService } from './email-configuration.service';

describe('EmailConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailConfigurationService]
    });
  });

  it('should be created', inject([EmailConfigurationService], (service: EmailConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
