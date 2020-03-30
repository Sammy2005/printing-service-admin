import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmailConfiguration} from './email-configuration';
import {EmailConfigurationService} from './email-configuration.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-email-configuration',
    templateUrl: './email-configuration.component.html',
    styleUrls: ['./email-configuration.component.scss']
})
export class EmailConfigurationComponent implements OnInit {

    public emailChannelConfigurationForm: FormGroup;
    public emailConfiguration: EmailConfiguration = new EmailConfiguration();


    public fetchingConfiguration: boolean = false;
    public updatingConfiguration: boolean = false;

    constructor(private formBuilder: FormBuilder, private emailConfigurationService: EmailConfigurationService, private snackbar: MatSnackBar) {
        this.emailConfiguration = new EmailConfiguration();

        this.emailChannelConfigurationForm = this.formBuilder.group({
            id: [this.emailConfiguration.id],
            host: [this.emailConfiguration.host],
            port: [this.emailConfiguration.port],
            user: [this.emailConfiguration.user],
            password: [this.emailConfiguration.password],
        });
        this.fetchActiveEmailConfiguration();
    }

    ngOnInit() {
    }

    public fetchActiveEmailConfiguration() {
        this.fetchingConfiguration = true;
        this.emailConfigurationService.getActiveConfiguration()
            .subscribe(response => {
                this.fetchingConfiguration = false;
                if (response) {
                    this.emailConfiguration = response;
                    this.emailChannelConfigurationForm.setValue({
                        port: this.emailConfiguration.port,
                        password: this.emailConfiguration.password,
                        user: this.emailConfiguration.user,
                        host: this.emailConfiguration.host,
                        id: this.emailConfiguration.id
                    });
                } else {
                    this.snackbar
                        .open('No email configuration', '', {
                            duration: 2000,
                            horizontalPosition: 'left',
                            verticalPosition: 'bottom'
                        });
                }
            }, error => {
                this.fetchingConfiguration = false;
            });
    }

    public save() {
        this.updatingConfiguration = true;

        const emailConfiguration = this.emailChannelConfigurationForm.getRawValue();
        if (emailConfiguration.id === -1) {
            this.emailConfigurationService.create(emailConfiguration)
                .subscribe(response => {
                    this.updatingConfiguration = false;
                    this.snackbar
                        .open('Configuration updated', '', {
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
            this.emailConfigurationService.update(emailConfiguration)
                .subscribe(response => {
                    this.updatingConfiguration = false;
                    this.snackbar
                        .open('Configuration updated', '', {
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
