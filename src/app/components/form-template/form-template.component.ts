import { Component } from '@angular/core';

@Component({
    selector: 'app-form-template',
    templateUrl: './form-template.component.html',
    styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent {
    user = {
        name: '',
        password: '',
        inputDisabled: 'Test Disabled input'
    }
}
