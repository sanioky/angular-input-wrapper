import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    userForm!: FormGroup;
    userName!: FormControl;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.userName = this.fb.control('', {
            validators: [
                Validators.required
            ]
        });

        this.userForm = this.fb.group({
            userName: this.userName
        }, {
            updateOn: 'blur'
        });
    }
}
