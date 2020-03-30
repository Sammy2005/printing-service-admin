import {Component, Input, OnInit} from '@angular/core';
import {NotificationJob} from "../notification-job";

@Component({
    selector: 'app-notification-jobs-list',
    templateUrl: './notification-jobs-list.component.html',
    styleUrls: ['./notification-jobs-list.component.scss']
})
export class NotificationJobsListComponent implements OnInit {

    @Input()
    channel: string = 'sms';

    public selected: any[] = [];

    rows: any[] = [];
    loadingIndicator = false;
    reorderable = true;

    filteredRows: NotificationJob[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
