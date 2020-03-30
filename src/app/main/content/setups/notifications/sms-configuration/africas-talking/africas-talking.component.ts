import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AfricasTalkingConfiguration} from './africas-talking-configuration';
import {fuseAnimations} from '@fuse/animations/index';

@Component({
    selector: 'app-africas-talking',
    templateUrl: './africas-talking.component.html',
    styleUrls: ['./africas-talking.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class AfricasTalkingComponent implements OnInit {
    @Input('configurationForm')
    public configurationForm: FormGroup;

    @Input('configuration')
    public configuration: any;

    constructor(private formBuilder: FormBuilder) {
        if (this.configuration == null) {
            this.configuration = new AfricasTalkingConfiguration();
        }
    }

    ngOnInit() {
        if (this.configuration == null) {
            this.configuration = new AfricasTalkingConfiguration();
        }
        if (this.configurationForm.get('configuration')) {
            this.configurationForm.removeControl('configuration');
        }
        this.configurationForm.addControl('configuration', this.formBuilder.group({
            username: [this.configuration.username],
            apiKey: [this.configuration.apiKey],
            shortCode: [this.configuration.shortCode],
        }));
        // console.log(this.configurationForm.controls);
    }

}
