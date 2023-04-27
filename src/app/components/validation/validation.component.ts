import { Component, Inject, Input } from '@angular/core';
import { AxControlComponent } from '../ax-control/ax-control.component';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'validation',
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {
    @Input() when: string = '';

    public showError: boolean = false;

    constructor(@Inject(AxControlComponent) private parent: AxControlComponent) { }

    ngAfterViewInit() {
        const control: FormControl = this.parent.formControl;

        control?.valueChanges.subscribe(() => {
            this.showError = control.invalid && control.dirty
                && !!control.errors?.hasOwnProperty(this.when);
        });
    }
}
