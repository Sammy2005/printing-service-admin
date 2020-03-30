import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {fuseAnimations} from '@fuse/animations';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Printer} from '../printers/printer';
import {PrintingJobLogsDialogComponent} from './printing-job-logs-dialog/printing-job-logs-dialog.component';
import {PrintingJobsService} from './printing-jobs.service';
import {PdfPreviewDialogComponent} from '../../../core/components/pdf-preview-dialog/pdf-preview-dialog.component';
import {PrintFilterDialogComponent} from '../../../core/components/print-filter-dialog/print-filter-dialog.component';
import {PrintDocument} from '../print-documents/print-document';
import {PrintFilter} from "../../../core/components/print-filter-dialog/print-filter";

@Component({
    selector: 'app-printing-jobs',
    templateUrl: './printing-jobs.component.html',
    styleUrls: ['./printing-jobs.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class PrintingJobsComponent implements OnInit {
    public selected: any[] = [];
    public rows: any[] = [];
    public filteredRows: any[] = [];
    loadingIndicator = false;
    reorderable = true;

    searchQuery: string = '';

    printingJobLogsDialogRef: any;

    printDocumentPreviewDialogRef: any;

    printFilterDialogRef: any;

    private printers: Printer[] = [];
    private printDocuments: PrintDocument[] = [];

    public printFilter: PrintFilter = null;


    constructor(private route: ActivatedRoute, public dialog: MatDialog, private snackbar: MatSnackBar,
                private printingJobsService: PrintingJobsService) {
        this.rows = this.route.snapshot.data.printingJobs;

        this.printers = this.route.snapshot.data.printers;
        this.printDocuments = this.route.snapshot.data.printDocuments;

        this.filteredRows = this.rows;
    }

    ngOnInit() {
    }

    public showPrintLog(row) {
        this.printingJobLogsDialogRef = this.dialog.open(PrintingJobLogsDialogComponent, {
            panelClass: 'printing-job-logs-dialog',
            height: '420px',
            width: '600px',
            data: {
                printingJob: row
            }
        });
    }

    public startPrintingJob(row, rowIndex) {
        row.statusUpdating = true;
        this.printingJobsService
            .startPrintJob(row)
            .subscribe(result => {
                row = result;
                row.statusUpdating = false;
                this.filteredRows.splice(rowIndex, 1, row);
                this.filteredRows = [...this.filteredRows];
                this.snackbar.open('Job sent to printer.', '',
                    {
                        duration: 3000
                    });
            }, error => {
                console.log(error);
                row.statusUpdating = false;
                const snackBarRef = this.snackbar.open('An error occurred. Job could not be sent to printer.', 'Retry',
                    {
                        duration: 3000
                    });
                snackBarRef.onAction().subscribe(() => {
                    this.startPrintingJob(row, rowIndex);
                });
            });
    }

    public deletePrintingJob(row, rowIndex) {
        this.loadingIndicator = true;
        this.printingJobsService
            .destroy(row.id)
            .subscribe(result => {
                this.loadingIndicator = false;
                this.filteredRows.splice(rowIndex, 1);
                this.filteredRows = [...this.filteredRows];
                console.log(result);
            }, error => {
                this.loadingIndicator = false;
                console.log(error);
            });
    }

    public previewPrintDocument(row) {
        this.printDocumentPreviewDialogRef = this.dialog.open(PdfPreviewDialogComponent, {
            panelClass: 'pdf-preview-dialog',
            height: '95%',
            width: '80%',
            data: {
                documentPath: row.documentPath,
                type: 'job',
                id: row.id
            }
        });
    }

    public onSearchQueryChanged(event) {
        if (event) {
            this.loadingIndicator = true;
            this.printingJobsService
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

    public filterPrintingJobs() {
        this.printFilterDialogRef = this.dialog.open(PrintFilterDialogComponent, {
            panelClass: 'print-filter-dialog',
            height: '420px',
            width: '600px',
            data: {
                type: 'job',
                printers: this.printers,
                printDocuments: this.printDocuments,
                printFilter: this.printFilter
            }
        });

        this.printFilterDialogRef
            .beforeClose()
            .subscribe((response) => {
                    if (!response) {
                        return;
                    }
                    this.printFilter = response.printFilter;
                    this.filteredRows = response.printingJobs;
                }
            );
    }

    public downloadPrintDocument(row) {
        this.printingJobsService
            .downloadDocument(row.id)
            .subscribe(response => {
                const blob = new Blob(response, {type: 'application/pdf'});
                const url = window.URL.createObjectURL(blob);
                window.open(url);
            }, error => {
                console.log(error);
            });
    }

}
