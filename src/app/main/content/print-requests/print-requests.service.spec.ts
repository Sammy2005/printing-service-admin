import { TestBed, inject } from '@angular/core/testing';

import { PrintRequestsService } from './print-requests.service';

describe('PrintRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrintRequestsService]
    });
  });

  it('should be created', inject([PrintRequestsService], (service: PrintRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
