import { TestBed, inject } from '@angular/core/testing';

import { PrintDocumentConfigurationsService } from './print-document-configurations.service';

describe('PrintDocumentConfigurationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrintDocumentConfigurationsService]
    });
  });

  it('should be created', inject([PrintDocumentConfigurationsService], (service: PrintDocumentConfigurationsService) => {
    expect(service).toBeTruthy();
  }));
});
