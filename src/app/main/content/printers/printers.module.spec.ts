import { PrintersModule } from './printers.module';

describe('PrintersModule', () => {
  let printersModule: PrintersModule;

  beforeEach(() => {
    printersModule = new PrintersModule();
  });

  it('should create an instance', () => {
    expect(printersModule).toBeTruthy();
  });
});
