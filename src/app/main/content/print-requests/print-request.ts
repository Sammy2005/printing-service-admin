export class PrintRequest {
    id: number;
    documentPath: string;
    documentReference: string;
    documentAvailable: boolean;
    createadAt: Date;
    updatedAt: Date;

    statusUpdating: boolean = false;
}
