import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotificationsComponent} from './notifications.component';
import {EmailConfigurationComponent} from './email-configuration/email-configuration.component';
import {AfricasTalkingComponent} from './sms-configuration/africas-talking/africas-talking.component';


const routes: Routes = [
    {path: '', component: NotificationsComponent},
    {path: 'email', component: EmailConfigurationComponent, outlet: 'notificationsSetup'},
    {path: 'sms/africas-talking', component: AfricasTalkingComponent, outlet: 'notificationsSetup'},
    {path: '*', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class NotificationsRoutingModule {
}
