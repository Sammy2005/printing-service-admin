import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {MatDialog, MatSnackBar} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {PrinterFormComponent} from "./printer-form/printer-form.component";
import {Printer} from "./printer";
import {PrintersService} from "./printers.service";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'app-printers',
    templateUrl: './printers.component.html',
    styleUrls: ['./printers.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class PrintersComponent implements OnInit {
    public selected: any[] = [];

    rows: any[] = [];
    loadingIndicator = false;
    reorderable = true;

    printerDialogRef: any;

    constructor(public dialog: MatDialog, private route: ActivatedRoute,
                private snackbar: MatSnackBar, private printersService: PrintersService) {
        this.rows = this.route.snapshot.data.printers;
    }

    ngOnInit() {
    }

    addPrinter() {
        this.printerDialogRef = this.dialog.open(PrinterFormComponent, {
            panelClass: 'printer-form-dialog',
            height: '450px',
            width: '600px',
            data: {
                printer: new Printer()
            }
        });

        this.printerDialogRef
            .beforeClose()
            .subscribe((response: FormGroup) => {
                if (!response) {
                    return;
                }
                const printer: Printer = response.getRawValue();
                this.loadingIndicator = true;
                this.printersService
                    .create(printer)
                    .subscribe(createdPrinter => {
                        this.loadingIndicator = false;
                        this.rows = [...this.rows, createdPrinter];
                        this.snackbar.open('Printer created.', '', {
                            duration: 2000,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                        });
                    }, error => {
                        this.loadingIndicator = false;
                        this.snackbar.open(error.message, 'Retry', {
                            duration: 2000,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                        });
                    });

            });

    }

    editPrinter(row: Printer) {
        this.printerDialogRef = this.dialog.open(PrinterFormComponent, {
            panelClass: 'printer-form-dialog',
            height: '450px',
            width: '600px',
            data: {
                printer: row
            }
        });

        this.printerDialogRef
            .beforeClose()
            .subscribe((response: FormGroup) => {
                if (!response) {
                    return;
                }
                const printer: Printer = response.getRawValue();
                this.loadingIndicator = true;
                this.printersService
                    .update(printer, printer.id)
                    .subscribe(updatedPrinter => {
                        this.loadingIndicator = false;
                        const updatedIndex = this.rows.findIndex(value => value.id === updatedPrinter.id);
                        if (updatedIndex >= 0) {
                            this.rows[updatedIndex] = updatedPrinter;
                        }
                        this.snackbar.open('Printer updated.', '', {
                            duration: 2000,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                        });
                    }, error => {
                        this.loadingIndicator = false;
                        this.snackbar.open(error.message, 'Retry', {
                            duration: 2000,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                        });
                    });

            });
    }
}
