import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations/index';
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class NotificationsComponent implements OnInit {
    smsChannelConfigurationForm: FormGroup;

    public configurationType: string = 'email';

    constructor() {
    }

    ngOnInit() {
    }

    public configureSmsView() {
        this.configurationType = 'sms';
    }

    public configureEmailView() {
        this.configurationType = 'email';

    }

}
