import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormReactiveComponent implements OnInit {
    userForm!: FormGroup;
    userName!: FormControl;
    userBirthDate!: FormControl;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.userName = this.fb.control('', {
            validators: [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern('[A-Za-z]*')
            ]
        });

        this.userBirthDate = this.fb.control('', {
            validators: [
                Validators.required,
                createAgeValidator()
            ]
        });

        this.userForm = this.fb.group({
            userName: this.userName,
            userBirthDate: this.userBirthDate
        }, {
            updateOn: 'blur'
        });
    }
}

function createAgeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const birthDatePlus18 = new Date(control.value);
        birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);

        return birthDatePlus18 < new Date() ? null : { tooYoung: true };
    }
}
