import {Printer} from '../printers/printer';
import {PrintDocumentConfiguration} from './print-document-configurations/print-document-configuration';

export class PrintDocument {
    id: number = 0;
    name: string;
    fileName: string;
    defaultPrinter: Printer;
    defaultPrinterTray: number;
    autoPrint: boolean;
    createdAt: Date;
    updatedAt: Date;
    printDocumentConfigurations: PrintDocumentConfiguration[] = [];
}
