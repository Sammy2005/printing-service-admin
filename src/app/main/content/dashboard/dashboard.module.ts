import {NgModule} from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard.routing";
import {FuseSharedModule} from "../../../../@fuse/shared.module";


@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        DashboardRoutingModule,
        FuseSharedModule,
    ]
})
export class DashboardModule {
}
