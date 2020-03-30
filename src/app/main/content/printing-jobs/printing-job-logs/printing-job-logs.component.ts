import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from "@fuse/animations";

@Component({
    selector: 'app-printing-job-logs',
    templateUrl: './printing-job-logs.component.html',
    styleUrls: ['./printing-job-logs.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class PrintingJobLogsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
