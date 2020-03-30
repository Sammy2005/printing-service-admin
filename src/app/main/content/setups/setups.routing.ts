import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsModule'},
    {path: '', redirectTo: 'notifications', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class SetupsRoutingModule {
}
