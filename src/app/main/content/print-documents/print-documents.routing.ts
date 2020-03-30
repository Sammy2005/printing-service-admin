import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PrintDocumentsComponent} from './print-documents.component';
import {PrintDocumentsResolver} from './print-documents.resolver';
import {PrintersResolver} from '../printers/printers.resolver';
import {PrintDocumentConfigurationsComponent} from './print-document-configurations/print-document-configurations.component';
import {PrintDocumentResolver} from "./print-document.resolver";

const routes: Routes = [
    {
        path: '',
        component: PrintDocumentsComponent,
        resolve: {
            printDocuments: PrintDocumentsResolver,
            printers: PrintersResolver
        }
    }, {
        path: ':id/print-configurations',
        component: PrintDocumentConfigurationsComponent,
        resolve: {
            printDocument: PrintDocumentResolver,
            printers: PrintersResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class PrintDocumentsRoutingModule {
}
