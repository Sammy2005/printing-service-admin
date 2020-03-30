import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Printer} from '../../../printers/printer';
import {PrintDocumentConfiguration} from '../print-document-configuration';
import {fuseAnimations} from '@fuse/animations';

@Component({
    selector: 'app-print-configuration-form',
    templateUrl: './print-configuration-form.component.html',
    styleUrls: ['./print-configuration-form.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class PrintConfigurationFormComponent implements OnInit {
    public printDocumentConfigurationForm: FormGroup;
    public printDocumentConfiguration: PrintDocumentConfiguration;

    public printerTrays: any[] = [];
    public printers: Printer[] = [];

    constructor(public dialogRef: MatDialogRef<PrintConfigurationFormComponent>,
                @Inject(MAT_DIALOG_DATA) private data: any,
                private formBuilder: FormBuilder) {

        this.printDocumentConfiguration = data.printDocumentConfiguration;
        this.printers = data.printers;
        this.printerTrays = data.printerTrays;

        // console.log(/^([0-9]{0,}[-][0-9]{0,}|[0-9]{0,}[,][0-9]{0,}|[0-9]{0,})+$/.test('1-8,36-45,8,128,3873,5,g'));

        this.printDocumentConfigurationForm = this.formBuilder.group({
            id: [this.printDocumentConfiguration.id],
            pages: [this.printDocumentConfiguration.pages, Validators.pattern(/^([0-9]{0,}[-][0-9]{0,}|[0-9]{0,}[,][0-9]{0,}|[0-9]{0,})+$/)],
            printer: [this.printDocumentConfiguration.printer],
            printerTray: [this.printDocumentConfiguration.printerTray],
            autoPrint: [this.printDocumentConfiguration.autoPrint]
        });
    }

    ngOnInit() {
    }

    public selectedPrinter(p1: Printer, p2: Printer) {
        return (p1 && p2) && p1.id === p2.id;
    }

    public save() {
        console.log(this.printDocumentConfigurationForm);
        this.dialogRef.close(this.printDocumentConfigurationForm);
    }

}
