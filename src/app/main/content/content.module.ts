import {NgModule} from '@angular/core';

import {FuseSharedModule} from '@fuse/shared.module';

import {FuseContentComponent} from 'app/main/content/content.component';
import {ContentRoutingModule} from './content.routing';

@NgModule({
    declarations: [
        FuseContentComponent
    ],
    imports: [
        ContentRoutingModule,
        FuseSharedModule,
    ],
    exports: [
        FuseContentComponent
    ]
})
export class FuseContentModule {
}
