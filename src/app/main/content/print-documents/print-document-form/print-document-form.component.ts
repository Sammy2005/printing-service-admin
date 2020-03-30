import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PrintDocument} from '../print-document';
import {Printer} from '../../printers/printer';
import {fuseAnimations} from '@fuse/animations';

@Component({
    selector: 'app-print-document-form',
    templateUrl: './print-document-form.component.html',
    styleUrls: ['./print-document-form.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class PrintDocumentFormComponent implements OnInit {
    public printDocumentForm: FormGroup;
    public printDocument: PrintDocument;

    public printerTrays: any[] = [];
    public printers: Printer[] = [];

    constructor(public dialogRef: MatDialogRef<PrintDocumentFormComponent>,
                @Inject(MAT_DIALOG_DATA) private data: any,
                private formBuilder: FormBuilder) {

        this.printDocument = data.printDocument;
        this.printers = data.printers;

        if (this.printDocument.defaultPrinter == null || this.printDocument.defaultPrinter === undefined) {
            this.printDocument.defaultPrinter = null;
        }

        if (this.printDocument.id === 0) {
            this.printDocument.defaultPrinterTray = -1;
        }

        this.printDocumentForm = this.formBuilder.group({
            id: [this.printDocument.id],
            name: [this.printDocument.name],
            autoPrint: [this.printDocument.autoPrint],
            fileName: [this.printDocument.fileName],
            defaultPrinter: [this.printDocument.defaultPrinter === null ? null : this.printDocument.defaultPrinter],
            defaultPrinterTray: [this.printDocument.defaultPrinterTray]
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

    public save() {
        this.dialogRef.close(this.printDocumentForm);
    }

    public selectedPrinter(p1: Printer, p2: Printer) {
        return (p1 && p2) && p1.id === p2.id;
    }

}
