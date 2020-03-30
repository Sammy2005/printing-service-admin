import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {path: '*', loadChildren: './main/main.module#FuseMainModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
