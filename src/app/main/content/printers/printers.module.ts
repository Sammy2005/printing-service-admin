import {NgModule} from '@angular/core';
import {PrintersComponent} from './printers.component';
import {PrintersRoutingModule} from './printers.routing';
import {FuseSharedModule} from '@fuse/shared.module';
import {PrinterFormComponent} from './printer-form/printer-form.component';
import {AppCoreModule} from "../../../core/core.module";

@NgModule({
    imports: [
        FuseSharedModule,
        PrintersRoutingModule,
        AppCoreModule
    ],
    declarations: [PrintersComponent, PrinterFormComponent],
/*    providers: [PrintersResolver],*/
    entryComponents: [PrinterFormComponent]
})
export class PrintersModule {
}
