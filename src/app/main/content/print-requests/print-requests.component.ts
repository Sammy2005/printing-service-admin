import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {PdfPreviewDialogComponent} from '../../../core/components/pdf-preview-dialog/pdf-preview-dialog.component';
import {PrintRequestsService} from './print-requests.service';
import {PrintFilterDialogComponent} from '../../../core/components/print-filter-dialog/print-filter-dialog.component';
import {Printer} from '../printers/printer';
import {PrintDocument} from '../print-documents/print-document';

@Component({
    selector: 'app-print-requests',
    templateUrl: './print-requests.component.html',
    styleUrls: ['./print-requests.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class PrintRequestsComponent implements OnInit {
    public selected: any[] = [];

    rows: any[] = [];
    filteredRows: any[] = [];
    loadingIndicator = false;
    reorderable = true;

    printDocumentPreviewDialogRef: any;
    printFilterDialogRef: any;

    public searchQuery: string = '';

    private printers: Printer[] = [];
    private printDocuments: PrintDocument[] = [];

    constructor(private route: ActivatedRoute, public dialog: MatDialog,
                private snackbar: MatSnackBar, private printRequestsService: PrintRequestsService) {
        this.rows = this.route.snapshot.data.printRequests;
        this.printers = this.route.snapshot.data.printers;
        this.printDocuments = this.route.snapshot.data.printDocuments;
        this.filteredRows = this.rows;
    }

    ngOnInit() {

    }

    public previewPrintDocument(row) {
        this.printDocumentPreviewDialogRef = this.dialog.open(PdfPreviewDialogComponent, {
            panelClass: 'pdf-preview-dialog',
            height: '95%',
            width: '80%',
            data: {
                documentPath: row.documentPath,
                type: 'request',
                id: row.id
            }
        });
    }

    public onSearchQueryChanged(event) {
        if (event) {
            this.loadingIndicator = true;
            this.printRequestsService
                .search(event)
                .subscribe(response => {
                    this.filteredRows = response;
                    this.loadingIndicator = false;
                }, error2 => {
                    this.loadingIndicator = false;
                });
        } else {
            this.filteredRows = this.rows;
        }
    }

    public filterPrintRequests() {
        this.printFilterDialogRef = this.dialog.open(PrintFilterDialogComponent, {
            panelClass: 'print-filter-dialog',
            height: '420px',
            width: '600px',
            data: {
                type: 'request',
                printers: this.printers,
                printDocuments: this.printDocuments
            }
        });
    }

    public deselectAll() {
        this.selected = [];
    }

    public downloadPrintDocument(row) {
        this.printRequestsService
            .downloadDocument(row.id)
            .subscribe(response => {
                const blob = new Blob(response, {type: 'application/pdf'});
                const url = window.URL.createObjectURL(blob);
                window.open(url);
            }, error => {

            });
    }

    public selectAll() {
        this.selected = this.filteredRows;
    }

    public startPrintingJobs(row) {
        row.statusUpdating = true;
        this.printRequestsService
            .startPrintingJobs(row.id)
            .subscribe(response => {
                this.snackbar.open(`${response.length} Print jobs started.`, '', {
                    duration: 2000
                });
                row.statusUpdating = false;
            }, error => {
                row.statusUpdating = false;
                const snackbarRef = this.snackbar.open(`An error occurred`, 'Retry', {
                    duration: 2000
                });
                snackbarRef.onAction()
                    .subscribe(e => {
                        this.startPrintingJobs(row);
                    });
            });
    }

}
