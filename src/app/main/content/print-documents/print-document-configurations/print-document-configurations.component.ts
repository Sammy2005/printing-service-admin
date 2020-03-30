import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from "@fuse/animations";
import {Printer} from "../../printers/printer";
import {MatDialog, MatSnackBar} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {PrintDocument} from "../print-document";
import {FormGroup} from "@angular/forms";
import {PrintDocumentConfiguration} from "./print-document-configuration";
import {PrintDocumentConfigurationsService} from "./print-document-configurations.service";
import {PrintConfigurationFormComponent} from "./print-configuration-form/print-configuration-form.component";

@Component({
    selector: 'app-print-document-configurations',
    templateUrl: './print-document-configurations.component.html',
    styleUrls: ['./print-document-configurations.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class PrintDocumentConfigurationsComponent implements OnInit {
    public selected: any[] = [];

    rows: any[] = [];
    loadingIndicator = false;
    reorderable = true;

    printDocumentConfigurationDialogRef: any;

    public printerTrays: any[] = [];
    public printers: Printer[] = [];

    public printDocument: PrintDocument;

    constructor(public dialog: MatDialog, private route: ActivatedRoute, private snackbar: MatSnackBar,
                private printDocumentConfigurationsService: PrintDocumentConfigurationsService) {
        this.printDocument = this.route.snapshot.data.printDocument;
        this.printers = this.route.snapshot.data.printers;

        this.rows = this.printDocument.printDocumentConfigurations;

        this.printerTrays
            .push({id: 0, name: 'Top'});
        this.printerTrays
            .push({id: 1, name: 'Middle'});
        this.printerTrays
            .push({id: 2, name: 'Bottom'});
        this.printerTrays
            .push({id: 3, name: 'Envelope'});
        this.printerTrays
            .push({id: 4, name: 'Manual'});
        this.printerTrays
            .push({id: 5, name: 'Large-capacity'});
        this.printerTrays
            .push({id: 6, name: 'Main'});
        this.printerTrays
            .push({id: 7, name: 'Side'});
    }

    ngOnInit() {
    }

    public addPrintConfiguration() {
        this.printDocumentConfigurationDialogRef = this.dialog.open(PrintConfigurationFormComponent, {
            panelClass: 'print-document-configuration-dialog',
            height: '350',
            width: '600px',
            data: {
                printDocumentConfiguration: new PrintDocumentConfiguration(),
                printers: this.printers,
                printerTrays: this.printerTrays
            }
        });

        this.printDocumentConfigurationDialogRef.beforeClose()
            .subscribe((response: FormGroup) => {
                if (!response) {
                    return;
                }
                const printDocumentConfiguration: PrintDocumentConfiguration = response.getRawValue();
                printDocumentConfiguration.printDocumentId = this.printDocument.id;
                this.loadingIndicator = true;
                this.printDocumentConfigurationsService
                    .create(printDocumentConfiguration)
                    .subscribe(createdPrintDocumentConfiguration => {
                        this.loadingIndicator = false;
                        this.snackbar
                            .open('Print configuration created', '', {
                                duration: 2000,
                                horizontalPosition: 'left',
                                verticalPosition: 'bottom'
                            });
                        this.rows = [...this.rows, createdPrintDocumentConfiguration];
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

    public editPrintConfiguration(row: PrintDocumentConfiguration) {
        this.printDocumentConfigurationDialogRef = this.dialog.open(PrintConfigurationFormComponent, {
            panelClass: 'print-document-configuration-dialog',
            height: '350',
            width: '600px',
            data: {
                printDocumentConfiguration: row,
                printers: this.printers,
                printerTrays: this.printerTrays
            }
        });

        this.printDocumentConfigurationDialogRef.beforeClose()
            .subscribe((response: FormGroup) => {
                if (!response) {
                    return;
                }
                const printDocumentConfiguration: PrintDocumentConfiguration = response.getRawValue();
                printDocumentConfiguration.printDocumentId = this.printDocument.id;
                this.loadingIndicator = true;
                this.printDocumentConfigurationsService
                    .update(printDocumentConfiguration, row.id)
                    .subscribe(updatedPrintDocumentConfiguration => {
                        this.loadingIndicator = false;
                        this.snackbar
                            .open('Print configuration updated', '', {
                                duration: 2000,
                                horizontalPosition: 'left',
                                verticalPosition: 'bottom'
                            });
                        const updatedIndex = this.rows.findIndex(value => value.id === updatedPrintDocumentConfiguration.id)
                        if (updatedIndex >= 0) {
                            this.rows[updatedIndex] = updatedPrintDocumentConfiguration;
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

    public deletePrintConfiguration(row) {
        this.loadingIndicator = true;
        this.printDocumentConfigurationsService
            .destroy(row.id)
            .subscribe(deleted => {
                this.loadingIndicator = false;
                this.snackbar
                    .open('Print configuration deleted', '', {
                        duration: 2000,
                        horizontalPosition: 'left',
                        verticalPosition: 'bottom'
                    });
                const updatedIndex = this.rows.findIndex(value => value.id === row.id);
                if (updatedIndex >= 0) {
                    // TODO: Remove from table
                    // this.rows[updatedIndex] = ;
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
    }

}
