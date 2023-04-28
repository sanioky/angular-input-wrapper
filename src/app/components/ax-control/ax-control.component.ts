import { Component, ContentChild, Input } from '@angular/core';
import { FormControl, FormControlName, NgModel } from '@angular/forms';

@Component({
    selector: 'ax-control',
    templateUrl: './ax-control.component.html',
    styleUrls: ['./ax-control.component.scss']
})
export class AxControlComponent {
    @Input() title = '';
    @ContentChild(FormControlName) controlReactive!: FormControlName;
    @ContentChild(NgModel) controlTemplate!: NgModel;

    public formControl!: FormControl;

    ngAfterContentInit() {
        if (this.controlReactive || this.controlTemplate) {
            this.formControl = this.controlReactive ? this.controlReactive.control : this.controlTemplate.control;
        }
    }
}
