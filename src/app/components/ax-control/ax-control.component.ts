import { Component, ContentChild, Input } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName, NgModel } from '@angular/forms';

@Component({
    selector: 'ax-control',
    templateUrl: './ax-control.component.html',
    styleUrls: ['./ax-control.component.scss']
})
export class AxControlComponent {
    @Input() title = '';
    @ContentChild(FormControlName) controlReactiveName!: FormControlName;
    @ContentChild(FormControlDirective) controlReactiveDirective!: FormControlDirective;
    @ContentChild(NgModel) controlTemplate!: NgModel;

    public formControl!: FormControl;

    ngAfterContentInit() {
        if(this.controlReactiveName) {
            this.formControl = this.controlReactiveName.control;
        } else if(this.controlReactiveDirective) {
            this.formControl = this.controlReactiveDirective.control;
        } else if(this.controlTemplate) {
            this.formControl = this.controlTemplate.control;
        }
    }
}
