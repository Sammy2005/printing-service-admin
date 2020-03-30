import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {fuseAnimations} from "@fuse/animations";
import {environment} from "../../../../environments/environment";

@Component({
    selector: 'app-pdf-preview-dialog',
    templateUrl: './pdf-preview-dialog.component.html',
    styleUrls: ['./pdf-preview-dialog.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class PdfPreviewDialogComponent implements OnInit {
    public pdfSrc: any;

    public documentLink: string;
    public type: string;
    public id: number;

    public documentType: string;

    constructor(public dialogRef: MatDialogRef<PdfPreviewDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private data: any) {
        this.pdfSrc = 'http://www.pdf995.com/samples/pdf.pdf';
        this.documentLink = data.documentPath;
        this.type = data.type;
        this.id = data.id;

        if (this.type === 'job') {
            this.pdfSrc = `${environment.base_url}/printing-jobs/${this.id}/document`;
        } else {
            this.pdfSrc = `${environment.base_url}/print-requests/${this.id}/document`;
        }
    }

    ngOnInit() {
    }

    print() {

    }

}
