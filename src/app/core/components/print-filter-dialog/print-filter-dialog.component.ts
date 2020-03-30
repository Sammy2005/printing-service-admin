import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {fuseAnimations} from '@fuse/animations';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PrintFilter} from "./print-filter";
import {PrintDocument} from "../../../main/content/print-documents/print-document";
import {Printer} from "../../../main/content/printers/printer";
import {PrintingJobsService} from "../../../main/content/printing-jobs/printing-jobs.service";

@Component({
    selector: 'app-print-filter-dialog',
    templateUrl: './print-filter-dialog.component.html',
    styleUrls: ['./print-filter-dialog.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class PrintFilterDialogComponent implements OnInit {

    printFilterForm: FormGroup;

    printFilter: PrintFilter;

    printDocuments: PrintDocument[];
    printers: Printer[];

    printerTrays: any[] = [];

    constructor(public dialogRef: MatDialogRef<PrintFilterDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private data: any, private formBuilder: FormBuilder,
                private printingJobsService: PrintingJobsService) {

        this.printFilter = data.printFilter || new PrintFilter();
        this.printDocuments = data.printDocuments;
        this.printers = data.printers;

        this.printFilterForm = this.formBuilder.group({
            printDocument: [this.printFilter.printDocument],
            printDocumentConfiguration: [this.printFilter.printDocumentConfiguration],
            printer: [this.printFilter.printer],
            printerTray: [this.printFilter.printerTray],
            startDate: [this.printFilter.startDate],
            endDate: [this.printFilter.endDate]
        });

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

    print() {
        const printFilter = this.printFilterForm.getRawValue();

        this.printingJobsService
            .startBatchPrintJob(printFilter)
            .subscribe(response => {
                this.dialogRef.close({printFilter: printFilter, printingJobs: response})
            }, error => {
                console.log(error);
            });
    }

    filter() {
        const printFilter = this.printFilterForm.getRawValue();

        this.printingJobsService
            .filter(printFilter)
            .subscribe(response => {
                this.dialogRef.close({printFilter: printFilter, printingJobs: response})
            }, error => {
                console.log(error);
            });
    }

}
