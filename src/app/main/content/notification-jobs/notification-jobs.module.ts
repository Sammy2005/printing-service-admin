import {NgModule} from '@angular/core';
import {FuseSharedModule} from '@fuse/shared.module';
import {SmsComponent} from './sms/sms.component';
import {EmailsComponent} from './emails/emails.component';
import {AppCoreModule} from '../../../core/core.module';
import {NotificationJobsRoutingModule} from './notification-jobs.routing';
import { NotificationJobsListComponent } from './notification-jobs-list/notification-jobs-list.component';

@NgModule({
    imports: [
        FuseSharedModule,
        NotificationJobsRoutingModule,
        AppCoreModule
    ],
    declarations: [SmsComponent, EmailsComponent, NotificationJobsListComponent],
    entryComponents: []
})
export class NotificationJobsModule {
}
