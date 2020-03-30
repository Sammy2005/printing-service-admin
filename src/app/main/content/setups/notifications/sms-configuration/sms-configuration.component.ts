import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SmsConfiguration} from './sms-configuration';
import {SmsConfigurationService} from './sms-configuration.service';
import {fuseAnimations} from '@fuse/animations/index';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-sms-configuration',
    templateUrl: './sms-configuration.component.html',
    styleUrls: ['./sms-configuration.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class SmsConfigurationComponent implements OnInit {

    public smsChannelConfigurationForm: FormGroup;
    public smsProvider: string = '';

    public smsConfiguration: SmsConfiguration;

    public fetchingConfiguration: boolean = false;
    public updatingConfiguration: boolean = false;

    constructor(private formBuilder: FormBuilder, private smsConfigurationService: SmsConfigurationService, private snackbar: MatSnackBar) {
        this.smsConfiguration = new SmsConfiguration();

        this.smsChannelConfigurationForm = this.formBuilder.group({
            id: [this.smsConfiguration.id],
            provider: [this.smsConfiguration.provider],
        });
        // this.smsProvider = 'africas-talking';
        this.fetchActiveSmsConfiguration();
    }

    ngOnInit() {
    }

    public fetchActiveSmsConfiguration() {
        this.fetchingConfiguration = true;
        this.smsConfigurationService.getActiveConfiguration()
            .subscribe(response => {
                this.fetchingConfiguration = false;
                if (response) {
                    this.smsConfiguration = response;
                    this.smsChannelConfigurationForm.setValue({
                        provider: this.smsConfiguration.provider,
                        id: this.smsConfiguration.id
                    });
                } else {
                    this.snackbar
                        .open('No SMS provider configuration', '', {
                            duration: 2000,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                        });
                }
            }, error => {
                this.fetchingConfiguration = false;
                this.snackbar
                    .open('An error occurred', '', {
                        duration: 2000,
                        horizontalPosition: 'left',
                        verticalPosition: 'bottom'
                    });
            });
    }

    public save() {
        this.updatingConfiguration = true;

        const smsConfiguration = this.smsChannelConfigurationForm.getRawValue();
        if (smsConfiguration.id === -1) {
            this.smsConfigurationService.create(smsConfiguration)
                .subscribe(response => {
                    this.updatingConfiguration = false;
                    this.snackbar
                        .open('Configuration saved', '', {
                            duration: 2000,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                        });
                }, error => {
                    this.updatingConfiguration = false;
                    this.snackbar
                        .open('An error occurred', '', {
                            duration: 2000,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                        });
                });
        } else {
            this.smsConfigurationService.update(smsConfiguration)
                .subscribe(response => {
                    this.updatingConfiguration = false;
                    this.snackbar
                        .open('Configuration saved', '', {
                            duration: 2000,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                        });
                }, error => {
                    this.updatingConfiguration = false;
                    this.snackbar
                        .open('An error occurred', '', {
                            duration: 2000,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                        });
                });
        }
    }

}
