import {PrintRequest} from '../print-requests/print-request';

export class PrintingJob {
    id: number;
    printer: any;
    printerTray: number;
    printRequest: PrintRequest;
    jobId: number;
    pagesCount: number;
    pages: string;
    documentPath: string;
    documentAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
    statusUpdating: boolean;
    completed: boolean;
    completedDateTime: Date;
    status: string;
    printedPagesCount: number;
}
