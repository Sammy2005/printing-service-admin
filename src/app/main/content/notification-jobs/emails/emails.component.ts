import {Component, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {NotificationJob} from '../notification-job';

@Component({
    selector: 'app-emails',
    templateUrl: './emails.component.html',
    styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {

    public selected: any[] = [];

    rows: any[] = [];
    loadingIndicator = false;
    reorderable = true;


    filteredRows: NotificationJob[] = [];

    constructor(public dialog: MatDialog, private route: ActivatedRoute, private snackbar: MatSnackBar) {
        this.rows = this.route.snapshot.data.emails;
        this.filteredRows = this.route.snapshot.data.emails;

    }

    ngOnInit() {
    }

}
