import { TestBed, inject } from '@angular/core/testing';

import { PrintDocumentsService } from './print-documents.service';

describe('PrintDocumentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrintDocumentsService]
    });
  });

  it('should be created', inject([PrintDocumentsService], (service: PrintDocumentsService) => {
    expect(service).toBeTruthy();
  }));
});
