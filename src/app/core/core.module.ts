import {NgModule} from '@angular/core';

import {FuseSharedModule} from '@fuse/shared.module';
import {PdfPreviewDialogComponent} from './components/pdf-preview-dialog/pdf-preview-dialog.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {PrintFilterDialogComponent} from './components/print-filter-dialog/print-filter-dialog.component';
import {PrinterTrayPipe} from './pipes/printer-tray.pipe';

@NgModule({
    declarations: [
        PdfPreviewDialogComponent,
        PrintFilterDialogComponent,
        PrinterTrayPipe
    ],
    imports: [
        FuseSharedModule,
        PdfViewerModule
    ],
    exports: [
        PrinterTrayPipe
    ],
    entryComponents: [
        PdfPreviewDialogComponent,
        PrintFilterDialogComponent
    ]
})
export class AppCoreModule {
}
