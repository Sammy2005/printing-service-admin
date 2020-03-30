import { TestBed, inject } from '@angular/core/testing';

import { BaseHttpServiceService } from './base-http-service.service';

describe('BaseHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseHttpServiceService]
    });
  });

  it('should be created', inject([BaseHttpServiceService], (service: BaseHttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
