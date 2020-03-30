import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Printer} from '../printer';

@Component({
    selector: 'app-printer-form',
    templateUrl: './printer-form.component.html',
    styleUrls: ['./printer-form.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class PrinterFormComponent implements OnInit {

    public printerForm: FormGroup;
    public printer: Printer;

    constructor(public dialogRef: MatDialogRef<PrinterFormComponent>,
                @Inject(MAT_DIALOG_DATA) private data: any,
                private formBuilder: FormBuilder) {
        this.printer = data.printer;

        this.printerForm = this.formBuilder.group({
            id: [this.printer.id],
            name: [this.printer.name],
            host: [this.printer.host],
            default: [this.printer.default],
            username: [this.printer.username],
            password: [this.printer.password]
        });
    }

    ngOnInit() {
    }

    save() {
        this.dialogRef.close(this.printerForm);
    }


}
