import { Component, ContentChild, Input } from '@angular/core';
import { FormControl, FormControlName, NgModel } from '@angular/forms';

@Component({
    selector: 'ax-control',
    templateUrl: './ax-control.component.html',
    styleUrls: ['./ax-control.component.scss']
})
export class AxControlComponent {
    @Input() title = '';

    public formControl!: FormControl;

    @ContentChild(FormControlName) control!: FormControlName;

    @ContentChild(NgModel) controlTemplate!: NgModel;

    ngAfterContentInit() {
        this.formControl = this.control ? this.control.control : this.controlTemplate.control;
    }
}
