import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PrintRequestsComponent} from './print-requests.component';
import {PrintRequestsResolver} from './print-requests.resolver';
import {PrintersResolver} from '../printers/printers.resolver';
import {PrintDocumentsResolver} from '../print-documents/print-documents.resolver';

const routes: Routes = [
    {
        path: '', component: PrintRequestsComponent, resolve: {
        printRequests: PrintRequestsResolver,
        printers: PrintersResolver,
        printDocuments: PrintDocumentsResolver
    }
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class PrintRequestsRoutingModule {
}
