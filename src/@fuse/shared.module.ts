import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';

import {FuseDirectivesModule} from '@fuse/directives/directives';
import {FusePipesModule} from '@fuse/pipes/pipes.module';

import {NgxDatatableModule} from '@swimlane/ngx-datatable';

import {
    MatBadgeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule, MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {FuseConfirmDialogModule} from "./components/confirm-dialog/confirm-dialog.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        FuseDirectivesModule,
        FusePipesModule,

        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule,
        MatOptionModule,
        MatSelectModule,
        MatSnackBarModule,
        MatChipsModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatBadgeModule,
        MatDividerModule,
        MatDialogModule,
        MatListModule,
        MatTabsModule,

        FuseConfirmDialogModule,

        NgxDatatableModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        FuseDirectivesModule,
        FusePipesModule,

        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule,
        MatOptionModule,
        MatSelectModule,
        MatSnackBarModule,
        MatChipsModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatMomentDateModule,
        MatBadgeModule,
        MatDividerModule,
        MatDialogModule,
        MatListModule,
        MatTabsModule,

        FuseConfirmDialogModule,

        NgxDatatableModule

    ]
})
export class FuseSharedModule {
}
