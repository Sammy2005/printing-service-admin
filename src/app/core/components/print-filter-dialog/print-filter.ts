import {Printer} from '../../../main/content/printers/printer';
import {PrintDocumentConfiguration} from '../../../main/content/print-documents/print-document-configurations/print-document-configuration';
import {PrintDocument} from '../../../main/content/print-documents/print-document';

export class PrintFilter {
    printDocument: PrintDocument = null;
    printDocumentConfiguration: PrintDocumentConfiguration = null;
    printer: Printer;
    printerTray: number;
    startDate: Date;
    endDate: Date;
    printDocumentConfigurations: PrintDocumentConfiguration[] = [];
    print: boolean = true;
}
