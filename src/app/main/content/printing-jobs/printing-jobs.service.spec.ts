import { TestBed, inject } from '@angular/core/testing';

import { PrintingJobsService } from './printing-jobs.service';

describe('PrintingJobsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrintingJobsService]
    });
  });

  it('should be created', inject([PrintingJobsService], (service: PrintingJobsService) => {
    expect(service).toBeTruthy();
  }));
});
