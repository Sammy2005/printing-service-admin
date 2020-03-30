import {NgModule} from '@angular/core';
import {PrintRequestsComponent} from './print-requests.component';
import {PrintRequestsRoutingModule} from './print-requests.routing';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {PrintRequestsResolver} from './print-requests.resolver';
import {AppCoreModule} from '../../../core/core.module';


@NgModule({
    declarations: [
        PrintRequestsComponent,
    ],
    imports: [
        PrintRequestsRoutingModule,
        FuseSharedModule,
        AppCoreModule
    ],
    providers: [
        PrintRequestsResolver
    ]
})
export class PrintRequestsModule {
}
