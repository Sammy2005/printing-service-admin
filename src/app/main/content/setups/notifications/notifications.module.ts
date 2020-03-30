import {NgModule} from '@angular/core';
import {FuseSharedModule} from '@fuse/shared.module';
import {NotificationsRoutingModule} from './notifications.routing';
import {NotificationsComponent} from './notifications.component';
import {SmsConfigurationComponent} from './sms-configuration/sms-configuration.component';
import {EmailConfigurationComponent} from './email-configuration/email-configuration.component';
import {AfricasTalkingComponent} from './sms-configuration/africas-talking/africas-talking.component';
import {InfobipComponent} from './sms-configuration/infobip/infobip.component';

@NgModule({
    declarations: [
        AfricasTalkingComponent,
        EmailConfigurationComponent,
        NotificationsComponent,
        SmsConfigurationComponent,
        InfobipComponent
    ],
    imports: [
        NotificationsRoutingModule,
        FuseSharedModule
    ],
    exports: []
})
export class NotificationsModule {
}
