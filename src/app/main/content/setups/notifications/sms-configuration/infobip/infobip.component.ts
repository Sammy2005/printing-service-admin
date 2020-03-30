import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from "@fuse/animations/index";
import {InfobipConfiguration} from "./infobip-configuration";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-infobip',
    templateUrl: './infobip.component.html',
    styleUrls: ['./infobip.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class InfobipComponent implements OnInit {
    @Input('configurationForm')
    public configurationForm: FormGroup;

    @Input('configuration')
    public configuration: any;

    constructor(private formBuilder: FormBuilder) {
        if (this.configuration == null) {
            this.configuration = new InfobipConfiguration();
        }
    }

    ngOnInit() {
        if (this.configuration == null) {
            this.configuration = new InfobipConfiguration();
        }
        if (this.configurationForm.get('configuration')) {
            this.configurationForm.removeControl('configuration');
        }
        this.configurationForm.addControl('configuration', this.formBuilder.group({
            username: [this.configuration.username],
            password: [this.configuration.password],
            shortCode: [this.configuration.shortCode],
        }));
        // console.log(this.configurationForm.controls);
    }

}
