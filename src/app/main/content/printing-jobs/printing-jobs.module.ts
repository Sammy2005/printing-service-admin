import {NgModule} from '@angular/core';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {PrintingJobsComponent} from './printing-jobs.component';
import {PrintingJobsRoutingModule} from './printing-jobs.routing';
import {PrintingJobsResolver} from './printing-jobs.resolver';
import {PrintingJobLogsDialogComponent} from './printing-job-logs-dialog/printing-job-logs-dialog.component';
import {PrintingJobLogsComponent} from './printing-job-logs/printing-job-logs.component';
import {AppCoreModule} from '../../../core/core.module';


@NgModule({
    declarations: [
        PrintingJobsComponent,
        PrintingJobLogsDialogComponent,
        PrintingJobLogsComponent
    ],
    imports: [
        PrintingJobsRoutingModule,
        FuseSharedModule,
        AppCoreModule
    ],
    entryComponents: [
        PrintingJobLogsDialogComponent
    ],
    providers: [
        PrintingJobsResolver
    ]
})
export class PrintingJobsModule {
}
