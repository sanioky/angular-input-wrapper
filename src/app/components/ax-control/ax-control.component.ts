import { Component, ContentChild, Input } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';

@Component({
    selector: 'ax-control',
    templateUrl: './ax-control.component.html',
    styleUrls: ['./ax-control.component.scss']
})
export class AxControlComponent {
    @Input() title = '';

    public formControl!: FormControl;

    @ContentChild(FormControlName) control!: FormControlName;

    ngAfterContentInit() {
        this.formControl = this.control.control;
    }
}
