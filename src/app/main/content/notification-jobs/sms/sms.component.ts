import {Component, OnInit} from '@angular/core';
import {NotificationJob} from "../notification-job";
import {MatDialog, MatSnackBar} from "@angular/material";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-sms',
    templateUrl: './sms.component.html',
    styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {

    public selected: any[] = [];

    rows: any[] = [];
    loadingIndicator = false;
    reorderable = true;


    filteredRows: NotificationJob[] = [];

    constructor(public dialog: MatDialog, private route: ActivatedRoute, private snackbar: MatSnackBar) {
        this.rows = this.route.snapshot.data.sms;
        this.filteredRows = this.route.snapshot.data.sms;

    }

    ngOnInit() {
    }

}
