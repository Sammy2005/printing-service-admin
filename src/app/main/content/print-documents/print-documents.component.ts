import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {fuseAnimations} from '@fuse/animations';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {PrintDocument} from './print-document';
import {PrintDocumentFormComponent} from './print-document-form/print-document-form.component';
import {PrintDocumentsService} from './print-documents.service';
import {Printer} from "../printers/printer";

@Component({
    selector: 'app-print-documents',
    templateUrl: './print-documents.component.html',
    styleUrls: ['./print-documents.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class PrintDocumentsComponent implements OnInit {
    public selected: any[] = [];

    rows: any[] = [];
    loadingIndicator = false;
    reorderable = true;

    printDocumentDialogRef: any;

    printers: Printer[] = [];

    constructor(public dialog: MatDialog, private route: ActivatedRoute, private snackbar: MatSnackBar, private printDocumentsService: PrintDocumentsService) {
        this.rows = this.route.snapshot.data.printDocuments;
        this.printers = this.route.snapshot.data.printers;

    }

    ngOnInit() {
    }

    addPrintDocument() {
        this.printDocumentDialogRef = this.dialog.open(PrintDocumentFormComponent, {
            panelClass: 'print-document-form-dialog',
            height: '440px',
            width: '600px',
            data: {
                printDocument: new PrintDocument(),
                printers: this.printers
            }
        });

        this.printDocumentDialogRef.beforeClose()
            .subscribe((response: FormGroup) => {
                if (!response) {
                    return;
                }
                const printDocument: PrintDocument = response.getRawValue();
                this.loadingIndicator = true;
                this.printDocumentsService
                    .create(printDocument)
                    .subscribe(createdPrintDocument => {
                        this.loadingIndicator = false;
                        this.snackbar
                            .open('Document created', '', {
                                duration: 2000,
                                horizontalPosition: 'left',
                                verticalPosition: 'bottom'
                            });
                        this.rows = [...this.rows, createdPrintDocument];
                    }, error => {
                        this.loadingIndicator = false;
                        this.snackbar
                            .open(error.message, '', {
                                duration: 2000,
                                horizontalPosition: 'left',
                                verticalPosition: 'bottom'
                            });
                    });

            });
    }

    editPrintDocument(row: PrintDocument) {
        this.printDocumentDialogRef = this.dialog.open(PrintDocumentFormComponent, {
            panelClass: 'print-document-form-dialog',
            height: '440px',
            width: '600px',
            data: {
                printDocument: row,
                printers: this.printers
            }
        });

        this.printDocumentDialogRef.beforeClose()
            .subscribe((response: FormGroup) => {
                if (!response) {
                    return;
                }
                const printDocument: PrintDocument = response.getRawValue();
                this.loadingIndicator = true;

                this.printDocumentsService
                    .update(printDocument, printDocument.id)
                    .subscribe(updatedPrintDocument => {
                        this.loadingIndicator = false;
                        this.snackbar
                            .open('Document updated', '', {
                                duration: 2000,
                                horizontalPosition: 'left',
                                verticalPosition: 'bottom'
                            });
                        const updatedIndex = this.rows.findIndex(value => value.id === updatedPrintDocument.id)
                        if (updatedIndex >= 0) {
                            this.rows[updatedIndex] = updatedPrintDocument;
                        }
                    }, error => {
                        this.loadingIndicator = false;
                        this.snackbar
                            .open(error.message, '', {
                                duration: 2000,
                                horizontalPosition: 'left',
                                verticalPosition: 'bottom'
                            });
                    });
            });

    }
}
