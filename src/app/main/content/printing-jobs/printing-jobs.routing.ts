import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PrintingJobsComponent} from './printing-jobs.component';
import {PrintingJobsResolver} from './printing-jobs.resolver';
import {PrintDocumentsResolver} from '../print-documents/print-documents.resolver';
import {PrintersResolver} from '../printers/printers.resolver';

const routes: Routes = [
    {
        path: '', component: PrintingJobsComponent, resolve: {
        printingJobs: PrintingJobsResolver,
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
export class PrintingJobsRoutingModule {
}
