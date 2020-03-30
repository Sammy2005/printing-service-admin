import {Printer} from '../../printers/printer';
import {PrintDocument} from '../print-document';

export class PrintDocumentConfiguration {
    id: number = 0;
    pages: string;
    printer: Printer;
    printDocumentId: number;
    printDocument: PrintDocument;
    autoPrint: boolean;
    printerTray: number;
    createdAt: Date;
    updatedAt: Date;
}
