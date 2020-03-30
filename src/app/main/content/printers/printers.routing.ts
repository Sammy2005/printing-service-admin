import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PrintersComponent} from './printers.component';
import {PrintersResolver} from './printers.resolver';

const routes: Routes = [
    {path: '', component: PrintersComponent, resolve: {printers: PrintersResolver}},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class PrintersRoutingModule {
}
