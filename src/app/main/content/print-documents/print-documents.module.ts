import {NgModule} from '@angular/core';
import {PrintDocumentsRoutingModule} from './print-documents.routing';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {PrintDocumentsComponent} from './print-documents.component';
import {PrintDocumentFormComponent} from './print-document-form/print-document-form.component';
import {PrintDocumentsResolver} from './print-documents.resolver';
import {PrintDocumentConfigurationsComponent} from './print-document-configurations/print-document-configurations.component';
import {PrintConfigurationFormComponent} from './print-document-configurations/print-configuration-form/print-configuration-form.component';
import {AppCoreModule} from '../../../core/core.module';


@NgModule({
    declarations: [
        PrintDocumentsComponent,
        PrintDocumentFormComponent,
        PrintDocumentConfigurationsComponent,
        PrintConfigurationFormComponent
    ],
    imports: [
        PrintDocumentsRoutingModule,
        FuseSharedModule,
        AppCoreModule
    ],
    providers: [
        PrintDocumentsResolver
    ],
    entryComponents: [
        PrintDocumentFormComponent,
        PrintConfigurationFormComponent
    ]
})
export class PrintDocumentsModule {
}
