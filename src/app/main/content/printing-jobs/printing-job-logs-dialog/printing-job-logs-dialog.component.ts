import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {fuseAnimations} from '@fuse/animations';

@Component({
    selector: 'app-printing-job-logs-dialog',
    templateUrl: './printing-job-logs-dialog.component.html',
    styleUrls: ['./printing-job-logs-dialog.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class PrintingJobLogsDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<PrintingJobLogsDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private data: any) {

    }

    ngOnInit() {
    }

}
