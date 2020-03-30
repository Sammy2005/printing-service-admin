import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    {path: 'print-requests', loadChildren: './print-requests/print-requests.module#PrintRequestsModule'},
    {path: 'print-documents', loadChildren: './print-documents/print-documents.module#PrintDocumentsModule'},
    {path: 'printing-jobs', loadChildren: './printing-jobs/printing-jobs.module#PrintingJobsModule'},
    {path: 'printers', loadChildren: './printers/printers.module#PrintersModule'},
    {path: 'setups', loadChildren: './setups/setups.module#SetupsModule'},
    {path: 'notification-jobs', loadChildren: './notification-jobs/notification-jobs.module#NotificationJobsModule'},
    // {path: 'notification-jobs', loadChildren: './printers/printers.module#PrintersModule'},
    {path: '', redirectTo: 'setups', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class ContentRoutingModule {
}
