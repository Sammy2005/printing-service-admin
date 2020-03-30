import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SmsResolver} from './sms/sms.resolver';
import {SmsComponent} from './sms/sms.component';
import {EmailsComponent} from './emails/emails.component';
import {EmailsResolver} from './emails/emails.resolver';

const routes: Routes = [
    {path: 'sms', component: SmsComponent, resolve: {sms: SmsResolver}},
    {path: 'emails', component: EmailsComponent, resolve: {emails: EmailsResolver}},
    {path: '', redirectTo: 'sms', pathMatch: 'full'},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class NotificationJobsRoutingModule {
}
